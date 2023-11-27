import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
import HeroVideo from "../components/home/HeroVideo";

import { useInView } from "react-intersection-observer";


//
import Welcome from "../components/home/Welcome";
import SplitFeat from "../components/general/SplitFeature";
import SplitFeatAlt from "../components/general/SplitFeatureAlt";
import ParallaxOverlay from '../components/general/ParallaxOverlay';
import Reviews from "../components/home/reviews";

// IMAGES
import tacosOne from "../../public/imgs/tacos-1.jpg";
import tacosTwo from "../../public/imgs/tacos-2.jpg";
import tacosThree from "../../public/imgs/tacos-3.jpg";
import tacosFour from "../../public/imgs/tacos-4.jpg";
import tacosFive from "../../public/imgs/tacos-5.jpg";

import burritoOne from "../../public/imgs/burrito-1.jpg";
import burritoTwo from "../../public/imgs/burrito-2.jpg";
import burritoThree from "../../public/imgs/burrito-3.jpg";

import fajitasOne from "../../public/imgs/fajitas-1.jpg";

import enchiladasOne from "../../public/imgs/enchiladas-1.jpg";
import enchiladasTwo from "../../public/imgs/enchiladas-2.jpg";
import enchiladasThree from "../../public/imgs/enchiladas-3.jpg";

import nachos from "../../public/imgs/nachos.jpg";


import woodGrain from "../../public/imgs/bg-wood-grain.jpg";
import parchment from "../../public/imgs/bg-parchment.jpg";
import wood from "../../public/imgs/bg-wood-grain-2.jpg";
import grill from "../../public/imgs/flame-grill.jpg";
import table from "../../public/imgs/food-table.jpg";

import Slider from '../components/general/Slider';

const sliderImages = [nachos, enchiladasOne, burritoOne, tacosOne, fajitasOne];

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
        <Welcome />
     <Slider images={sliderImages} />

        <SplitFeat
          title="Delicious Quality"
          text="Our mouthwatering flavors and expertly crafted Mexican dishes are sure to delight your taste buds, leaving you craving for more."
          path="/menu"
          image={tacosOne}
          bgImage={woodGrain}
          button="Our Menu"
        />

        <ParallaxOverlay title="Made Fresh" image={nachos} word="Fresh" />
        <SplitFeatAlt
          title="Authentic Flavor"
          text="Experience the taste of tradition. We take pride in preserving traditional recipes, and sourcing the finest ingredients to ensure an unparalleled dining experience."
          path="/about"
          image={burritoOne}
          bgImage={grill}
          button="About Us"
        />

        <ParallaxOverlay
          title="Outstanding Taste"
          image={enchiladasOne}
          word="Outstanding"
        />

        <SplitFeat
          title="We Cater!"
          text="Planning an event?  Our catering service ensures no one leaves hungry.  Let us feed your fiesta!"
          path="/catering"
          image={tacosTwo}
          bgImage={parchment}
          button="We Cater!"
        />
        <Reviews />
      </main>
    </>
  );
}
