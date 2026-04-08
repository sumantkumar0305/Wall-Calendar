// WallCalendar.jsx
// The main container component that holds all calendar state
// and renders the full wall calendar layout

import React, { useState, useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import { isSameDay } from '../utils/dateUtils';
import WallCalendarHeader from './WallCalendarHeader';
import CalendarHero from './CalendarHero';
import MonthNavigator from './MonthNavigator';
import CalendarGrid from './CalendarGrid';
import NotesPanel from './NotesPanel';
import RangeSummary from './RangeSummary';

function WallCalendar() {
  const today = new Date();

  // Currently viewed month and year
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  // Date range selection state
  // startDate and endDate are either null or Date objects
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handle a day cell click — implements the selection logic:
  // 1st click = set start date
  // 2nd click (after start) = set end date if after start, else reset start
  // 3rd click (range complete) = start fresh new selection
  const handleDayClick = useCallback((date) => {
    if (!startDate || (startDate && endDate)) {
      // No selection yet, OR range is complete → start a fresh selection
      setStartDate(date);
      setEndDate(null);
    } else {
      // Start is set, end is not yet
      if (isSameDay(date, startDate)) {
        // Clicking start again clears selection
        setStartDate(null);
        setEndDate(null);
      } else if (date > startDate) {
        // Valid end date
        setEndDate(date);
      } else {
        // Clicked before start → reset start to this new date
        setStartDate(date);
        setEndDate(null);
      }
    }
  }, [startDate, endDate]);

  // Reset selection entirely
  const handleResetSelection = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

  // Navigate months — we keep selection in state across navigation
  const handlePrevMonth = useCallback(() => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  }, [viewMonth]);

  const handleNextMonth = useCallback(() => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  }, [viewMonth]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', md: 900, lg: 980 },
        mx: 'auto',
      }}
    >
      {/* Hanger / binding effect at the top */}
      <CalendarHanger />

      {/* Main calendar paper — looks like a wall calendar card */}
      <Paper
        elevation={8}
        sx={{
          borderRadius: { xs: '0 0 16px 16px', md: '0 0 20px 20px' },
          overflow: 'hidden',
          // Subtle paper texture via background gradient
          background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
        }}
      >
        {/* Hero image section with month/year overlay */}
        <CalendarHero
          month={viewMonth}
          year={viewYear}
        />

        {/* Bottom section: notes on left, calendar on right (desktop) */}
        {/* On mobile, they stack vertically */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { md: 360 },
          }}
        >
          {/* Left panel: Notes + Range Summary */}
          <Box
            sx={{
              width: { xs: '100%', md: '36%' },
              borderRight: { md: '1px solid #E0E0E0' },
              borderBottom: { xs: '1px solid #E0E0E0', md: 'none' },
              p: { xs: 2, md: 2.5 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              background: '#FAFAFA',
            }}
          >
            <RangeSummary
              startDate={startDate}
              endDate={endDate}
              onReset={handleResetSelection}
            />
            <NotesPanel
              startDate={startDate}
              endDate={endDate}
            />
          </Box>

          {/* Right panel: month nav + calendar grid */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 1.5, md: 2 },
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <MonthNavigator
              year={viewYear}
              month={viewMonth}
              onPrev={handlePrevMonth}
              onNext={handleNextMonth}
            />
            <CalendarGrid
              year={viewYear}
              month={viewMonth}
              startDate={startDate}
              endDate={endDate}
              onDayClick={handleDayClick}
            />
          </Box>
        </Box>

        {/* Footer branding strip */}
        <WallCalendarHeader />
      </Paper>
    </Box>
  );
}

// Small sub-component: the spiral binding / hanger at the top of the calendar
function CalendarHanger() {
  // Renders a row of spiral binding circles + a center hook
  const rings = Array.from({ length: 13 });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 28,
        background: 'linear-gradient(180deg, #CFD8DC 0%, #B0BEC5 100%)',
        borderRadius: '12px 12px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        px: 3,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      {/* Center hook */}
      <Box
        sx={{
          position: 'absolute',
          top: -14,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 16,
          height: 20,
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          border: '3px solid #78909C',
          borderBottom: 'none',
          background: 'transparent',
          zIndex: 10,
        }}
      />
      {/* Spiral rings */}
      {rings.map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: '2.5px solid #78909C',
            background: '#ECEFF1',
          }}
        />
      ))}
    </Box>
  );
}

export default WallCalendar;
