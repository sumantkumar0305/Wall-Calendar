// WallCalendarHeader.jsx
// A footer strip at the bottom of the wall calendar
// Gives it a printed calendar feel — like a publisher's footer

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function WallCalendarHeader() {
  return (
    <Box
      sx={{
        borderTop: '1px solid #E0E0E0',
        py: 1,
        px: 2,
        background: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <CalendarMonthIcon sx={{ fontSize: 14, color: 'primary.main' }} />
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          WALL CALENDAR
        </Typography>
      </Stack>

      <Typography
        variant="caption"
        sx={{
          color: 'text.disabled',
          fontSize: '0.6rem',
        }}
      >
        Click dates to select a range • Notes saved locally
      </Typography>
    </Box>
  );
}

export default WallCalendarHeader;
