// DayCell.jsx
// A single day cell in the calendar grid
// Handles all visual states: today, selected start/end, in-range, weekend, holiday

import React, { useMemo } from 'react';
import { Box, Tooltip } from '@mui/material';
import {
  isSameDay,
  isBetween,
  isToday,
  isWeekend,
} from '../utils/dateUtils';
import { getHoliday } from '../data/holidays';

function DayCell({ date, dayNumber, startDate, endDate, onClick }) {
  const holiday = useMemo(() => getHoliday(date), [date]);

  // Compute which visual state this cell is in
  const isStart = startDate && isSameDay(date, startDate);
  const isEnd = endDate && isSameDay(date, endDate);
  const isInRange = startDate && endDate && isBetween(date, startDate, endDate);
  const today = isToday(date);
  const weekend = isWeekend(date);

  // Determine background color
  let bgColor = 'transparent';
  let textColor = 'text.primary';
  let fontWeight = 400;
  let borderRadius = '6px';

  if (isStart || isEnd) {
    bgColor = '#1565C0';       // Deep blue for start/end
    textColor = '#FFFFFF';
    fontWeight = 700;
    borderRadius = isStart ? '6px 0 0 6px' : '0 6px 6px 0';
  } else if (isInRange) {
    bgColor = '#BBDEFB';       // Light blue for in-range
    textColor = '#0D47A1';
    fontWeight = 500;
    borderRadius = '0';
  } else if (today) {
    bgColor = '#1E88E5';       // Blue for today
    textColor = '#FFFFFF';
    fontWeight = 700;
  }

  // If start === end (same day selected), use full rounded
  const startEqualsEnd = startDate && endDate && isSameDay(startDate, endDate);
  if ((isStart || isEnd) && startEqualsEnd) {
    borderRadius = '6px';
  }

  // Text color for weekends (not selected)
  if (!isStart && !isEnd && !isInRange && !today && weekend) {
    textColor = 'error.main';
  }

  return (
    <Tooltip
      title={
        holiday
          ? `${holiday.emoji} ${holiday.name}`
          : today
          ? 'Today'
          : ''
      }
      placement="top"
      disableHoverListener={!holiday && !today}
      arrow
    >
      <Box
        onClick={() => onClick(date)}
        sx={{
          // Aspect ratio keeps cells square
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          cursor: 'pointer',
          borderRadius,
          background: bgColor,
          color: textColor,
          fontWeight,
          fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.82rem' },
          transition: 'transform 0.12s ease, background 0.15s ease',
          '&:hover': {
            transform: isStart || isEnd ? 'scale(1.12)' : 'scale(1.08)',
            zIndex: 2,
            // Slightly darken the hover state
            filter: isStart || isEnd || isInRange || today
              ? 'brightness(0.92)'
              : 'brightness(0.94)',
            background: isStart || isEnd || today
              ? bgColor
              : '#E3F2FD',
          },
          // Active (click) press effect
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        {dayNumber}

        {/* Holiday indicator dot at bottom */}
        {holiday && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '2px',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: isStart || isEnd || today ? '#FFFFFF' : '#E53935',
            }}
          />
        )}

        {/* Today ring indicator (when not selected) */}
        {today && !isStart && !isEnd && (
          <Box
            sx={{
              position: 'absolute',
              inset: '1px',
              borderRadius: '5px',
              border: '2px solid rgba(255,255,255,0.6)',
              pointerEvents: 'none',
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
}

export default DayCell;
