import type {NextPage} from 'next';
import Head from 'next/head';
import {Footer} from '../components/Footer';
import Header from '../components/Header';
import GetStarted from '../components/GetStarted';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>d3reactor</title>
        <meta name="description" content="Create performant d3reactor charts and visualizations fast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <GetStarted></GetStarted>
      <Footer />
    </>
  );
};

export default Home;
