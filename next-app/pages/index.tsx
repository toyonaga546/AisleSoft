import React from 'react';
import { NextPage } from 'next';
import { Main } from '@/components/Main';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
