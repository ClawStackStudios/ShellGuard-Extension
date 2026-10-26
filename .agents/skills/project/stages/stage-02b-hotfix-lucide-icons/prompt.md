# Stage 02b-HF — Lucide Vector Icon Migration & Typography Hardening (`v0.0.0.4` • Build 4)

**Target Oracles:**
- `.agents/skills/project/modules/01-login-gateway/spec.md` (`screen_1_login.png`)
- `.agents/skills/project/specs/ui/design-tokens.md`
- `.agents/skills/project/specs/network/wire-contracts.md`

**Task A [Lucide Vector Icon Engine Migration]:**
Purge all Google Material Symbols ligature strings across `LoginGateway.tsx` and extension entrypoints, migrating 100% of icons to bundled inline SVG components from `lucide-react` (`ArrowLeft`, `Lock`, `LockOpen`, `Check`, `Shield`, `Upload`, `KeyRound`, `ShieldCheck`, `UploadCloud`, `ExternalLink`, `ShieldAlert`, `Key`). Eliminates all network font dependencies, ligature text bleed, and FOUT in offline air-gapped homelab environments.

**Task B [Dropzone Layering & Squircle Alignment]:**
Wrap the file upload zone in an accessible `<label>` container pairing an `sr-only` native `<input type="file" />` with custom hover/drop styling, ensuring native browser buttons (`No file chosen`) never leak visually. Re-center the hero `Shield` emblem inside the 64x64 bioluminescent squircle with high-contrast cyan/crimson drop-shadows, and align typography font fallbacks across all extension views.
