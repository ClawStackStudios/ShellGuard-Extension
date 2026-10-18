# 🛡️ Autofill Oracle: Heuristics, Shadow DOM & Injection

> Form detection gates, closed Shadow DOM encapsulation, and pristine prototype execution.

---

## §1. Co-Presence Gate Heuristic

Form scanning suppresses autofill chips on generic fields (search boxes, email newsletters) unless a password field is co-present:
1. Search active container for `input[type="password"]`.
2. If found, identify matching username input (`input[type="text"]`, `input[type="email"]`, `autocomplete="username"`).
3. If no password field is present, suppress autofill unless domain is in single-identifier whitelist (Google/Microsoft multi-step signin).

---

## §2. Closed Shadow DOM Overlay Mount

Injected overlays (badge icons, credential drop-downs) must mount within a closed shadow root:
```typescript
const host = document.createElement('shellguard-autofill-carapace');
const shadow = host.attachShadow({ mode: 'closed' });
```
- **CSS Reset:** Reset font sizing to absolute `px` (`font-size: 13px`) to prevent host page `rem` distortion.
- **Isolation:** Host page scripts calling `host.shadowRoot` receive `null`.

---

## §3. Pristine Prototype Invocation

To defeat host-page prototype pollution and ensure framework change detection:
```typescript
export function injectSafely(element: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.dispatchEvent(new Event('change', { bubbles: true }));
}
```
