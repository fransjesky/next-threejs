import React from 'react';
import { Box, Typography } from '@mui/material';

// icons
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import GitHubIcon from '@mui/icons-material/GitHub';

function Main() {
  const styleSheets = {
    mainContainer: {
      position: 'absolute',
      top: '10%',
    },
    asideContainer: {
      position: 'absolute',
      bottom: '10%',
    },
    nameText: {
      fontSize: '1.2em',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '700',
      fontStyle: 'normal',
      textTransform: 'uppercase',
    },
    titleText: {
      color: '#2196f3',
      fontSize: '0.75em',
      fontFamily: `'Quicksand', sans-serif`,
      fontWeight: '400',
      fontStyle: 'normal',
      textTransform: 'capitalize',
    },
    descriptionsText: {
      margin: '0.5rem 0',
      fontSize: '0.75em',
      display: 'flex',
      alignItems: 'center',
    },
  };

  return (
    <>
      <Box component='main' sx={styleSheets.mainContainer}>
        <Typography variant='h2' component='h2' sx={styleSheets.nameText}>
          frans jesky
        </Typography>
        <Typography variant='h1' component='h1' sx={styleSheets.titleText}>
          creative frontend developer
        </Typography>
      </Box>
      <Box component='aside' sx={styleSheets.asideContainer}>
        <Typography
          variant='h3'
          component='h3'
          sx={styleSheets.descriptionsText}
        >
          <ThreeDRotationIcon
            sx={{ fontSize: 'large', marginRight: '0.5rem' }}
          />
          Orbital Controls
        </Typography>
        <Typography
          variant='h3'
          component='h3'
          sx={styleSheets.descriptionsText}
        >
          <GitHubIcon sx={{ fontSize: 'large', marginRight: '0.5rem' }} />
          fransjesky/next-threejs
        </Typography>
      </Box>
    </>
  );
}

export default Main;
