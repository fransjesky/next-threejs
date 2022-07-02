import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import Main from './Main';

function HomeContainer() {
  const DynamicCube = dynamic(() => import('../../animations/Cube'), {
    ssr: false,
  });

  const styles = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <Box sx={styles}>
      <DynamicCube />
      <Main />
    </Box>
  );
}

export default HomeContainer;
