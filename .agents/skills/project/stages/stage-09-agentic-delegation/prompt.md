# Stage 09 — Agentic Delegation Port (`lb-`) & Sovereign Pods Manager (`v0.0.0.10` • Build 10)

**Target Oracle:** `.agents/skills/project/modules/06-settings/05-pods-and-compartments/spec.md` (`screen_15_pods_manager.png`).

**Task A [Scoped LobsterKey Port] & Task B [Pods & Compartments Manager]:**
Implement the autonomous agent message port and AAD compartment guard enforcing per-pod `lb-` access scopes (`LB-RW` for read/write, `LB-EXEC` for blind JIT autofill execution without exposing raw secret bytes to the caller, `HUMAN ONLY` rejecting all `lb-` requests at the enclave boundary, and `LOCKED` cold compartments), logging all agentic vault operations to the encrypted audit stream.

Build the Pods & Compartments Manager (`Screen 15`) with `+ New Pod` creation, live pod filtering, item counter pills, and per-pod permission scope configuration signed exclusively by a sovereign `hu-` master session.
