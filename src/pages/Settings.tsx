import { useEffect, useRef, useState } from 'react'
import { MODEL_TARGETS } from '../curriculum/promptComposer'
import { STYLE_LIST } from '../curriculum/styles'
import { AVAILABLE_COURSES } from '../curriculum/registry'
import { GRADES } from '../curriculum/taxonomy'
import { applyTheme, useLearners, usePrefs, useToasts, type ThemeMode } from '../lib/store'
import {
  allSavedImages,
  deleteLearner,
  exportBackup,
  importBackup,
  storageEstimate,
  type BackupBundle,
} from '../lib/db'
import { Button, Section, Segmented, SUBJECT_COLOUR } from '../ui/primitives'
import { IconDownload, IconTrash, IconUpload } from '../ui/icons'
import { ModelPicker, OutputControls } from '../ui/ModelPicker'
import { formatUsd } from '../lib/openrouter'
import type { ModelTarget, StylePresetId } from '../curriculum/types'

export default function Settings() {
  const prefs = usePrefs()
  const { learners, load } = useLearners()
  const push = useToasts((s) => s.push)
  const importRef = useRef<HTMLInputElement>(null)

  const [usage, setUsage] = useState<{ usage: number; quota: number } | null>(null)
  const [showKey, setShowKey] = useState(false)
  const [showLegacy, setShowLegacy] = useState(false)
  const [spend, setSpend] = useState<{ images: number; usd: number } | null>(null)

  useEffect(() => {
    void storageEstimate().then(setUsage)
  }, [learners])

  useEffect(() => {
    void allSavedImages().then((images) =>
      setSpend({
        images: images.length,
        usd: images.reduce((sum, i) => sum + (i.costUsd ?? 0), 0),
      }),
    )
  }, [])

  async function doExport() {
    try {
      const bundle = await exportBackup()
      const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `skool-backup-${new Date().toISOString().slice(0, 10)}.json`
      a.click()
      URL.revokeObjectURL(url)
      push('Backup downloaded.', 'success')
    } catch (err) {
      push(err instanceof Error ? err.message : 'Export failed.', 'error')
    }
  }

  async function doImport(file: File) {
    try {
      const bundle = JSON.parse(await file.text()) as BackupBundle
      await importBackup(bundle)
      await load()
      push('Backup restored.', 'success')
    } catch (err) {
      push(err instanceof Error ? err.message : 'That file could not be read as a backup.', 'error')
    }
  }

  const mb = (n: number) => `${(n / 1024 / 1024).toFixed(1)} MB`

  return (
    <div className="max-w-3xl mx-auto px-5 py-7 lg:py-9">
      <header className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="muted mt-1 text-[14px]">
          Everything here is stored on this device only.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        {/* ---------------------------------------------------- appearance */}
        <Section title="Appearance">
          <Segmented
            value={prefs.theme}
            onChange={(t: ThemeMode) => {
              prefs.setTheme(t)
              applyTheme(t)
            }}
            options={[
              { value: 'light' as const, label: 'Light' },
              { value: 'dark' as const, label: 'Dark' },
              { value: 'system' as const, label: 'System' },
            ]}
          />
        </Section>

        {/* --------------------------------------------------- prompt prefs */}
        <Section
          title="Image prompt defaults"
          hint="The format prompts are written in when you copy them out. In-app generation picks the format that suits the model it is calling."
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-[12px] font-medium muted block mb-1.5">Prompt format</span>
              <select
                value={prefs.promptTarget}
                onChange={(e) => prefs.setPromptTarget(e.target.value as ModelTarget)}
                className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500"
              >
                {MODEL_TARGETS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
              <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
                {MODEL_TARGETS.find((m) => m.id === prefs.promptTarget)?.hint}
              </span>
            </label>

            <label className="block">
              <span className="text-[12px] font-medium muted block mb-1.5">Style override</span>
              <select
                value={prefs.styleOverride ?? ''}
                onChange={(e) =>
                  prefs.setStyleOverride((e.target.value || null) as StylePresetId | null)
                }
                className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] outline-none focus:border-blue-500"
              >
                <option value="">Use each lesson's own style</option>
                {STYLE_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
                {prefs.styleOverride
                  ? STYLE_LIST.find((s) => s.id === prefs.styleOverride)?.description
                  : 'Recommended — each worksheet picks the style that suits its activity.'}
              </span>
            </label>
          </div>
        </Section>

        {/* ------------------------------------------------------- api key */}
        <Section
          title="Generate images in the app"
          hint="Optional. Without a key you can still copy every prompt into any generator."
        >
          <label className="block mb-3">
            <span className="text-[12px] font-medium muted block mb-1.5">OpenRouter API key</span>
            <div className="flex gap-2">
              <input
                type={showKey ? 'text' : 'password'}
                value={prefs.openrouterKey}
                onChange={(e) => prefs.setOpenrouterKey(e.target.value)}
                placeholder="sk-or-v1-…"
                spellCheck={false}
                autoComplete="off"
                className="flex-1 px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] font-mono outline-none focus:border-blue-500"
              />
              <Button onClick={() => setShowKey((v) => !v)}>{showKey ? 'Hide' : 'Show'}</Button>
            </div>
            <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
              Create one at{' '}
              <a
                href="https://openrouter.ai/keys"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
              >
                openrouter.ai/keys
              </a>
              . One key reaches every image model below.
            </span>
          </label>

          <p className="text-[12.5px] muted leading-relaxed mb-5">
            The key is stored in this browser's local storage and sent only to{' '}
            <code className="text-[11.5px] px-1 py-0.5 rounded bg-[var(--surface-3)]">
              openrouter.ai
            </code>
            . Skool has no backend — the site is static files on a CDN, so there is nowhere for it to
            send your key even in principle. Generated images are saved into this device's local
            database and survive a refresh.
          </p>

          <div className="border-t pt-4">
            <h4 className="text-[12px] font-semibold uppercase tracking-wide faint mb-2.5">
              Image model
            </h4>
            <ModelPicker />
            <div className="mt-4">
              <OutputControls />
            </div>
          </div>

          {spend && spend.images > 0 && (
            <div className="border-t mt-4 pt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-medium">Generated so far</p>
                <p className="text-[12px] faint mt-0.5">
                  {spend.images} image{spend.images === 1 ? '' : 's'} on this device
                  {spend.usd === 0 && ' · cost not reported by the provider'}
                </p>
              </div>
              {spend.usd > 0 && (
                <p className="text-[20px] font-semibold tabular-nums shrink-0">
                  {formatUsd(spend.usd)}
                </p>
              )}
            </div>
          )}

          <div className="border-t mt-4 pt-4">
            <button
              onClick={() => setShowLegacy((v) => !v)}
              className="text-[12px] muted hover:text-[var(--text)] focus-ring rounded"
            >
              {showLegacy ? 'Hide' : 'Use an OpenAI key directly instead'}
            </button>
            {showLegacy && (
              <label className="block mt-2.5">
                <span className="text-[12px] font-medium muted block mb-1.5">OpenAI API key</span>
                <input
                  type="password"
                  value={prefs.openaiKey}
                  onChange={(e) => prefs.setOpenaiKey(e.target.value)}
                  placeholder="sk-…"
                  spellCheck={false}
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-lg border bg-[var(--surface-2)] text-[13px] font-mono outline-none focus:border-blue-500"
                />
                <span className="block text-[11.5px] faint mt-1.5 leading-relaxed">
                  Sent to api.openai.com and always uses gpt-image-1. Only used when no OpenRouter
                  key is set — that route has no model choice and no cost estimate.
                </span>
              </label>
            )}
          </div>
        </Section>

        {/* ------------------------------------------------------- learners */}
        <Section title="Learners" hint="Deleting a learner also deletes their progress and workbook.">
          {learners.length === 0 ? (
            <p className="text-[13px] muted">No learners yet. Add one from the sidebar.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {learners.map((l) => (
                <div key={l.id} className="flex items-center gap-3 p-2.5 rounded-lg border">
                  <span
                    className="w-9 h-9 rounded-lg grid place-items-center text-lg shrink-0"
                    style={{ background: `color-mix(in srgb, ${l.colour} 18%, transparent)` }}
                  >
                    {l.avatar}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13.5px] font-medium">{l.name}</span>
                    <span className="block text-[11.5px] faint">
                      {GRADES.find((g) => g.id === l.gradeId)?.name}
                    </span>
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<IconTrash size={13} />}
                    onClick={async () => {
                      if (
                        !window.confirm(
                          `Delete ${l.name}? This permanently removes their progress, planner entries and workbook pages from this device.`,
                        )
                      )
                        return
                      await deleteLearner(l.id)
                      if (usePrefs.getState().activeLearnerId === l.id) {
                        usePrefs.getState().setActiveLearner(null)
                      }
                      await load()
                      push(`${l.name} deleted.`, 'success')
                    }}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* --------------------------------------------------------- backup */}
        <Section
          title="Backup"
          hint="A single JSON file with every learner, all progress, and every workbook photo."
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <Button icon={<IconDownload size={15} />} onClick={() => void doExport()}>
              Export everything
            </Button>
            <input
              ref={importRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) void doImport(f)
                e.target.value = ''
              }}
            />
            <Button icon={<IconUpload size={15} />} onClick={() => importRef.current?.click()}>
              Restore from a backup
            </Button>
          </div>
          {usage && (
            <p className="text-[12.5px] muted">
              Using {mb(usage.usage)} of roughly {mb(usage.quota)} available to this site.
            </p>
          )}
        </Section>

        {/* ---------------------------------------------------------- about */}
        <Section title="About">
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px]">
            <Row label="Courses in this build" value={String(AVAILABLE_COURSES.size)} />
            <Row label="Grades covered" value={`${GRADES.length} (PK3 – Grade 12)`} />
            <Row label="Prompt formats" value={String(MODEL_TARGETS.length)} />
            <Row label="Art styles" value={String(STYLE_LIST.length)} />
          </dl>

          <div className="flex gap-1.5 mt-4">
            {Object.entries(SUBJECT_COLOUR).map(([id, c]) => (
              <span key={id} className="h-1.5 flex-1 rounded-full" style={{ background: c }} />
            ))}
          </div>

          <p className="text-[12.5px] muted leading-relaxed mt-4">
            Skool is a standards-aligned curriculum studio. Lesson plans map to Common Core (Math
            and ELA), NGSS, the C3 Framework, and Head Start ELOF for the preschool years. It runs
            entirely in the browser and works offline once loaded.
          </p>
        </Section>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b py-1.5">
      <dt className="muted">{label}</dt>
      <dd className="font-medium tabular-nums">{value}</dd>
    </div>
  )
}
