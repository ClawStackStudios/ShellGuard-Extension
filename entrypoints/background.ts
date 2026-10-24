export default defineBackground(() => {
  console.log('[ShellGuard] Background service worker initialized (Zone 0)');

  // Listen for keyboard command triggers (Ctrl+Shift+L, Ctrl+Shift+9)
  if (typeof chrome !== 'undefined' && chrome.commands) {
    chrome.commands.onCommand.addListener((command) => {
      console.log(`[ShellGuard] Shortcut executed: ${command}`);
    });
  }
});
