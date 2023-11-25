import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
import Hero from '../components/home/Hero';
import HeroVideo from "../components/home/HeroVideo";
import FeatureBox from '../components/home/FeatureBox';
import SplitFeatureBox from '../components/home/SplitFeatureBox';
import FeatureBoxTwo from "../components/home/FeatureBoxTwo";
import FeatureOverlay from "../components/home/FeatureOverlay";
import { useInView } from "react-intersection-observer";
//
import Feature from "../components/home/Feature";
import remodelImg from '../../public/imgs/tacos-4.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Rojo's Mexican Restaurant</title>
        <meta name="description" content="Rojo's Mexican Restaurant Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <HeroVideo />
        {/* <Hero /> */}
        <FeatureBox />
        <SplitFeatureBox />
        <FeatureBoxTwo />
        <FeatureOverlay />
        <Feature
          title="Quality. Inside &amp; Out"
          content="Crafting both stunning interiors and captivating exteriors, we specialize in new builds and remodels. Elevate your living spaces with our commitment to beauty, functionality, and enduring design."
          buttonText="Learn More"
          path={"/services/remodeling"}
          imgSrc={remodelImg}
        />
      </main>
    </>
  );
}
