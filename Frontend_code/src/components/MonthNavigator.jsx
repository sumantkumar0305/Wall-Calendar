// MonthNavigator.jsx
// Previous / Next month navigation buttons
// Shown above the calendar grid

import React from 'react';
import { Box, IconButton, Typography, Tooltip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MONTH_NAMES } from '../../utils/dateUtils';

function MonthNavigator({ year, month, onPrev, onNext }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 0.5,
        py: 0.5,
      }}
    >
      {/* Previous month button */}
      <Tooltip title="Previous month">
        <IconButton
          onClick={onPrev}
          size="small"
          sx={{
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'primary.light',
            '&:hover': {
              background: 'primary.light',
              borderColor: 'primary.main',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Month + Year display */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          color: 'secondary.main',
          fontSize: { xs: '0.85rem', sm: '0.95rem' },
          letterSpacing: 0.5,
        }}
      >
        {MONTH_NAMES[month]} {year}
      </Typography>

      {/* Next month button */}
      <Tooltip title="Next month">
        <IconButton
          onClick={onNext}
          size="small"
          sx={{
            color: 'primary.main',
            border: '1px solid',
            borderColor: 'primary.light',
            '&:hover': {
              borderColor: 'primary.main',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default MonthNavigator;
