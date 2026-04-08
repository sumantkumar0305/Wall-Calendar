// NotesPanel.jsx
// A notes area tied to the selected date range
// Notes are saved to localStorage using the range as a key
// Auto-loads previously saved notes when range matches

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Tooltip,
} from '@mui/material';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SaveIcon from '@mui/icons-material/Save';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  buildNoteKey,
  saveNote,
  loadNote,
  clearNote,
} from '../utils/storageUtils';
import { formatDateKey } from '../utils/dateUtils';

function NotesPanel({ startDate, endDate }) {
  const [noteText, setNoteText] = useState('');
  const [saveStatus, setSaveStatus] = useState(''); // 'saved' | 'cleared' | ''

  // Build the localStorage key whenever the range changes
  const noteKey =
    startDate && endDate
      ? buildNoteKey(formatDateKey(startDate), formatDateKey(endDate))
      : null;

  // When the range changes, auto-load any previously saved note for it
  useEffect(() => {
    if (noteKey) {
      const saved = loadNote(noteKey);
      setNoteText(saved);
      setSaveStatus('');
    } else {
      // No complete range — clear the text area
      setNoteText('');
      setSaveStatus('');
    }
  }, [noteKey]);

  // Handle save button click
  const handleSave = () => {
    if (!noteKey) return;
    const ok = saveNote(noteKey, noteText);
    if (ok) {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus(''), 2000);
    }
  };

  // Handle clear button click
  const handleClear = () => {
    setNoteText('');
    if (noteKey) {
      clearNote(noteKey);
      setSaveStatus('cleared');
      setTimeout(() => setSaveStatus(''), 2000);
    }
  };

  const hasRange = !!(startDate && endDate);
  const hasText = noteText.trim().length > 0;

  return (
    <Box>
      {/* Section heading */}
      <Stack direction="row" alignItems="center" spacing={0.8} mb={1}>
        <NoteAltIcon sx={{ fontSize: 16, color: 'primary.main' }} />
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontSize: '0.65rem',
          }}
        >
          Notes
        </Typography>
      </Stack>

      {/* Hint when no range selected */}
      {!hasRange && (
        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontSize: '0.72rem',
            display: 'block',
            mb: 1,
            fontStyle: 'italic',
          }}
        >
          Select a date range to add notes
        </Typography>
      )}

      {/* Ruled lines textarea styled like a notepad */}
      <Box
        sx={{
          position: 'relative',
          background: hasRange ? '#FFFDE7' : '#F5F5F5',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: hasRange ? '#F9A825' : '#E0E0E0',
          overflow: 'hidden',
          transition: 'border-color 0.2s',
        }}
      >
        {/* Ruled lines background effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent, transparent 23px, #E0E0E0 23px, #E0E0E0 24px)',
            backgroundPosition: '0 8px',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder={hasRange ? 'Write your notes here...' : ''}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          disabled={!hasRange}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: '0.8rem',
              lineHeight: '24px',
              px: 1,
              pt: 0.8,
              fontFamily: 'inherit',
            },
          }}
          sx={{
            '& .MuiInputBase-root': {
              background: 'transparent',
            },
          }}
        />
      </Box>

      {/* Save / Clear buttons */}
      <Stack direction="row" spacing={1} mt={1}>
        <Tooltip title={!hasRange ? 'Select a date range first' : ''}>
          <span style={{ flex: 1 }}>
            <Button
              variant="contained"
              size="small"
              startIcon={<SaveIcon sx={{ fontSize: 14 }} />}
              onClick={handleSave}
              disabled={!hasRange || !hasText}
              fullWidth
              sx={{
                fontSize: '0.72rem',
                py: 0.5,
                background: saveStatus === 'saved' ? '#2E7D32' : undefined,
              }}
            >
              {saveStatus === 'saved' ? 'Saved!' : 'Save'}
            </Button>
          </span>
        </Tooltip>

        <Button
          variant="outlined"
          size="small"
          startIcon={<DeleteOutlineIcon sx={{ fontSize: 14 }} />}
          onClick={handleClear}
          disabled={!hasText && !noteKey}
          sx={{
            fontSize: '0.72rem',
            py: 0.5,
            flex: 1,
            color: saveStatus === 'cleared' ? 'error.main' : undefined,
          }}
        >
          {saveStatus === 'cleared' ? 'Cleared' : 'Clear'}
        </Button>
      </Stack>
    </Box>
  );
}

export default NotesPanel;
