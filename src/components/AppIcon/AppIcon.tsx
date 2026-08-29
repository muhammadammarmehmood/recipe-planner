interface appIconProps {
  size?: number;
  className?: string;
}

export default function AppIcon({ size = 100, className = "" }: appIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="RecipePal logo"
    >
      {/* Tile background */}
      <rect width="100" height="100" rx="22" fill="#1565C0" />

      {/* ── Fork body ── */}

      {/* Left tine */}
      <rect x="33" y="10" width="7.5" height="32" rx="3.75" fill="white" />
      {/* Center tine */}
      <rect x="46.25" y="10" width="7.5" height="32" rx="3.75" fill="white" />
      {/* Right tine */}
      <rect x="59.5" y="10" width="7.5" height="32" rx="3.75" fill="white" />

      {/* Yoke — bridges tines to handle */}
      <rect x="33" y="36" width="34" height="11" rx="2" fill="white" />

      {/* Handle shaft */}
      <rect x="46.25" y="44" width="7.5" height="24" rx="3.75" fill="white" />

      {/* ── Heart handle terminal ── */}
      {/*
        Heart centered at (50, 77), top cleft ~y=65, bottom tip y=90.
        The shaft overlaps the heart top so the join is seamless.
      */}
      <path
        d="
          M 50,90
          C 50,90 35,80 35,70
          C 35,61 42,57.5 47.5,61.5
          C 48.5,62.3 49.5,64.5 50,66.5
          C 50.5,64.5 51.5,62.3 52.5,61.5
          C 58,57.5 65,61 65,70
          C 65,80 50,90 50,90
          Z
        "
        fill="white"
      />

      {/* Overlap cover — ensures shaft blends into heart top cleanly */}
      <rect x="46.25" y="60" width="7.5" height="8" fill="white" />
    </svg>
  );
}