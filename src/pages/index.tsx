
import Head from 'next/head'
import { Inter } from 'next/font/google'
import classes from '@/styles/Home.module.css'
// import { useInView } from "react-intersection-observer";
// Components
import HeroVideo from "../components/home/HeroVideo";
import Welcome from "../components/home/Welcome";
import SplitFeat from "../components/general/SplitFeature";
import SplitFeatAlt from "../components/general/SplitFeatureAlt";
import OverlayTextOne from '../components/home/OverlayTextOne';
import OverlayTextTwo from "../components/home/OverlayTextTwo";
import Reviews from "../components/home/Reviews";
// IMAGES
import tacosOne from "../../public/imgs/tacos-1.jpg";
import tacosTwo from "../../public/imgs/tacos-2.jpg";
import burritoOne from "../../public/imgs/burrito-1.jpg";
import woodGrain from "../../public/imgs/bg-wood-grain.jpg";
import parchment from "../../public/imgs/bg-parchment.jpg";
import grill from "../../public/imgs/flame-grill.jpg";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rojo&apos;s Mexican Restaurant</title>
        <meta name="description" content="Rojo's Mexican Restaurant Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${classes.main} ${inter.className}`}>
        <HeroVideo />
        <Welcome />
        <SplitFeat
          title="Delicious Quality"
          text="Our mouthwatering flavors and expertly crafted Mexican dishes are sure to delight your taste buds, leaving you craving for more."
          path="/menu"
          image={tacosOne}
          bgImage={woodGrain}
          button="Our Menu"
        />
        <OverlayTextOne />
        <SplitFeatAlt
          title="Authentic Flavor"
          text="Experience the taste of tradition. We take pride in preserving traditional recipes, and sourcing the finest ingredients to ensure an unparalleled dining experience."
          path="/about"
          image={burritoOne}
          bgImage={grill}
          button="About Us"
        />
        <OverlayTextTwo />
        <SplitFeat
          title="We Cater!"
          text="Planning an event?  Our catering service ensures no one leaves hungry.  Let us feed your fiesta!"
          path="/catering"
          image={tacosTwo}
          bgImage={parchment}
          button="Catering"
        />
        <Reviews />
      </main>
    </>
  );
}
