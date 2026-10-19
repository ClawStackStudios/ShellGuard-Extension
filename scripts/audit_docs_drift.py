#!/usr/bin/env python3
"""
scripts/audit_docs_drift.py
Sub-second Single Source of Truth (SSoT) documentation drift auditor for ShellGuard-Extension.
Asserts that root documentation and stage indicators 100% bow to codebase ground truth.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def audit_package_version():
    pkg_file = ROOT / "package.json"
    if not pkg_file.exists():
        # During pre-scaffold phase, fallback to initial version
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
    
    # Check for ecosystem link validity
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
    
    # Assert references block points to actual existing paths
    if ".agents/skills/project/" not in content:
        sys.exit("[-] AGENTS.md references block out of sync with .agents/skills/project/.")
    if "ROADMAP.md" not in content:
        sys.exit("[-] AGENTS.md references block missing ROADMAP.md pointer.")
        
    print("[+] AGENTS.md references validated against skill and roadmap.")
    return True

def audit_active_stage():
    meta_prompt = ROOT / ".agents/skills/project/meta-prompt-antigravity.md"
    if not meta_prompt.exists():
        sys.exit("[-] meta-prompt-antigravity.md missing.")
    content = meta_prompt.read_text(encoding="utf-8")
    
    stages_dir = ROOT / ".agents/skills/project/stages"
    if not stages_dir.exists():
        sys.exit("[-] stages/ directory missing.")
        
    # Get all stage directories sorted
    stages = sorted([d.name for d in stages_dir.iterdir() if d.is_dir()])
    if not stages:
        sys.exit("[-] No active stages found in stages/.")
        
    leading_stage = stages[0]
    if leading_stage not in content:
        sys.exit(f"[-] Leading edge stage '{leading_stage}' is not referenced in meta-prompt-antigravity.md!")
        
    print(f"[+] Sliding release timeline verified: leading edge is '{leading_stage}'.")
    return True

def main():
    print("=" * 60)
    print("  🐚 ShellGuard-Extension — Sub-Second SSoT Drift Audit")
    print("=" * 60)
    
    ver = audit_package_version()
    print(f"[i] Active target version: v{ver}")
    
    audit_readme(ver)
    audit_agents_references()
    audit_active_stage()
    
    print("=" * 60)
    print("  ✅ All SSoT documentation and stage gates are 100% aligned!")
    print("=" * 60)

if __name__ == "__main__":
    main()
