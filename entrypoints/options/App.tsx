import React from 'react';
import { Settings, ShieldCheck, Terminal } from 'lucide-react';

export default function App(): React.JSX.Element {
  return (
    <div className="max-w-3xl mx-auto min-h-screen bg-carapace-floor text-slate-100 p-8 space-y-6 font-sans">
      <div className="flex items-center space-x-3 pb-4 border-b border-carapace-border">
        <div className="p-2 bg-lobster rounded-carapace text-white">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-xl">ShellGuard Settings Hub</h1>
          <p className="text-xs text-slate-400 font-mono">Options & Sovereign Administration Enclave</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-4 space-y-2">
          <div className="flex items-center space-x-2 text-claw font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Knowledge Guarantees</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            Client-only decryption. Master credentials (hu-, lb-) never leave your local browser runtime.
          </p>
        </div>

        <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-4 space-y-2">
          <div className="flex items-center space-x-2 text-reef-emerald font-semibold text-sm">
            <Terminal className="w-4 h-4" />
            <span>Agentic Delegation</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            Autonomous sub-agents execute under scoped lb- keys with strict pod isolation and append-only audits.
          </p>
        </div>
      </div>
    </div>
  );
}
