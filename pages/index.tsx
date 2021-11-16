import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import GetStarted from '../components/GetStarted'


const Home: NextPage = () => {
  return (
		<>
			<Head>
				<title>D3 Reacts</title>
				<meta name="description" content="Create performant D3 react charts and visualizations fast." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<GetStarted></GetStarted>
			<div className={styles.container}>
				<footer className={styles.footer}>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by D3 + React!
					</a>
				</footer>
			</div>
		</>
	);
}

export default Home
