export function Wordmark({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const word = tone === "cream" ? "#f6f1e7" : "#1c1b19"
  const accent = tone === "cream" ? "#f2a900" : "#1e4638"

  return (
    <svg viewBox="0 0 112 32" className="block h-8 w-auto" aria-hidden="true">
      <g fill={accent}>
        <path d="M1.5 15.2 15.2 7.4 17.2 10.8 3.5 18.6Z" />
        <path d="M3.4 18.2 19.4 12 20.9 15.1 4.9 21.3Z" />
        <path d="M6.2 21.2 21.4 17.1 22.5 19.8 7.3 23.9Z" />
      </g>
      <text x="30" y="15" fill={word} fontFamily="Outfit, sans-serif" fontSize="14" fontWeight="600" letterSpacing="1.6">
        AILES
      </text>
      <text x="30.4" y="26" fill={accent} fontFamily="Outfit, sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="2.15">
        GLOBAL
      </text>
    </svg>
  )
}
