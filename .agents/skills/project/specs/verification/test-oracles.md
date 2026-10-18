# 🧪 Verification Oracle: Test Harness & Cloud CI Gates

> Test assertions, tamper detection oracles, and GitHub Actions verification pipeline.

---

## §1. Local Verification (Sub-Second Gate)

To preserve host resources, run only fast static checks locally:
```bash
npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py
```

---

## §2. Cloud Verification Runner (GitHub Actions)

Full build and test executions run in GitHub Actions (`.github/workflows/ci.yml`):
- `tests/crypto/`: WebCrypto HKDF and AES-GCM standard vectors.
- `tests/tamper/`: Tamper rejection tests asserting modified AAD or ciphertext throws `OperationError`.
- `tests/matcher/`: 6-mode URI matching assertions.
- `wxt zip`: Automated packaging and Manifest V3 validation.
