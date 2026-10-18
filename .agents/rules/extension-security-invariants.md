---
trigger: always_on
---

# Extension Security Invariants

## 1. Zero-Exposure Content Script Boundary
- Content scripts operate in untrusted DOM space. They must NEVER store master keys (`hu-`, `lb-`), persistent decrypted credentials, or raw vault caches in memory.
- Decrypted credentials pass over internal message ports strictly on-demand for immediate Just-in-Time (JIT) autofill (<1ms in RAM) and are immediately zeroized.

## 2. Pristine Prototype Invocation (Anti-Pollution)
- When writing credentials into input elements, never invoke `input.value = secret` directly. Always retrieve the native descriptor from pristine prototype:
  ```typescript
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
  setter?.call(targetInput, credentialValue);
  targetInput.dispatchEvent(new Event('input', { bubbles: true }));
  targetInput.dispatchEvent(new Event('change', { bubbles: true }));
  ```

## 3. Closed Shadow DOM Encapsulation
- Any extension UI injected into webpage DOMs (autofill menus, badge overlays) must mount within a closed Shadow DOM:
  ```typescript
  const shadow = hostElement.attachShadow({ mode: 'closed' });
  ```
- Reset CSS font-size scaling to absolute pixels (`px`) to prevent host page `rem` distortion.

## 4. Non-Extractable Key Quarantine
- Never write raw secret key bytes to persistent storage (`chrome.storage.local` or unencrypted IndexedDB).
- Non-extractable `CryptoKey` handles reside strictly in memory or StructuredClone-compatible session IndexedDB stores (`ShellGuardSessionVault`), cleared immediately upon vault lock or idle timeout.
