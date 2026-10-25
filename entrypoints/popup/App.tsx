import React, { useState } from 'react';
import { Shield, KeyRound, Settings, Search, Copy, Eye, EyeOff, Zap, ExternalLink } from 'lucide-react';

export default function App(): React.JSX.Element {
  // TODO(jules): Stage 02 (Task B) — Check ShellGuardSessionVault on mount. If logged out, render <LoginGateway onSuccess={...} /> matching docs/stitch/screen_1_login.html. If unlocked, render dashboard.
  const [activeTab, setActiveTab] = useState<'vault' | 'generator' | 'settings'>('vault');
  const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 800);
  };

  return (
    <div className="w-[384px] h-[560px] bg-carapace-floor text-slate-100 flex flex-col font-sans text-sm selection:bg-claw selection:text-white antialiased">
      {/* Pinned Carapace Header */}
      <header className="px-4 py-3 bg-carapace-surface border-b border-carapace-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-lobster flex items-center justify-center text-white shadow-none">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-heading font-semibold text-sm tracking-tight text-white">ShellGuard</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-badge bg-reef-emerald/15 text-reef-emerald border border-reef-emerald/30">
                • CLIENT ENCLAVE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono leading-none">v0.0.0.1 (Build 1)</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            title="Pop out into window"
            className="p-1.5 rounded-row text-slate-400 hover:text-white hover:bg-carapace-focus transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <div className="w-6 h-6 rounded-row bg-claw/20 border border-claw/40 flex items-center justify-center font-mono text-[10px] font-bold text-claw">
            LU
          </div>
        </div>
      </header>

      {/* Main Viewport Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {activeTab === 'vault' && (
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search vault (48 items)..."
                className="w-full bg-carapace-surface border border-carapace-border rounded-row pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-claw transition-colors font-sans"
              />
            </div>

            {/* Autofill Suggestions Card */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                  Autofill Suggestions
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-badge bg-claw/15 text-claw border border-claw/30">
                  1 MATCH
                </span>
              </div>

              {/* Credential Card */}
              <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-3 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs text-claw">
                      GH
                    </div>
                    <div>
                      <h4 className="font-heading font-medium text-xs text-white">GitHub Corporate</h4>
                      <p className="text-[11px] text-slate-400 font-mono">octocat@corp.io</p>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 bg-lobster hover:bg-lobster-hover text-white rounded-row text-xs font-semibold flex items-center space-x-1 tactile-press">
                    <Zap className="w-3 h-3" />
                    <span>Fill</span>
                  </button>
                </div>

                {/* Secret Row: Eye-beside-Copy invariant strictly preserved */}
                <div className="flex items-center justify-between bg-carapace-floor border border-carapace-border/60 rounded-row px-2.5 py-1.5 font-mono text-xs">
                  <span className="text-slate-300">
                    {isPasswordRevealed ? 'correct-horse-battery-staple' : '••••••••••••••••'}
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setIsPasswordRevealed(!isPasswordRevealed)}
                      title={isPasswordRevealed ? 'Mask secret' : 'Reveal secret'}
                      className="p-1 rounded text-slate-400 hover:text-claw hover:bg-carapace-focus transition-colors"
                    >
                      {isPasswordRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => handleCopy('correct-horse-battery-staple', 'password')}
                      title="Copy secret"
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-carapace-focus transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {copiedField && (
                  <p className="text-[10px] text-reef-emerald font-mono text-center">
                    ✓ Password copied to volatile clipboard (30s auto-wipe active)
                  </p>
                )}
              </div>
            </div>

            {/* Zero-Knowledge Telemetry Banner */}
            <div className="p-2.5 rounded-carapace bg-carapace-surface/60 border border-carapace-border text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>🔒 HKDF-SHA256 • AES-GCM-256</span>
              <span className="text-reef-emerald">Axiom 1 Active</span>
            </div>
          </div>
        )}

        {activeTab === 'generator' && (
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-sm text-white">Entropy Deck</h3>
            <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-3 space-y-2">
              <div className="p-3 bg-carapace-floor border border-carapace-border rounded-row font-mono text-xs text-claw break-all">
                k9#mP$2vL@8wQ!5zX
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                <span>104 bits entropy</span>
                <span className="text-reef-emerald">Cryptographically Strong</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-sm text-white">Security & Hub</h3>
            <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-3 space-y-2 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-carapace-border">
                <span>Auto-Lock Timeout</span>
                <span className="text-claw">15 Minutes</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-carapace-border">
                <span>Memory Zeroization</span>
                <span className="text-reef-emerald">Rule 4 Enforced</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Transport</span>
                <span className="text-slate-400">Strict HTTPS / RFC 1918 Guard</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Pinned Bottom Navigation Dock */}
      <nav className="h-14 bg-carapace-surface border-t border-carapace-border grid grid-cols-3 px-2">
        <button
          onClick={() => setActiveTab('vault')}
          className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
            activeTab === 'vault' ? 'text-lobster font-medium' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span className="text-[10px] tracking-wide">Vault</span>
        </button>

        <button
          onClick={() => setActiveTab('generator')}
          className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
            activeTab === 'generator' ? 'text-lobster font-medium' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span className="text-[10px] tracking-wide">Generator</span>
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
            activeTab === 'settings' ? 'text-lobster font-medium' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span className="text-[10px] tracking-wide">Settings</span>
        </button>
      </nav>
    </div>
  );
}
