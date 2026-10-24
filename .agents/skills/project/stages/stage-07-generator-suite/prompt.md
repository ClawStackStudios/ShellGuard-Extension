# Stage 07 — Credential Generator Suite & Volatile History (`v0.0.0.8` • Build 8)

**Target Oracles:**
- `.agents/skills/project/modules/04-generator-suite/01-generator-deck/spec.md` (`screen_4_generator.png`)
- `.agents/skills/project/modules/04-generator-suite/02-volatile-history/spec.md` (`screen_5_generator_history.png`)

**Task A [Rejection-Sampled CSPRNG Builder] & Task B [Generator Deck & History UI]:**
Implement the unbiased `crypto.getRandomValues()` rejection-sampled password, EFF Diceware passphrase, and username/alias generator enforcing minimum character-class quotas (`Min Numbers`, `Min Symbols`), Fisher-Yates shuffling, and exact combinatorial entropy calculation.

Build the Generator Deck (`Screen 4` with mode switcher, syntax-colored monospace output, 4-segment entropy bar, `⚡ Insert into Active Tab` CTA, tactile slider, `12..64` jump chips, and 2×2 character matrix) and the Volatile Generator History Drawer (`Screen 5` storing up to 50 items strictly in session RAM and zeroizing on lock or `[🗑️ Clear History]`).
