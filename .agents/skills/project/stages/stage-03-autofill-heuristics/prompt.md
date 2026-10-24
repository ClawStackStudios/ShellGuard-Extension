# Stage 03 — Content Script Observers & Pristine Injector (`v0.0.0.4` • Build 4)

**Target Oracles:** `.agents/skills/project/specs/autofill/autofill-mechanics.md`, `.agents/skills/project/modules/06-settings/02-autofill-and-shadow-dom/spec.md`.

**Task A [DOM Observer & Co-Presence Gate] & Task B [Anti-Pollution Injector]:**
Implement the SPA-aware `MutationObserver` and `IntersectionObserver` form scanner enforcing the **Co-Presence Gate** (suppressing autofill instrumentation on standalone text/search inputs unless an `input[type="password"]` is co-present or the hostname matches the multi-step auth whitelist) and the 6-mode URI matcher (`Base Domain`, `Host & Port`, `Exact`, `Starts With`, `Regex`, `Never`). Enforce strict fail-closed protection on page load (zero automatic injection without user gesture) and drop all events inside cross-origin iframes (`window.top !== window.self`).

Implement the pristine prototype credential injector (`Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set?.call(target, secret)`) dispatching synthetic bubbling `input` and `change` events for React/Vue/Angular state hydration, zeroizing transient secret strings within `<1ms` of assignment.
