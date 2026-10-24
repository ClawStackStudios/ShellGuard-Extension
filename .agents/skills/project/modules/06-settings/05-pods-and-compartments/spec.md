# 06.05 — Pods & Compartments Manager (`screen_15_pods_manager`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_15_pods_manager.png` and `docs/stitch/screen_15_pods_manager.html`. Every visual element, `+ New Pod` CTA, search bar (`Filter 5 active pods...`), compartment rows (`Infrastructure & Nodes`, `2FA & Authenticator Keyring`, `Autonomous Agents Pod` with `lb-` badge, `Personal & Banking`, `Containers & VM Clusters`), item count pills, edit buttons, and cryptographic sub-envelope advisory visible in the oracle is mandatory.

**Subterranean Invariants:**
Pods are cryptographic sub-compartments whose metadata and item memberships are bound into each record's AES-GCM Additional Authenticated Data (`AAD`) so an attacker or rogue server cannot transplant a ciphertext record from a restricted `Personal & Banking` pod into an agent-accessible `Autonomous Agents Pod` without failing GCM tag authentication. Items moved to `Archive` or `Trash` retain their original `podId` association so restoration returns them to their exact cryptographic compartment.

Each pod enforces granular `lb-` LobsterKey access control scopes (`LB-RW` for read/write agent access, `LB-EXEC` for blind JIT autofill execution without exposing plaintext bytes to the agent port, `HUMAN ONLY` which rejects all `lb-` key requests at the enclave boundary, and `LOCKED`). Creating (`+ New Pod`), renaming, or re-scoping a pod re-signs the pod registry envelope under the `hu-` master key; sessions authenticated with an `lb-` key cannot escalate pod permissions or modify `HUMAN ONLY` compartments.
