# 04.01 — Credential Generator Deck (`screen_4_generator`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_4_generator.png` and `docs/stitch/screen_4_generator.html`. Every visual control, `🕒 12` history button, mode switcher (`Password`, `Passphrase`, `Username`), syntax-colored output card with `[🔄]` and `[📋]`, 4-segment entropy gauge, `⚡ Insert into Active Tab` CTA, length slider with `12..64` jump chips, and 2×2 character matrix with `Min Numbers` / `Min Symbols` steppers visible in the oracle is mandatory.

**Subterranean Invariants:**
All credential generation (`Password`, `Passphrase`, and `Username` modes) executes via `crypto.getRandomValues()` with strict rejection sampling (modulo bias is forbidden; `Math.random()` is forbidden). Password mode enforces minimum character-class quotas (`Min Numbers`, `Min Symbols`) across enabled `A-Z`, `a-z`, `0-9`, and `!@#$` sets before shuffling via CSPRNG Fisher-Yates, rendering syntax-highlighted `JetBrains Mono` output (letters `#DEE3EA`, digits `#06B6D4`, symbols `#E4048A`) and computing exact combinatorial entropy bits ($\log_2(\text{pool}^L)$) across the 4-segment bioluminescent bar.

Sliding the length control or clicking preset jump chips (`12`, `16`, `24`, `32`, `64`) regenerates the output synchronously in `<2ms`. Clicking `[📋]` copies the secret and appends an entry to the volatile session history ring buffer; clicking `[⚡ Insert into Active Tab]` injects the generated value directly into the currently focused password/username input of the active browser tab via the pristine prototype setter and immediately prompts to save or update the vault record for that origin.
