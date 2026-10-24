const DB_NAME = 'ShellGuardSessionVault';
const DB_VERSION = 1;
const STORE_NAME = 'keys';

/**
 * Opens (and creates if necessary) the SessionVault IndexedDB.
 */
function openSessionDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    // TODO(uncertainty): In MV3, IndexedDB in Service Workers is generally available and persistent across
    // worker termination cycles but bound to the profile. We use it to store non-extractable keys
    // since chrome.storage.session does not support non-serializable objects natively.
    // If structured clone fails on CryptoKey in some older chromium versions, we may need a fallback,
    // but modern chromium supports it.
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

/**
 * Saves a non-extractable CryptoKey to the session vault under a specific namespace ID.
 */
export async function saveSessionKey(id: string, key: CryptoKey): Promise<void> {
  const db = await openSessionDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(key, id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);

    // Ensure tx completes
    tx.oncomplete = () => {
      db.close();
    };
  });
}

/**
 * Retrieves a non-extractable CryptoKey from the session vault.
 */
export async function getSessionKey(id: string): Promise<CryptoKey | null> {
  const db = await openSessionDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result || null);
    };
    request.onerror = () => reject(request.error);

    tx.oncomplete = () => {
      db.close();
    };
  });
}

/**
 * Destroys the entire session vault, clearing all keys (Zeroization equivalent for IDB).
 */
export async function destroySessionVault(): Promise<void> {
  const db = await openSessionDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);

    tx.oncomplete = () => {
      db.close();
    };
  });
}
