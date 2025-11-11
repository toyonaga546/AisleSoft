import React from "react";

export type PieDatum = { label: string; value: number; color?: string };

type PieChartProps = {
  data?: PieDatum[];
  size?: number;
  innerRadius?: number; // as fraction (0..1)
};

const defaultData: PieDatum[] = [
  { label: "受託開発", value: 39, color: "#0ea5e9" },
  { label: "人材派遣", value: 33, color: "#3b82f6" },
  { label: "製品", value: 28, color: "#7dd3fc" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

export const PieChart: React.FC<PieChartProps> = ({ data = defaultData, size = 320, innerRadius = 0 }) => {
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;

  let cumulative = 0;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <svg className="w-full h-full max-h-[320px] max-w-[320px]" viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const startAngle = (cumulative / total) * 360;
          cumulative += d.value;
          const endAngle = (cumulative / total) * 360;
          const path = describeArc(cx, cy, r, startAngle, endAngle);
          const color = d.color ?? `hsl(${(i * 70) % 360} 70% 55%)`;
          return <path key={i} d={path} fill={color} className="opacity-95" />;
        })}
        {/* inner cutout (donut). Render only when innerRadius > 0 */}
        {innerRadius > 0 ? (
          <circle cx={cx} cy={cy} r={r * innerRadius} fill="var(--color-card, #fff)" />
        ) : null}
      </svg>

      <div className="mt-4 flex flex-col text-sm">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <span className="inline-block w-3 h-3 rounded" style={{ background: d.color }} />
            <span className="text-sm text-slate-700">{d.label}</span>
            <span className="ml-2 text-sm font-semibold text-slate-900">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
