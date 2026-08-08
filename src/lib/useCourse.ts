import { useEffect, useState } from 'react'
import { findLesson, loadCourse } from '../curriculum/registry'
import { GRADE_BY_ID, SUBJECT_BY_ID } from '../curriculum/taxonomy'
import type { GradeId, Lesson, SubjectCourse, SubjectId, Unit } from '../curriculum/types'

export interface CourseLoad {
  course: SubjectCourse | null
  loading: boolean
  /** True when the ids are valid but no course file exists for them. */
  missing: boolean
}

export function useCourse(gradeId?: string, subjectId?: string): CourseLoad {
  const [state, setState] = useState<CourseLoad>({ course: null, loading: true, missing: false })

  useEffect(() => {
    let cancelled = false
    const validGrade = gradeId && gradeId in GRADE_BY_ID
    const validSubject = subjectId && subjectId in SUBJECT_BY_ID

    if (!validGrade || !validSubject) {
      setState({ course: null, loading: false, missing: true })
      return
    }

    setState({ course: null, loading: true, missing: false })
    void loadCourse(gradeId as GradeId, subjectId as SubjectId).then((course) => {
      if (!cancelled) setState({ course, loading: false, missing: !course })
    })

    return () => {
      cancelled = true
    }
  }, [gradeId, subjectId])

  return state
}

export interface LessonLoad extends CourseLoad {
  lesson: Lesson | null
  unit: Unit | null
  /** Previous and next authored-or-outline lessons across the whole course. */
  prev: Lesson | null
  next: Lesson | null
}

export function useLesson(gradeId?: string, subjectId?: string, lessonId?: string): LessonLoad {
  const base = useCourse(gradeId, subjectId)

  if (!base.course || !lessonId) {
    return { ...base, lesson: null, unit: null, prev: null, next: null }
  }

  const found = findLesson(base.course, lessonId)
  if (!found) {
    return { ...base, lesson: null, unit: null, prev: null, next: null, missing: true }
  }

  const flat = base.course.units.flatMap((u) => u.lessons)
  const i = flat.findIndex((l) => l.id === lessonId)

  return {
    ...base,
    lesson: found.lesson,
    unit: found.unit,
    prev: i > 0 ? flat[i - 1] : null,
    next: i >= 0 && i < flat.length - 1 ? flat[i + 1] : null,
  }
}
