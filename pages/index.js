import Head from 'next/head';
import dynamic from 'next/dynamic';

export default function Home() {
  const DynamicCube = dynamic(() => import('../animations/Cube'), {
    ssr: false,
  });

  return (
    <div>
      <Head>
        <title>3D Cube</title>
        <meta
          name='description'
          content='A simple 3D cube created by Frans Jesky'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <DynamicCube />
    </div>
  );
}
