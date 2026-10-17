# ShellGuard-Extension

Zero-knowledge Chrome extension (Manifest V3) for the self-hosted [ShellGuard](https://github.com/ClawStackStudios/ShellGuard) ecosystem.

Provides client-decrypted autofill, TOTP generation, and agentic vault access (`lb-` keys) directly in Chromium browsers without third-party cloud trust.

## Ecosystem Architecture
ShellGuard-Extension operates alongside:
- **[ShellGuard Web & Server](https://github.com/ClawStackStudios/ShellGuard)**: Self-hosted zero-knowledge secrets vault and Express/SQLite server.
- **[ShellGuard-Mobile](https://github.com/ClawStackStudios/ShellGuard-Mobile)**: Native Android password manager with system autofill service.
- **[ShellGuard-TOTP](https://github.com/ClawStackStudios/ShellGuard-TOTP)**: Offline-first native Android 2FA authenticator.

## Governing Principles & Rules
See [`AGENTS.md`](AGENTS.md) for full project rules, invariant security patterns, and cartography directives.
