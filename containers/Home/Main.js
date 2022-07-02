import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Typography, Modal } from '@mui/material';

// icons
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import GitHubIcon from '@mui/icons-material/GitHub';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import CropFreeIcon from '@mui/icons-material/CropFree';

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
    modalContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: {
        xs: '90vw',
        sm: '25rem',
        md: '27.5rem',
        lg: '30rem',
      },
      padding: '2rem',
      borderRadius: '0.5rem',
      backgroundColor: '#ffffff',
      outline: 'none',
    },
    nameText: {
      fontSize: '1.2em',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'center',
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
      fontFamily: `'Quicksand', sans-serif`,
      fontWeight: '400',
      fontStyle: 'normal',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    modalTitleText: {
      marginBottom: '1rem',
      fontSize: '1.5em',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    guideContainer: {
      margin: '2rem 0',
    },
    guideTitleText: {
      fontSize: '0.75em',
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: '700',
      fontStyle: 'normal',
      display: 'flex',
      alignItems: 'center',
      textTransform: 'capitalize',
    },
    guideDescText: {
      margin: '0.5rem 0',
      fontSize: '0.75em',
      fontFamily: `'Quicksand', sans-serif`,
      fontWeight: '400',
      fontStyle: 'normal',
    },
  };

  // state init
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const guideList = [
    {
      icon: (
        <RotateLeftIcon sx={{ fontSize: 'large', marginRight: '0.5rem' }} />
      ),
      title: 'left click',
      desc: 'You can rotate the cube to wherever the direction you are pointing on',
    },
    {
      icon: (
        <HighlightAltIcon sx={{ fontSize: 'large', marginRight: '0.5rem' }} />
      ),
      title: 'right click',
      desc: 'Click and hold the right click to move and change the position of the cube',
    },
    {
      icon: <CropFreeIcon sx={{ fontSize: 'large', marginRight: '0.5rem' }} />,
      title: 'scroll',
      desc: 'Scroll out to zoom out, and scroll in to zoom in',
    },
  ];

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
          onClick={handleOpen}
        >
          <ThreeDRotationIcon
            sx={{ fontSize: 'large', marginRight: '0.5rem' }}
          />
          Orbital Controls
        </Typography>
        <Link href='https://github.com/fransjesky/next-threejs' passHref>
          <a>
            <Typography
              variant='h3'
              component='h3'
              sx={styleSheets.descriptionsText}
            >
              <GitHubIcon sx={{ fontSize: 'large', marginRight: '0.5rem' }} />
              fransjesky/next-threejs
            </Typography>
          </a>
        </Link>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='orbital controls'
        aria-describedby='orbital controls manual'
      >
        <Box sx={styleSheets.modalContainer}>
          <Typography sx={styleSheets.modalTitleText}>
            Orbital Controls
          </Typography>
          {guideList.map((value, index) => {
            return (
              <Box sx={styleSheets.guideContainer} key={index}>
                <Typography sx={styleSheets.guideTitleText}>
                  {value.icon}
                  {value.title}
                </Typography>
                <Typography sx={styleSheets.guideDescText}>
                  {value.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Modal>
    </>
  );
}

export default Main;
