'use client';

const GREEN = '#20D55A';

type LogoProps = {
  className?: string;
  variant?: 'full' | 'mark' | 'icon' | 'live';
  size?: number;
};

export default function MemeMCPLogo({ className = '', variant = 'full', size = 120 }: LogoProps) {
  const strokeWidth = Math.max(1.5, size / 50);
  const nodeR = size * 0.06;
  const uid = `logo-${variant}-${size}`;

  // Central node + 3 connection nodes (server/network feel)
  const center = { cx: size * 0.5, cy: size * 0.38 };
  const nodes = [
    { cx: size * 0.22, cy: size * 0.28 },
    { cx: size * 0.78, cy: size * 0.28 },
    { cx: size * 0.5, cy: size * 0.58 },
  ];

  const showLive = variant === 'live';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={variant === 'icon' || variant === 'live' ? `0 0 ${size} ${size}` : `0 0 ${size * 2.15} ${size}`}
      width={variant === 'icon' || variant === 'live' ? size : size * 2.15}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`logoGreen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GREEN} stopOpacity={1} />
          <stop offset="100%" stopColor="#18e060" stopOpacity={0.95} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={size * 0.008} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Pulse ring for live variant */}
        <circle id={`liveDot-${uid}`} r={nodeR * 1.4} fill="none" stroke={GREEN} strokeWidth={strokeWidth} opacity="0.9" />
      </defs>

      {/* Connection lines: center to nodes + triangle between outer nodes */}
      <g stroke={`url(#logoGreen-${uid})`} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1={center.cx} y1={center.cy} x2={nodes[0].cx} y2={nodes[0].cy} />
        <line x1={center.cx} y1={center.cy} x2={nodes[1].cx} y2={nodes[1].cy} />
        <line x1={center.cx} y1={center.cy} x2={nodes[2].cx} y2={nodes[2].cy} />
        <line x1={nodes[0].cx} y1={nodes[0].cy} x2={nodes[1].cx} y2={nodes[1].cy} opacity="0.7" />
        <line x1={nodes[1].cx} y1={nodes[1].cy} x2={nodes[2].cx} y2={nodes[2].cy} opacity="0.7" />
        <line x1={nodes[2].cx} y1={nodes[2].cy} x2={nodes[0].cx} y2={nodes[0].cy} opacity="0.7" />
        {/* Data flow baseline */}
        <line x1={size * 0.12} y1={size * 0.78} x2={size * 0.88} y2={size * 0.78} />
        <line x1={size * 0.12} y1={size * 0.86} x2={size * 0.5} y2={size * 0.86} opacity="0.8" />
      </g>

      {/* Central hub (server) */}
      <circle
        cx={center.cx}
        cy={center.cy}
        r={nodeR * 1.2}
        fill="none"
        stroke={`url(#logoGreen-${uid})`}
        strokeWidth={strokeWidth}
        filter={`url(#glow-${uid})`}
      />

      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={nodeR}
          fill="none"
          stroke={`url(#logoGreen-${uid})`}
          strokeWidth={strokeWidth}
        />
      ))}

      {/* Live pulse rings (only for live variant) */}
      {showLive && (
        <g>
          <circle cx={center.cx} cy={center.cy} r={nodeR * 1.4} fill="none" stroke={GREEN} strokeWidth={strokeWidth * 0.8} opacity="0.6" className="animate-ping-slow" />
          <circle cx={center.cx} cy={center.cy} r={nodeR * 2} fill="none" stroke={GREEN} strokeWidth={strokeWidth * 0.5} opacity="0.3" className="animate-ping-slower" />
          {/* Live dot indicator */}
          <circle cx={size * 0.82} cy={size * 0.12} r={size * 0.04} fill={GREEN} className="animate-pulse" />
        </g>
      )}

      {variant !== 'icon' && variant !== 'live' && (
        <g transform={`translate(0, ${size * 0.5})`}>
          <text
            x={size * 1.02}
            y={0}
            fontSize={size * 0.24}
            fontWeight="600"
            fill="#ffffff"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.02em"
          >
            4Meme
          </text>
          <text
            x={size * 1.02}
            y={size * 0.3}
            fontSize={size * 0.24}
            fontWeight="600"
            fill={GREEN}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.02em"
          >
            MCP
          </text>
          <line
            x1={size * 1.02}
            y1={size * 0.36}
            x2={size * 1.78}
            y2={size * 0.36}
            stroke={GREEN}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      )}

      {/* "LIVE" label for live variant */}
      {showLive && (
        <g transform={`translate(${size * 0.62}, ${size * 0.02})`}>
          <text
            fontSize={size * 0.12}
            fontWeight="700"
            fill={GREEN}
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.15em"
          >
            LIVE
          </text>
        </g>
      )}
    </svg>
  );
}
