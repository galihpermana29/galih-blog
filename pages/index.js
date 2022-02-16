import Head from 'next/head';
import Image from 'next/image';
import CardSection from '../Components/CardSection';
import MainHeader from '../Components/MainHeader';
import Navbar from '../Components/Navbar';
// import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Galih's Blog</title>
				<meta
					name="description"
					content="This blog contains Galih Permana's writings and sharing the knowledge that I have learned. The writings on this blog may not always be related to IT but can also be about my hobbies or my favorite football club."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<MainHeader />
				<CardSection />
			</main>
		</div>
	);
}
