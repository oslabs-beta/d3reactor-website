import type {NextPage} from 'next';
import Header from '../components/Header';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="bg-white dark:bg-black min-h-screen">
        <div className={styles.container}>
          <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-gray-100 sm:text-5xl">Blog</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
