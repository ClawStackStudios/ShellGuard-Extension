export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    console.log('[ShellGuard] Content script mounted (Zone 2 Untrusted DOM)');
  },
});
