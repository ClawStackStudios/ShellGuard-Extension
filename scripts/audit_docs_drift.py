#!/usr/bin/env python3
"""
scripts/audit_docs_drift.py
Sub-second Single Source of Truth (SSoT) documentation & deterministic skill drift auditor for ShellGuard-Extension.
Asserts that root documentation, stage indicators, and all 21 feature-activity modules bow to codebase & visual oracle ground truth.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

REQUIRED_MODULES = [
    "01-login-gateway",
    "02-vault-dashboard/01-active-tab-and-list",
    "02-vault-dashboard/02-quick-actions-flyout",
    "02-vault-dashboard/03-view-item-and-totp",
    "02-vault-dashboard/04-add-edit-item",
    "03-inpage-autofill/01-shadow-dropdown-overlay",
    "03-inpage-autofill/02-glyph-states-and-inset",
    "04-generator-suite/01-generator-deck",
    "04-generator-suite/02-volatile-history",
    "05-lock-enclave/01-pin-and-biometric-pad",
    "06-settings/00-settings-hub",
    "06-settings/01-account-and-security",
    "06-settings/02-autofill-and-shadow-dom",
    "06-settings/03-notifications-and-prompts",
    "06-settings/04-vault-operations-hub",
    "06-settings/05-pods-and-compartments",
    "06-settings/06-import-envelopes",
    "06-settings/07-export-vault",
    "06-settings/08-trash-and-shredder",
    "06-settings/09-appearance-and-themes",
    "06-settings/10-about-and-enclave-audit",
]

def audit_package_version():
    pkg_file = ROOT / "package.json"
    if not pkg_file.exists():
        return "0.0.1.0"
    try:
        data = json.loads(pkg_file.read_text(encoding="utf-8"))
        return data.get("version", "0.0.1.0")
    except Exception as e:
        sys.exit(f"[-] Failed to parse package.json: {e}")

def audit_readme(version):
    readme = ROOT / "README.md"
    if not readme.exists():
        sys.exit("[-] README.md missing from repository root.")
    content = readme.read_text(encoding="utf-8")
    
    required_links = [
        "https://github.com/ClawStackStudios/ShellGuard",
        "https://github.com/ClawStackStudios/ShellGuard-Mobile",
        "https://github.com/ClawStackStudios/ShellGuard-TOTP"
    ]
    for link in required_links:
        if link not in content:
            sys.exit(f"[-] README.md missing required ecosystem link: {link}")
    
    print("[+] README.md links and structure validated.")
    return True

def audit_agents_references():
    agents_file = ROOT / "AGENTS.md"
    if not agents_file.exists():
        sys.exit("[-] AGENTS.md missing from repository root.")
    content = agents_file.read_text(encoding="utf-8")
    
    if ".agents/skills/project/" not in content:
        sys.exit("[-] AGENTS.md references block out of sync with .agents/skills/project/.")
    if "ROADMAP.md" not in content:
        sys.exit("[-] AGENTS.md references block missing ROADMAP.md pointer.")
        
    print("[+] AGENTS.md references validated against skill and roadmap.")
    return True

def audit_modular_skill():
    modules_root = ROOT / ".agents/skills/project/modules"
    if not modules_root.exists():
        sys.exit("[-] .agents/skills/project/modules/ directory missing.")

    png_pattern = re.compile(r"docs/stitch/(screen_[a-zA-Z0-9_]+\.png)")
    verified_count = 0

    for mod_rel in REQUIRED_MODULES:
        spec_path = modules_root / mod_rel / "spec.md"
        if not spec_path.exists():
            sys.exit(f"[-] Missing feature-activity module spec: {spec_path}")
        text = spec_path.read_text(encoding="utf-8")
        matches = png_pattern.findall(text)
        if not matches:
            sys.exit(f"[-] Module {mod_rel}/spec.md is missing a mandatory docs/stitch/screen_*.png Visual Oracle pointer!")
        for png_name in matches:
            png_path = ROOT / "docs/stitch" / png_name
            if not png_path.exists():
                sys.exit(f"[-] Module {mod_rel}/spec.md references non-existent visual oracle: {png_path}")
        verified_count += 1

    print(f"[+] Deterministic modular skill verified: {verified_count}/21 feature-activity modules bound to Stitch visual oracles.")
    return True

def audit_active_stage():
    meta_prompt = ROOT / ".agents/skills/project/meta-prompt-antigravity.md"
    if not meta_prompt.exists():
        sys.exit("[-] meta-prompt-antigravity.md missing.")
    content = meta_prompt.read_text(encoding="utf-8")
    
    stages_dir = ROOT / ".agents/skills/project/stages"
    if not stages_dir.exists():
        sys.exit("[-] stages/ directory missing.")
        
    stages = sorted([d.name for d in stages_dir.iterdir() if d.is_dir()])
    if not stages:
        sys.exit("[-] No active stages found in stages/.")
        
    leading_stage = stages[0]
    if leading_stage not in content:
        sys.exit(f"[-] Leading edge stage '{leading_stage}' is not referenced in meta-prompt-antigravity.md!")
        
    print(f"[+] Sliding release timeline verified: leading edge is '{leading_stage}' ({len(stages)} stages queued).")
    return True

def main():
    print("=" * 68)
    print("  🐚 ShellGuard-Extension — Sub-Second SSoT & Skill Drift Audit")
    print("=" * 68)
    
    ver = audit_package_version()
    print(f"[i] Active target version: v{ver}")
    
    audit_readme(ver)
    audit_agents_references()
    audit_modular_skill()
    audit_active_stage()
    
    print("=" * 68)
    print("  ✅ All SSoT documentation, visual oracles, and stage gates aligned!")
    print("=" * 68)

if __name__ == "__main__":
    main()
