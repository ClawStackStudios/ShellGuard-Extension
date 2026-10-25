import React, { useState, useEffect } from 'react';
import { isPermittedCleartextHost } from '../../../src/utils/transport';
import { login } from '../../../src/services/authService';

interface LoginGatewayProps {
  onSuccess: () => void;
}

export function LoginGateway({ onSuccess }: LoginGatewayProps) {
  const [protocol, setProtocol] = useState(() => localStorage.getItem('sg_protocol') || 'https://');
  const [host, setHost] = useState(() => localStorage.getItem('sg_host') || 'vault.example.com');
  const [port, setPort] = useState(() => localStorage.getItem('sg_port') || '8080');
  const [mode, setMode] = useState<'upload' | 'paste'>('upload');
  const [rawKey, setRawKey] = useState('');
  const [isLan, setIsLan] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [allowSelfSigned, setAllowSelfSigned] = useState(() => localStorage.getItem('sg_allow_self_signed') === 'true');

  useEffect(() => {
    setIsLan(isPermittedCleartextHost(host));
  }, [host]);

  useEffect(() => {
    localStorage.setItem('sg_allow_self_signed', String(allowSelfSigned));
  }, [allowSelfSigned]);

  // Persist host and port info when it changes
  useEffect(() => {
    localStorage.setItem('sg_protocol', protocol);
    localStorage.setItem('sg_host', host);
    localStorage.setItem('sg_port', port);
  }, [protocol, host, port]);

  const handleProtocolClick = () => {
    setProtocol((prev) => (prev === 'https://' ? 'http://' : 'https://'));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const json = JSON.parse(content);
          if (json.key) {
            setRawKey(json.key);
          } else {
            setError('Invalid identity file structure.');
          }
        } catch {
          setError('Failed to parse identity file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!rawKey) {
        throw new Error('No identity key provided.');
      }

      // TODO(uncertainty): In real scenarios, the identity file might contain a user UUID as well.
      // We pass undefined for uuid now and let the server match solely on keyHash or we would extract it from the file.
      await login(protocol, host, port, rawKey);
      setRawKey(''); // Clear rawKey from memory on success
      onSuccess();
    } catch (err: unknown) {
      if (allowSelfSigned && protocol.startsWith('https') && err instanceof TypeError && err.message.toLowerCase().includes('failed to fetch')) {
        // Offer an affordance to trust self-signed certs
        setError('Connection failed. If using a self-signed certificate, you must approve it first.');

        const normalizedPort = port ? `:${port}` : '';
        const url = `https://${host.split('/')[0]}${normalizedPort}/api/health`;

        const proceedUrl = confirm(`Do you want to open ${url} in a new tab to approve the self-signed certificate?`);
        if (proceedUrl) {
          if (chrome?.tabs?.create) {
             chrome.tabs.create({ url });
          } else {
             window.open(url, '_blank');
          }
        }
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[390px] min-h-[600px] bg-[#0F1419] flex flex-col p-4 custom-scroll relative overflow-x-hidden">
      <div className="w-full bg-[#171C21] carapace-border rounded-[16px] p-4 flex flex-col gap-4 accent-top-line relative shadow-2xl">

        {/* Top Bar */}
        <div className="flex items-center justify-between w-full">
          <button className="flex items-center gap-1.5 text-[#879298] hover:text-[#DEE3EA] active:scale-[0.98] transition-all duration-150 group" type="button">
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
            <span className="font-sans text-[0.875rem] font-medium tracking-wider">Back to Home</span>
          </button>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0F1419] border border-[#3D484E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span className="font-sans text-[0.6875rem] text-[#879298] uppercase">Zero-Knowledge</span>
          </div>
        </div>

        {/* Server Connection Segmented Input Bar */}
        <div className="flex flex-col gap-1.5 w-full">
          <div className="flex items-center w-full bg-[#0F1419] border border-[#3D484E] rounded-lg p-1 text-[0.6875rem] font-sans">
            <button
              type="button"
              onClick={handleProtocolClick}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-[4px] font-semibold tracking-wider select-none ${protocol === 'https://' ? 'bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-[#06B6D4]' : 'bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B]'}`}
            >
              <span className="material-symbols-outlined text-[12px]">{protocol === 'https://' ? 'lock' : 'lock_open'}</span>
              <span>{protocol}</span>
            </button>
            <input
              className="bg-transparent border-0 text-[#DEE3EA] font-sans text-[0.6875rem] px-2 py-0.5 focus:ring-0 focus:outline-none flex-grow min-w-0 tracking-tight"
              type="text"
              value={host}
              onChange={(e) => setHost(e.target.value)}
            />
            <span className="text-[#879298] px-1.5 py-0.5 font-sans text-[0.6875rem] border-l border-[#3D484E]/80 select-none flex items-center">
              : <input
                  type="text"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  className="bg-transparent border-0 text-[#879298] w-8 focus:ring-0 focus:outline-none ml-1"
                />
            </span>
          </div>

          {/* Self-Signed Cert Toggle */}
          <div className="flex items-center px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center w-4 h-4 bg-[#0F1419] border border-[#3D484E] rounded group-hover:border-[#06B6D4] transition-colors">
                <input
                  type="checkbox"
                  checked={allowSelfSigned}
                  onChange={(e) => setAllowSelfSigned(e.target.checked)}
                  className="absolute opacity-0 cursor-pointer w-full h-full"
                />
                {allowSelfSigned && (
                  <span className="material-symbols-outlined text-[#06B6D4] text-[14px]">check</span>
                )}
              </div>
              <span className="font-sans text-[0.6875rem] text-[#879298] group-hover:text-[#DEE3EA] transition-colors select-none">
                Allow ShellGuard Self Signed Cert
              </span>
            </label>
          </div>
        </div>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center pt-1 pb-0.5">
          <div className="relative w-16 h-16 rounded-[14px] p-[1.5px] bg-gradient-to-br from-[#E4048A] via-[#8c0053] to-[#06B6D4] mb-3 group">
            <div className="w-full h-full bg-[#0F1419] rounded-[13px] flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-t from-[#E4048A]/20 to-[#06B6D4]/10 opacity-70"></div>
              <span className="material-symbols-outlined text-[34px] text-transparent bg-clip-text bg-gradient-to-b from-[#DEE3EA] via-[#06B6D4] to-[#E4048A] relative z-10">shield</span>
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E4048A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E4048A]"></span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-sans text-[1rem] font-bold tracking-tight text-[#DEE3EA]">ShellGuard</span>
            <span className="font-sans text-[0.6875rem] text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 px-1 rounded">v2.4</span>
          </div>
          <h1 className="font-sans text-[1.375rem] font-bold text-[#DEE3EA] tracking-tight leading-tight">Welcome Back</h1>
          <p className="font-sans text-[0.75rem] text-[#879298] mt-0.5">Login with your ShellGuard©™ identity</p>
        </div>

        {/* Mode Toggle Tabs */}
        <div className="grid grid-cols-2 p-1 bg-[#0F1419] border border-[#3D484E] rounded-xl gap-1">
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-sans text-[0.875rem] font-semibold tracking-wide shadow-md active:scale-[0.98] transition-all ${mode === 'upload' ? 'bg-[#E4048A] text-white' : 'text-[#879298] hover:text-[#DEE3EA] hover:bg-[#172126]'}`}
          >
            <span className="material-symbols-outlined text-[17px]">upload_file</span>
            <span>Upload File</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('paste')}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-sans text-[0.875rem] font-medium tracking-wide active:scale-[0.98] transition-all ${mode === 'paste' ? 'bg-[#E4048A] text-white' : 'text-[#879298] hover:text-[#DEE3EA] hover:bg-[#172126]'}`}
          >
            <span className="material-symbols-outlined text-[17px]">vpn_key</span>
            <span>Paste ClawKey©™</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'upload' ? (
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center px-0.5">
                <label className="font-sans text-[0.6875rem] uppercase tracking-wider text-[#879298] font-semibold">Your Identity File</label>
                <span className="font-sans text-[0.6875rem] text-[#06B6D4] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">verified_user</span>
                  Local Decrypt
                </span>
              </div>
              <div className="relative flex flex-col items-center justify-center p-5 bg-[#0F1419] border-2 border-dashed border-[#3D484E] hover:border-[#06B6D4] hover:bg-[#0F1419]/80 rounded-xl cursor-pointer group transition-all duration-200">
                <input accept=".json" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20" type="file"/>
                <div className="w-12 h-12 rounded-full bg-[#172126] border border-[#3D484E] flex items-center justify-center mb-2.5 group-hover:scale-105 group-hover:border-[#06B6D4] group-hover:text-[#06B6D4] text-[#879298] transition-all">
                  <span className="material-symbols-outlined text-[26px]">cloud_upload</span>
                </div>
                <p className="font-sans text-[0.875rem] font-semibold text-[#DEE3EA] text-center group-hover:text-white transition-colors">
                  {rawKey ? 'Identity selected. Click to change.' : 'Click to upload your identity file'}
                </p>
                <span className="font-sans text-[0.6875rem] text-[#879298] mt-1 bg-[#171C21] px-2 py-0.5 rounded border border-[#3D484E]/60 tracking-wider">
                  .json files only
                </span>
              </div>
            </div>
          ) : (
             <div className="flex flex-col gap-1.5">
               <label className="font-sans text-[0.6875rem] uppercase tracking-wider text-[#879298] font-semibold">Paste ClawKey</label>
               <input
                 type="password"
                 value={rawKey}
                 onChange={(e) => setRawKey(e.target.value)}
                 className="w-full bg-[#0F1419] border border-[#3D484E] rounded-lg p-2 text-[#DEE3EA] font-mono text-sm focus:outline-none focus:border-[#E4048A]"
                 placeholder="hu-... or lb-..."
               />
             </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-xl p-3 text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Amber Security Warning Card */}
          {protocol === 'http://' && isLan && (
            <div className="bg-[rgba(245,158,11,0.08)] border border-[#F59E0B] rounded-xl p-3 flex items-start gap-3 shadow-[0_0_12px_-3px_rgba(245,158,11,0.2)]">
              <div className="p-1 rounded bg-[#F59E0B]/20 text-[#F59E0B] flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">lock_reset</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h4 className="font-sans text-[0.875rem] font-bold text-[#F59E0B] tracking-tight">⚠️ HTTP LAN Transport</h4>
                <p className="font-sans text-[0.75rem] text-[#DEE3EA]/80 leading-relaxed">
                  Encrypted Client-Side, Plaintext Wire. You are connecting to a local network endpoint.
                </p>
              </div>
            </div>
          )}

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E4048A] to-[#BE185D] hover:from-[#ff159f] hover:to-[#db2777] text-white font-sans text-[0.875rem] font-bold tracking-wide flex items-center justify-center gap-2 glow-crimson active:scale-[0.98] transition-all border border-white/20 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[20px]">key</span>
            <span>{isLoading ? 'Logging in...' : 'Login with Identity'}</span>
          </button>
        </form>

        {/* Footer */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="w-full h-px bg-[#3D484E]"></div>
          <div className="font-sans text-[0.75rem] text-[#879298] text-center">
            <span>New to the reef? </span>
            <a className="font-semibold text-[#E4048A] hover:text-[#ff38aa] hover:underline transition-colors ml-0.5" href="#" target="_blank" rel="noopener noreferrer">
              Molt a New Identity
            </a>
          </div>
        </div>

      </div>

      {/* Micro Metadata Telemetry Indicator */}
      <div className="flex justify-between items-center px-3 py-2 text-[10px] text-[#879298]/70 font-sans">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
          CIPHER: AES-256-GCM
        </span>
        <span>ENTROPY: 256-BIT</span>
      </div>
    </div>
  );
}
