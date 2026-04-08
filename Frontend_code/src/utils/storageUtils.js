// storageUtils.js
// Handles saving and loading notes from localStorage

// Key format: "wcal_notes_YYYY-MM-DD_to_YYYY-MM-DD"
// This makes each date range's notes unique and retrievable

const KEY_PREFIX = 'wcal_notes_';

// Build the localStorage key from two date strings
export function buildNoteKey(startKey, endKey) {
  return `${KEY_PREFIX}${startKey}_to_${endKey}`;
}

// Save a note string to localStorage for the given key
// Returns true on success, false if localStorage is unavailable
export function saveNote(noteKey, text) {
  try {
    localStorage.setItem(noteKey, text);
    return true;
  } catch (err) {
    console.error('Could not save to localStorage:', err);
    return false;
  }
}

// Load a note string from localStorage
// Returns the saved string, or empty string if not found
export function loadNote(noteKey) {
  try {
    const val = localStorage.getItem(noteKey);
    return val !== null ? val : '';
  } catch (err) {
    console.error('Could not load from localStorage:', err);
    return '';
  }
}

// Clear/delete a note from localStorage
export function clearNote(noteKey) {
  try {
    localStorage.removeItem(noteKey);
    return true;
  } catch (err) {
    console.error('Could not clear localStorage:', err);
    return false;
  }
}

// Get all saved note keys (for optional future listing feature)
export function getAllNoteKeys() {
  try {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(KEY_PREFIX)) {
        keys.push(key);
      }
    }
    return keys;
  } catch (err) {
    return [];
  }
}
