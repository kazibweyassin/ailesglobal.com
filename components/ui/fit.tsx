import { statusLabel } from "@/lib/match"
import type { FitStatus } from "@/lib/types"

const fill: Record<FitStatus, string> = {
  strong_potential: "bg-[#1e4638]",
  potential: "bg-[#3f6b52]",
  needs_improvement: "bg-[#a6843d]",
  limited_fit: "bg-[#8a8172]",
}

const pill: Record<FitStatus, string> = {
  strong_potential: "bg-[#d7e6c8] text-[#1e4638]",
  potential: "bg-[#e7f0df] text-[#1e4638]",
  needs_improvement: "bg-[#f3e6c8] text-[#6b4e12]",
  limited_fit: "bg-[#efe6d6] text-[#5e594f]",
}

export function ScoreBar({ score, status, inverse = false }: { score: number; status: FitStatus; inverse?: boolean }) {
  const width = Math.max(0, Math.min(100, score))
  return (
    <div className={`h-1.5 overflow-hidden rounded-full ${inverse ? "bg-white/20" : "bg-[#e4d9c8]"}`} role="img" aria-label={`${score} out of 100, ${statusLabel(status)}`}>
      <div className={`h-full rounded-full ${inverse ? "bg-[#d7e6c8]" : fill[status]}`} style={{ width: `${width}%` }} />
    </div>
  )
}

export function StatusPill({ status }: { status: FitStatus }) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${pill[status]}`}>{statusLabel(status)}</span>
}
