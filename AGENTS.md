# This is the ShellGuard-Extension project. Project rules are as follows.

Zero-knowledge Chrome extension (MV3) for the self-hosted ShellGuard ecosystem. Provides client-decrypted autofill, TOTP generation, and agentic vault access (`lb-` keys) without third-party cloud trust.

## 1. Project Meaning & Purpose
- **Audience:** Self-hosters, privacy advocates, homelab operators, and autonomous AI agents.
- **Differentiator:** Untrusted browser execution; client-only zero-knowledge decryption; 1:1 ShellGuard Web/Mobile parity.
- **Market:** Sovereign, self-hosted alternative to centralized cloud password managers.
- **Mechanism:** WebCrypto HKDF-SHA256 + AES-GCM-256 with AAD record-binding; offscreen/session cryptography; closed Shadow DOM autofill.
- **Why This Way:** MV3 service workers are ephemeral; content scripts share untrusted DOM scope. Decoupling cryptography protects keys from XSS.
- **Existence Axiom:** *"Your reef. Your keys. Your vault. In your browser."*
- **Gap Seed:** Browser autofill must never expose plaintext keys or credentials to web pages or third-party cloud infrastructure.

## 2. Project Rules
1. **Zero-Knowledge by Construction**
   - Rule: Never log, store, or transmit unencrypted master keys (`hu-`, `lb-`), plaintext secrets, or unencrypted vault blobs.
   - Violation: Storing raw secrets in `chrome.storage.local` or logging decrypted credentials.
   - Reason: Plaintext exposure invalidates the zero-knowledge guarantee.
2. **Strict DOM & Content Script Isolation**
   - Rule: Content scripts must never hold master keys or raw vault state; all crypto runs in isolated background/offscreen contexts.
   - Violation: Running WebCrypto key derivation in content scripts or exposing vault state to `window`.
   - Reason: DOM-accessible memory is vulnerable to page-level script inspection and XSS.
3. **Fail Closed on Origin or Schema Mismatch**
   - Rule: All inter-context messages and API payloads must pass Zod validation; origin mismatches or crypto failures terminate immediately.
   - Violation: Autofilling unverified iframes or handling untyped messages.
   - Reason: Permissive validation enables cross-origin credential harvesting.
4. **Volatile Session Zeroization**
   - Rule: Decrypted vault memory and ephemeral keys must zeroize on vault lock or inactivity timeout.
   - Violation: Retaining decrypted passwords in worker variables across lock states.
   - Reason: Lingering memory secrets invite heap extraction and session hijacking.
5. **Host Preservation & Cloud CI Gate**
   - Rule: Never run heavy build/packaging loops locally. Run instant lint and doc drift audits locally; offload test/build suites to GitHub Actions.
   - Violation: Running heavy browser automation tests locally that pin host CPU/RAM.
   - Reason: Host hardware preservation guarantees responsive local development.
6. **Two-Layer Commit Attribution**
   - Rule: Commits must follow Conventional Commits with `User:` (intent/spec) and `AI:` (implementation/tests) trailers.
   - Violation: Commits lacking dual-attribution trailers or raw force pushes (`git push --force`).
   - Reason: Guarantees auditability between human architectural intent and agent execution.
7. **Monotonic Cascading Versioning & Zero Drift**
   - Rule: Releases strictly advance monotonically using 4-digit convention (`X.Y.Z.N`). Out-of-band hotfixes take the next sequential revision digit and cascade all planned downstream roadmap stage versions forward by $+1$.
   - Violation: Skipping version digits, reusing version numbers, or failing to push downstream roadmap versions after an out-of-band hotfix.
   - Reason: Preserves mathematical integrity of releases and prevents Chrome Web Store deployment rejection.
- **Carve-out (Transport Sovereignty & Homelab TLS):** Cleartext HTTP permitted strictly on RFC 1918 / Tailscale LAN endpoints with mandatory amber UI warning pill. WAN HTTP is forbidden. Self-signed HTTPS certificates supported via explicit user consent toggle ("Trust self-signed certificates") paired with browser origin exception whitelisting.

## 3. Project Patterns
- **Reef Modernist UI:** Flat carapace (`elevation: 0`, 1px `#3D484E` borders, 12px radii, `#161B22` fill, `#E4048A` accent). Eye-beside-Copy layout (unmask toggle directly LEFT of Copy). Zero native browser dialogs (`alert`, `confirm`).
  - check: `npm run lint` | rule: Strict DOM & UI consistency | severity: strict
- **HKDF + AAD Binding:** $K = \text{HKDF-Expand}(\text{PRK}, \text{"ShellGuard-Domain-" + ns}, 32)$; $\text{AAD} = \text{uuid} \parallel \text{ns}$. Tampered records fail GCM auth tag check.
  - check: `npm run test:crypto` | rule: Zero-Knowledge by Construction | severity: strict
- **Ephemeral Worker Decoupling:** Non-extractable keys live in `chrome.storage.session` or offscreen docs. Disk storage (`chrome.storage.local`) holds only ciphertext envelopes.
  - check: `grep -rn "chrome.storage.local.set" src/` | rule: Zero-Knowledge & Session Zeroization | severity: strict
- **Closed Shadow DOM Autofill:** Form overlays render in `attachShadow({ mode: 'closed' })`. Activates only on verified origin + credential field co-presence. Direct element assignment dispatches synthetic trusted events.
  - check: Automated content script DOM isolation tests | rule: Strict DOM Isolation | severity: strict
- **Zod Envelope Messaging:** Inter-context payloads wrap in `{ id, type, payload, timestamp }` validated via Zod schemas.
  - check: `npm run typecheck` | rule: Fail Closed on Origin or Schema Mismatch | severity: strict
- **Definition of Done:** Typecheck passes, lint passes, doc drift check passes, `CHANGELOG.md` updated, cloud CI green.
  - check: `npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py` | rule: Cloud CI Gate | severity: strict

## 4. Project Navigation
> **Map Schema (Map, Don't Tell):** You possess search tools and sub-agents (`research`). Do not memorize or invent static file paths. Before editing any boundary, map both sides of the seam using grep, file searches, or sub-agents by verifying: (1) what the area does, (2) why it is shaped that way, and (3) which project patterns it preserves.

## 5. Project Skills
> **Skills on Demand:** Skills live in `.agents/skills/`. Use `/learn` to codify recurring patterns or workflows into formal skills as the codebase develops.

- `project`: Reverse-build execution harness, sliding release timeline, domain oracles (`.agents/skills/project/`)
- `doc-automation`: SSoT doc drift audit & release sync (`scripts/audit_docs_drift.py`)
- `git-advanced-workflows`: Conventional Commits, two-layer attribution, rebase, autosquash
- `zero-knowledge-crypto`: WebCrypto HKDF, AES-GCM-256 AAD binding, non-extractable keys
- `chrome-extension-mv3`: MV3 service worker lifecycle, offscreen docs, manifest config
- `autofill-shadow-dom-injection`: Closed Shadow DOM injection, form heuristics, synthetic events
- `reef-modernist-ui`: Bioluminescent tokens, Eye-beside-Copy layout, accessible modals
- `zod-envelope-contracts`: Runtime type validation across message ports and API contracts
- `cloud-ci-verification`: Host resource preservation via GitHub Actions test/build pipelines
- `bitwarden-extension-parity`: Shortcuts (`Ctrl+Shift+L`), URI match detection, workflow parity
- `changelog-release-automation`: SemVer calculation, Keep a Changelog sync, Web Store packaging

## References (in reading order)
1. **Spec:** `.agents/skills/project/` (entry: `meta-prompt-antigravity.md` — the machine roadmap)
2. **Roadmap:** `ROADMAP.md` (human-readable face of the machine roadmap)
3. **Rules:** `.agents/rules/`
4. **Skills:** `.agents/skills/`
