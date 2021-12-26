import type {NextPage} from 'next';
import Header from '../components/Header';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Guides: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guides</title>
        <meta name="description" content="Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className={styles.container}>
          <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-gray-100 sm:text-5xl">
              Guides Page
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guides;
