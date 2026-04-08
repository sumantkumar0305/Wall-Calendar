// RangeSummary.jsx
// Displays a summary of the currently selected date range
// Shows start date, end date, and number of days selected
// Includes a Reset Selection button

import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import { formatDateDisplay, rangeDayCount } from '../../utils/dateUtils';

function RangeSummary({ startDate, endDate, onReset }) {
  const hasStart = !!startDate;
  const hasEnd = !!endDate;
  const hasRange = hasStart && hasEnd;
  const dayCount = hasRange ? rangeDayCount(startDate, endDate) : 0;

  if (!hasStart && !hasEnd) {
    return (
      <Box>
        <Stack direction="row" alignItems="center" spacing={0.8} mb={0.5}>
          <DateRangeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
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
            Selection
          </Typography>
        </Stack>
        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontSize: '0.72rem',
            fontStyle: 'italic',
          }}
        >
          Click a date to start selecting a range
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Section heading */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0.8}>
        <Stack direction="row" alignItems="center" spacing={0.8}>
          <DateRangeIcon sx={{ fontSize: 16, color: 'primary.main' }} />
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
            Selected Range
          </Typography>
        </Stack>

        {/* Reset button */}
        <Button
          size="small"
          variant="text"
          onClick={onReset}
          startIcon={<CloseIcon sx={{ fontSize: 12 }} />}
          sx={{
            fontSize: '0.65rem',
            py: 0.2,
            px: 0.8,
            minWidth: 0,
            color: 'text.secondary',
            '&:hover': { color: 'error.main' },
          }}
        >
          Reset
        </Button>
      </Stack>

      {/* Range details */}
      <Box
        sx={{
          background: '#E3F2FD',
          borderRadius: '6px',
          border: '1px solid #BBDEFB',
          p: 1,
        }}
      >
        {/* Start date row */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            variant="caption"
            sx={{ fontSize: '0.68rem', color: 'text.secondary' }}
          >
            From
          </Typography>
          <Chip
            label={formatDateDisplay(startDate)}
            size="small"
            sx={{
              fontSize: '0.65rem',
              height: 20,
              background: '#1565C0',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          />
        </Stack>

        {/* End date row or waiting prompt */}
        {hasEnd ? (
          <>
            <Divider sx={{ my: 0.6, borderColor: '#BBDEFB' }} />
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography
                variant="caption"
                sx={{ fontSize: '0.68rem', color: 'text.secondary' }}
              >
                To
              </Typography>
              <Chip
                label={formatDateDisplay(endDate)}
                size="small"
                sx={{
                  fontSize: '0.65rem',
                  height: 20,
                  background: '#1565C0',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              />
            </Stack>

            {/* Day count badge */}
            <Divider sx={{ my: 0.6, borderColor: '#BBDEFB' }} />
            <Box textAlign="center">
              <Chip
                label={`${dayCount} day${dayCount !== 1 ? 's' : ''} selected`}
                size="small"
                sx={{
                  fontSize: '0.68rem',
                  height: 22,
                  background: '#1E88E5',
                  color: '#FFFFFF',
                  fontWeight: 700,
                }}
              />
            </Box>
          </>
        ) : (
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 0.5,
              fontSize: '0.68rem',
              color: 'text.secondary',
              fontStyle: 'italic',
            }}
          >
            Now click an end date →
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default RangeSummary;
