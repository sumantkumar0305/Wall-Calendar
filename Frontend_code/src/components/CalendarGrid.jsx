// CalendarGrid.jsx
// Renders the 7-column calendar grid with day headers and day cells

import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { generateCalendarCells } from '../../utils/calendarUtils';
import { DAY_HEADERS } from '../../utils/dateUtils';
import DayCell from './DayCell';

function CalendarGrid({ year, month, startDate, endDate, onDayClick }) {
  // Generate cells only when year/month changes (performance optimization)
  const cells = useMemo(
    () => generateCalendarCells(year, month),
    [year, month]
  );

  return (
    <Box sx={{ userSelect: 'none' }}>
      {/* Day of week header row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          mb: 0.5,
        }}
      >
        {DAY_HEADERS.map((label, i) => {
          // Mark Sat (index 6) and Sun (index 0) in red
          const isWeekendHeader = i === 0 || i === 6;
          return (
            <Box
              key={label}
              sx={{
                textAlign: 'center',
                py: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '0.6rem', sm: '0.68rem' },
                  color: isWeekendHeader ? 'error.main' : 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Thin divider below headers */}
      <Box sx={{ borderTop: '1px solid #E0E0E0', mb: 0.5 }} />

      {/* Calendar day cells grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: { xs: '2px', sm: '3px' },
        }}
      >
        {cells.map((cell) => {
          if (cell.type === 'empty') {
            // Empty spacer cell
            return <Box key={cell.id} sx={{ aspectRatio: '1' }} />;
          }

          // It's a real day — render a DayCell
          return (
            <DayCell
              key={cell.id}
              date={cell.date}
              dayNumber={cell.dayNumber}
              startDate={startDate}
              endDate={endDate}
              onClick={onDayClick}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default CalendarGrid;
