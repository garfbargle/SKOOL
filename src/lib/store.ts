import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ModelTarget, StylePresetId } from '../curriculum/types'
import {
  listLearners,
  recordsForLearner,
  saveLearner,
  uid,
  type Learner,
  type LessonRecord,
  type Mastery,
  putRecord,
  recordId,
} from './db'

export type ThemeMode = 'light' | 'dark' | 'system'

/* --------------------------------------------------------- preferences */

interface PrefsState {
  theme: ThemeMode
  /** Default image model the prompt panel opens on. */
  promptTarget: ModelTarget
  /** Overrides the worksheet's own style when set. */
  styleOverride: StylePresetId | null
  activeLearnerId: string | null
  /** Optional key for in-app image generation. Never leaves the device. */
  openaiKey: string
  setTheme: (t: ThemeMode) => void
  setPromptTarget: (t: ModelTarget) => void
  setStyleOverride: (s: StylePresetId | null) => void
  setActiveLearner: (id: string | null) => void
  setOpenaiKey: (k: string) => void
}

export const usePrefs = create<PrefsState>()(
  persist(
    (set) => ({
      theme: 'system',
      promptTarget: 'universal',
      styleOverride: null,
      activeLearnerId: null,
      openaiKey: '',
      setTheme: (theme) => {
        set({ theme })
        applyTheme(theme)
      },
      setPromptTarget: (promptTarget) => set({ promptTarget }),
      setStyleOverride: (styleOverride) => set({ styleOverride }),
      setActiveLearner: (activeLearnerId) => set({ activeLearnerId }),
      setOpenaiKey: (openaiKey) => set({ openaiKey }),
    }),
    { name: 'skool.prefs' },
  ),
)

export function applyTheme(mode: ThemeMode) {
  const dark =
    mode === 'dark' ||
    (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  // The pre-paint script in index.html reads this key.
  localStorage.setItem('skool.theme', mode)
}

/* -------------------------------------------------------------- learners */

interface LearnerState {
  learners: Learner[]
  records: Record<string, LessonRecord>
  loaded: boolean
  load: () => Promise<void>
  addLearner: (input: { name: string; avatar: string; gradeId: string; colour: string }) => Promise<Learner>
  updateLearner: (l: Learner) => Promise<void>
  loadRecords: (learnerId: string) => Promise<void>
  setLessonStatus: (
    input: {
      learnerId: string
      lessonId: string
      gradeId: string
      subjectId: string
      lessonTitle: string
    },
    patch: Partial<Pick<LessonRecord, 'status' | 'mastery' | 'notes' | 'minutesSpent'>>,
  ) => Promise<void>
}

export const useLearners = create<LearnerState>((set, get) => ({
  learners: [],
  records: {},
  loaded: false,

  load: async () => {
    const learners = await listLearners()
    set({ learners, loaded: true })
    const active = usePrefs.getState().activeLearnerId
    // Fall back to the first learner if the persisted one has been deleted.
    if (learners.length && (!active || !learners.some((l) => l.id === active))) {
      usePrefs.getState().setActiveLearner(learners[0].id)
    }
    const id = usePrefs.getState().activeLearnerId
    if (id) await get().loadRecords(id)
  },

  addLearner: async ({ name, avatar, gradeId, colour }) => {
    const learner: Learner = { id: uid(), name, avatar, gradeId, colour, createdAt: Date.now() }
    await saveLearner(learner)
    set((s) => ({ learners: [...s.learners, learner] }))
    if (!usePrefs.getState().activeLearnerId) usePrefs.getState().setActiveLearner(learner.id)
    return learner
  },

  updateLearner: async (l) => {
    await saveLearner(l)
    set((s) => ({ learners: s.learners.map((x) => (x.id === l.id ? l : x)) }))
  },

  loadRecords: async (learnerId) => {
    const list = await recordsForLearner(learnerId)
    set({ records: Object.fromEntries(list.map((r) => [r.lessonId, r])) })
  },

  setLessonStatus: async (input, patch) => {
    const existing = get().records[input.lessonId]
    const now = Date.now()
    const next: LessonRecord = {
      id: recordId(input.learnerId, input.lessonId),
      learnerId: input.learnerId,
      lessonId: input.lessonId,
      gradeId: input.gradeId,
      subjectId: input.subjectId,
      lessonTitle: input.lessonTitle,
      status: patch.status ?? existing?.status ?? 'in-progress',
      mastery: patch.mastery ?? existing?.mastery,
      notes: patch.notes ?? existing?.notes,
      minutesSpent: patch.minutesSpent ?? existing?.minutesSpent,
      startedAt: existing?.startedAt ?? now,
      completedAt:
        (patch.status ?? existing?.status) === 'done' ? (existing?.completedAt ?? now) : undefined,
      updatedAt: now,
    }
    await putRecord(next)
    set((s) => ({ records: { ...s.records, [input.lessonId]: next } }))
  },
}))

export const MASTERY_LABEL: Record<Mastery, string> = {
  emerging: 'Emerging',
  developing: 'Developing',
  secure: 'Secure',
}

/* ----------------------------------------------------------------- toasts */

export interface Toast {
  id: string
  message: string
  tone: 'info' | 'success' | 'error'
}

interface ToastState {
  toasts: Toast[]
  push: (message: string, tone?: Toast['tone']) => void
  dismiss: (id: string) => void
}

export const useToasts = create<ToastState>((set) => ({
  toasts: [],
  push: (message, tone = 'info') => {
    const id = uid()
    set((s) => ({ toasts: [...s.toasts, { id, message, tone }] }))
    setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), 3200)
  },
  dismiss: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}))
