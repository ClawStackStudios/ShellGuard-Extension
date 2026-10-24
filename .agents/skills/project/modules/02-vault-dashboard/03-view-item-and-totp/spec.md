# 02.03 — View Login Item & Micro-TOTP Pulse Ring (`screen_3_view_item`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_3_view_item.png` and `docs/stitch/screen_3_view_item.html`. Every visual component, hero card with `Autofill into Page`, `Eye-beside-Copy` password row, `839 204` split TOTP display with `20s` circular SVG countdown ring, `⚠️ HTTP LAN (RFC 1918 Private Net)` warning pill, and sticky action footer (`Edit`, clone, delete) visible in the oracle is mandatory.

**Subterranean Invariants:**
The detail view renders decrypted record fields strictly in volatile React component state that is scrubbed on unmount or vault lock, preserving the **Eye-beside-Copy** layout (`[👁]` directly left of `[📋]`) on the password row and displaying an amber `⚠️ HTTP LAN (RFC 1918 Private Net)` badge whenever the target `Website URI` uses cleartext HTTP on a private subnet (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `100.64.0.0/10`). The popout action (`[↗]`) opens the current item context inside the Chromium Side Panel or detached window without passing secret material through URL query parameters.

The `AUTHENTICATOR (TOTP)` deck executes pure-TS RFC 6238 HMAC-SHA1/SHA256/SHA512 computation over the Base32-decoded seed at 30-second (or custom period) epochs, formatting the token into tabular 3×3 monospace groups (`839 204`). The SVG circular progress ring animates smoothly via `requestAnimationFrame` against `Date.now()`, shifting stroke color from Claw Cyan (`#06B6D4` when $>10\text{s}$ remain) to Coral Orange (`#F97316` at $6\text{s}\text{–}10\text{s}$) to Tactical Amber/Red (`#F59E0B` / `#E4048A` at $\le 5\text{s}$), and auto-rotates the token at epoch boundary `0s` without UI flicker.
