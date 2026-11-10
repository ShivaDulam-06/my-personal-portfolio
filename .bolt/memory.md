# Project memory

## Product intent & audience

- Astro-based portfolio or project showcase site with project detail modals.
- Audience: visitors browsing project details on both desktop and mobile.

## Brand personality & voice

- Not yet explicitly defined; current tone is technical and detail-oriented.

## Visual design & UX direction

- Project modal (`src/components/ProjectModal.astro`) has distinct desktop and mobile styling via media query.
- Desktop: `margin: 6vh`, `max-height: 88vh`, border-radius applied.
- Mobile: slide-up animation (`modal-slide-up`); dialog/panel sized with `100vh` fallback then `100dvh`.
- Close (X) button is 34px wide, absolute-positioned top-right of modal panel; not sticky.
- Modal heading/meta uses `padding-right: 40px` to avoid overlap with close button.
- Layout viewport meta tag includes `viewport-fit=cover` to enable `env(safe-area-inset-*)` on notched devices.
- Component styles are Astro-scoped (`<style>` blocks); class names hashed in built output.
- Focus management, Escape-key handling, backdrop-click close, and body scroll locking are implemented and should be preserved.

## Decisions, constraints & rationale

- **dvh over vh on mobile**: `100vh` on mobile includes area behind address bar, causing top content and close button to be clipped; `100dvh` adjusts to visible viewport. `100vh` kept as fallback for older browsers.
- **Safe-area insets**: `env(safe-area-inset-top)` applied to modal body `padding-top` (`calc(56px + …)`) and close button `top` (`calc(16px + …)`); `env(safe-area-inset-right)` on close button `right`; `env(safe-area-inset-bottom)` on body `padding-bottom`. Each inset applied once per axis to avoid double-offset.
- **viewport-fit=cover**: Required in meta tag for `env(safe-area-inset-*)` to return non-zero values on physical devices.
- **Close button position**: Kept absolute (not sticky) since DOM structure doesn't require sticky behavior.
- **Do not modify**: project content, architecture illustration, GitHub button, desktop appearance, animations, focus/scroll/Escape/backdrop behavior.

## Open questions & assumptions

- Physical-device testing still needed: `dvh` dynamic resizing behavior, actual `env(safe-area-inset-*)` values, and address-bar viewport changes cannot be validated in desktop browser/dev tools.
- Brand voice, color palette, typography, and broader visual system not yet established beyond this component.