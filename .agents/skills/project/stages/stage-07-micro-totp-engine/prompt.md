# Stage 07 — Micro-TOTP Engine & Animated SVG Pulse Ring (`v0.0.0.8` • Build 8)

**Target Oracles:**
- `.agents/skills/project/modules/02-vault-dashboard/03-view-item-and-totp/spec.md` (`screen_3_view_item.png`)
- `.agents/skills/project/specs/crypto/key-hierarchy.md`

**Task A [RFC 6238 TOTP Engine] & Task B [Item Detail & SVG Pulse Ring]:**
Implement the pure-TypeScript RFC 6238 TOTP authenticator engine supporting Base32/otpauth URI parsing, HMAC-SHA1/SHA256/SHA512 digests, 6/8-digit outputs, and configurable time steps inside the offscreen enclave, verified against published RFC 6238 test vectors.

Build the Credential Detail View (`Screen 3`) displaying the hero `Autofill into Page` CTA, `Eye-beside-Copy` password row, RFC 1918 LAN warning pill (`⚠️ HTTP LAN`), and the tabular 3×3 `839 204` TOTP readout paired with the smooth `requestAnimationFrame` SVG countdown ring (`#06B6D4` $>10\text{s}$ $\to$ `#F97316` $6\text{s}–10\text{s}$ $\to$ `#F59E0B`/`#E4048A` $\le 5\text{s}$) and 30s auto-scrubbing clipboard copy.
