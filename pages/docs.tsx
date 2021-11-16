import type { NextPage } from "next";
import {Footer} from "../components/Footer"
import Header from "../components/Header";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Docs: NextPage = () => {
	return (
		<>
			<Head>
				<title>Docs</title>
				<meta
					name="description"
					content="Docs"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="bg-white dark:bg-gray-900">
				<div className={styles.container}>
					<div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
							Docs
						</h1>
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Docs;
