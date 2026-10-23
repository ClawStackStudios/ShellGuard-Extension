# 🛡️ Autofill Oracle: Heuristics, Shadow DOM & Injection

> **Authoritative Specification:** Form detection gates, anti-collision geometry, closed Shadow DOM encapsulation, pristine prototype execution, and in-page prompt bars.

---

## §1. Co-Presence Gate Heuristic

Form scanning suppresses autofill chips on generic fields (search boxes, email newsletters) unless a password field is co-present:
1. Search active container or ancestor `<form>` for `input[type="password"]`.
2. If found, identify matching username input (`input[type="text"]`, `input[type="email"]`, `autocomplete="username"`).
3. If no password field is present, suppress autofill unless domain is in single-identifier whitelist (Google/Microsoft multi-step signin).

---

## §2. Closed Shadow DOM Overlay Mount

Injected overlays (badge icons, credential drop-downs, notification pills) must mount within a closed shadow root:
```typescript
const host = document.createElement('shellguard-autofill-carapace');
const shadow = host.attachShadow({ mode: 'closed' });
```
- **CSS Reset:** Reset font sizing to absolute `px` (`font-size: 13px`) to prevent host page `rem` distortion.
- **Isolation:** Host page scripts calling `host.shadowRoot` receive `null`. Content scripts isolate memory and zeroize secrets <1ms after injection.

---

## §3. Pristine Prototype Invocation

To defeat host-page prototype pollution and ensure framework change detection:
```typescript
export function injectSafely(element: HTMLInputElement, value: string): void {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  element.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
}
```

---

## §4. Anti-Collision Dynamic Offset Engine & Glyph States (Screen 13)

### The Bitwarden Eye Collision Bug & Fix:
Bitwarden's extension icon hardcodes `right: 8px` inside input elements. On modern web applications (GitHub, Microsoft, banks), the webpage's own native password-reveal eye button (`👁`), browser autofill icon, or passkey icon sits at `right: 8px`, causing an ugly overlapping visual collision.

### The ShellGuard Dynamic Inset Formula:
```typescript
export function calculateCarapaceGlyphOffset(input: HTMLInputElement): number {
  const BASE_INSET_RIGHT = 12; // px
  const COLLISION_GAP = 8;     // px spacing between glyph and host icon
  
  // Heuristic scan for sibling / pseudo-element password reveal icons
  const parent = input.parentElement;
  const hasNativeEye = parent?.querySelector(
    'button[aria-label*="password" i], button[title*="password" i], .show-password, .toggle-password, [data-toggle="password"], svg.eye'
  ) !== null;

  if (hasNativeEye) {
    const eyeRect = parent!.querySelector('button, svg')?.getBoundingClientRect();
    const eyeWidth = eyeRect ? eyeRect.width : 24;
    // Shift left to maintain strict 8px visual clearance
    return BASE_INSET_RIGHT + eyeWidth + COLLISION_GAP; // 12 + 24 + 8 = 44px up to 68px
  }
  
  return BASE_INSET_RIGHT;
}
```

### The 4 Bioluminescent Glyph States (Screen 13):
1. **State 1: Resting Unlocked:** Subtle carapace icon in Slate `#879298` (opacity `0.7`).
2. **State 2: Active Focus + Badge:** Pulses in Claw Cyan `#06B6D4` with match counter badge (`2`).
3. **State 3: Locked Vault:** Amber padlock icon indicating quick PIN / biometric unlock required.
4. **State 4: Cryptographic Error:** Coral red indicator with 1-click retry state.

---

## §5. Closed Shadow DOM Floating Carapace Dropdown (Screen 7)
- **Anchor Geometry:** Floats `6px` directly below the focused input element, clamped within the viewport bounds.
- **Top Accent Line:** 1px cybernetic gradient stroke from Claw Cyan `#06B6D4` to Lobster Red `#E4048A`.
- **Credential Row Layout:**
  - Matching account title and username in `JetBrains Mono`.
  - Active row highlighted with cyan border and live TOTP countdown ring (`24s`).
  - Lobster Red `[⚡ Fill]` button executing `injectSafely()` with instantaneous memory zeroization.
- **Utility Triggers:** `[⚡ Generate Password]` and `[ Open Vault → ]`.

---

## §6. In-Page Save / Update / Passkey Capture Bar (Screen 12 & 13)
Mounted inside a closed Shadow DOM floating pill at the user's configured anchor position (`Bottom-Right`, `Top-Right`, or `Bottom-Left`):
- **WebAuthn Passkey Capture:** Detects browser registration and prompts: *“Save passkey to Infrastructure Pod?”*
- **New Login Detection:** Intercepts form submission and prompts: *“Save new login for <domain>?”* with `[ Save ]` and `[ Never for this site ]`.
- **Password Rotation Detection:** Compares submitted password with stored vault cipher and offers 1-click update.
- **Agentic Key Detection (`lb-`):** Detects generated API tokens or agent keys in developer consoles.
