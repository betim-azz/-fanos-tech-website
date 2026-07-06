"use client";

// Signature visual: scattered nodes resolve into an ordered grid on load —
// a visual metaphor for FANOS turning operational chaos into structured systems.
export default function LedgerGrid() {
  const cols = 6;
  const rows = 5;
  const cellW = 48;
  const cellH = 40;
  const originX = 20;
  const originY = 20;

  const nodes = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const targetX = originX + col * cellW;
    const targetY = originY + row * cellH;
    // deterministic pseudo-random scatter offset per node
    const seed = (i * 37) % 100;
    const scatterX = targetX + ((seed % 10) - 5) * 9;
    const scatterY = targetY + (((seed * 3) % 10) - 5) * 9;
    const delay = (seed % 30) * 0.02;
    return { targetX, targetY, scatterX, scatterY, delay, key: i };
  });

  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full h-auto max-w-md"
      role="img"
      aria-label="Animated grid representing scattered data organizing into structured rows and columns"
    >
      <style>{`
        .node {
          animation: settle 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes settle {
          0% { transform: translate(var(--sx), var(--sy)); opacity: 0.35; }
          100% { transform: translate(var(--tx), var(--ty)); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .node { animation: none; transform: translate(var(--tx), var(--ty)); }
        }
      `}</style>
      {nodes.map((n) => (
        <circle
          key={n.key}
          className="node"
          style={
            {
              "--sx": `${n.scatterX - n.targetX}px`,
              "--sy": `${n.scatterY - n.targetY}px`,
              "--tx": "0px",
              "--ty": "0px",
              animationDelay: `${n.delay}s`,
            } as React.CSSProperties
          }
          cx={n.targetX}
          cy={n.targetY}
          r={n.key % 7 === 0 ? 4.5 : 2.5}
          fill={n.key % 7 === 0 ? "#C8862E" : "#16223D"}
          fillOpacity={n.key % 7 === 0 ? 1 : 0.55}
        />
      ))}
    </svg>
  );
}
