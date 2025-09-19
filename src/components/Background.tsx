import React from 'react';

/*
  Decorative background layers:
  - Subtle animated radial gradient glow
  - Faint grid pattern
  - Noise overlay for texture
  All pointer-events-none & isolated via mix-blend + opacity for performance.
*/
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs using utility class */}
      <div className="absolute inset-0 bg-radial-fx animate-gradient-float" />
      {/* Grid pattern (boosted opacity) */}
      <div className="absolute inset-0 bg-grid-mask opacity-[0.25] dark:opacity-[0.30] mix-blend-overlay" />
      {/* Noise overlay (subtle) */}
      <div className="absolute inset-0 bg-noise opacity-[0.22] dark:opacity-[0.26] mix-blend-soft-light" />
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 dark:from-neutral-950/70 to-transparent" />
    </div>
  );
}

export default Background;
