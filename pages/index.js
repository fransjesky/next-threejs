import Head from 'next/head';
import HomeContainer from '../containers/Home';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>3D Cube</title>
        <meta
          name='description'
          content='A simple 3D cube created by Frans Jesky'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </Box>
  );
}
