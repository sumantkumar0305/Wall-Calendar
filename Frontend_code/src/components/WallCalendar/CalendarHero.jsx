// CalendarHero.jsx
// The top section of the wall calendar — hero image with month/year overlay
// Mimics the physical wall calendar design with a bold image and diagonal shapes

import React, { useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { MONTH_NAMES } from '../../utils/dateUtils';
import { getHeroForMonth } from '../../data/heroImages';

function CalendarHero({ month, year }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const heroData = getHeroForMonth(month);
  const accentColor = heroData.accentColor;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 180, sm: 220, md: 260 },
        overflow: 'hidden',
        background: '#ECEFF1',
      }}
    >
      {/* Background hero image */}
      {!imgLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: 'absolute', inset: 0 }}
        />
      )}
      <Box
        component="img"
        src={heroData.url}
        alt={heroData.alt}
        onLoad={() => setImgLoaded(true)}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          opacity: imgLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Dark gradient overlay at bottom to make text readable */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Diagonal blue shape (bottom-left) — inspired by the reference image */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '55%',
          height: '48%',
          background: accentColor,
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
          opacity: 0.92,
        }}
      />

      {/* Diagonal blue shape (overlapping, slightly lighter) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40%',
          height: '38%',
          background: `${accentColor}CC`,
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
        }}
      />

      {/* Month/Year text — bottom right over the image */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 20 },
          right: { xs: 16, md: 24 },
          textAlign: 'right',
          color: '#FFFFFF',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontWeight: 400,
            letterSpacing: 2,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1,
            mb: 0.3,
          }}
        >
          {year}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.6rem' },
            fontWeight: 900,
            letterSpacing: 1,
            color: '#FFFFFF',
            lineHeight: 1,
            textTransform: 'uppercase',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {MONTH_NAMES[month]}
        </Typography>
      </Box>

      {/* Small accent bar on the left side — design detail */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 5,
          height: '100%',
          background: accentColor,
        }}
      />
    </Box>
  );
}

export default CalendarHero;
