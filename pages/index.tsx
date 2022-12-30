import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-between mx-auto items-center bg-yellow-400 border-y border-black py-10 lg:py-0  md:px-20 lg:px-40">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">Stay curious.</h1>
          <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="Medium logo"
        />
      </div>
    </div>
  );
};

export default Home;
