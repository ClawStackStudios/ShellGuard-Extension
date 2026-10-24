import { defineConfig } from 'wxt';
import path from 'node:path';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }),
  manifest: {
    name: 'ShellGuard — Sovereign Zero-Knowledge Vault',
    short_name: 'ShellGuard',
    description: 'Client-decrypted autofill, micro-TOTP generation, and agentic vault access without third-party cloud trust.',
    version: '0.0.1.0',
    permissions: [
      'storage',
      'unlimitedStorage',
      'activeTab',
      'scripting',
      'alarms',
      'offscreen',
      'sidePanel',
      'favicon',
      'contextMenus',
    ],
    commands: {
      'autofill-credential': {
        suggested_key: {
          default: 'Ctrl+Shift+L',
          mac: 'Command+Shift+L',
        },
        description: 'Autofill matching credentials into current tab',
      },
      'generate-password': {
        suggested_key: {
          default: 'Ctrl+Shift+9',
          mac: 'Command+Shift+9',
        },
        description: 'Generate high-entropy password or passphrase',
      },
    },
    action: {
      default_title: 'ShellGuard Vault',
    },
    icons: {
      16: 'icons/icon-16.png',
      48: 'icons/icon-48.png',
      128: 'icons/icon-128.png',
    },
  },
});
