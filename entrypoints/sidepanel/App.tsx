import React from 'react';
import { Shield, Lock, Activity } from 'lucide-react';

export default function App(): React.JSX.Element {
  return (
    <div className="w-full h-screen bg-carapace-floor text-slate-100 flex flex-col font-sans text-sm selection:bg-claw selection:text-white antialiased p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-carapace-border">
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-lobster" />
          <h2 className="font-heading font-semibold text-base">ShellGuard Side Panel</h2>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-badge bg-claw/15 text-claw border border-claw/30">
          PERSISTENT ENCLAVE
        </span>
      </div>

      {/* Diagnostic telemetry card */}
      <div className="bg-carapace-surface border border-carapace-border rounded-carapace p-4 space-y-3">
        <div className="flex items-center space-x-2 text-slate-300 font-medium">
          <Activity className="w-4 h-4 text-claw" />
          <span>Active Session Telemetry</span>
        </div>
        <p className="text-xs text-slate-400 font-mono">
          Persistent side panel drawer operating in Zone 1. Bound to active browser window context.
        </p>
      </div>

      {/* Lock Guard Pill */}
      <div className="mt-auto p-3 rounded-carapace bg-carapace-surface border border-carapace-border flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-2">
          <Lock className="w-3.5 h-3.5 text-reef-emerald" />
          <span>Session Encrypted</span>
        </div>
        <span className="text-reef-emerald">READY</span>
      </div>
    </div>
  );
}
