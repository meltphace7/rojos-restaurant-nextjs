import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import classes from "@/styles/About.module.css";
import Hero from '../../components/about/Hero';
import team from '../../../public/imgs/chefs-1.jpg';
import FeatureOverlay from '../../components/general/ParallaxOverlay';

import enchiladas from '../../../public/imgs/enchiladas-2.jpg';

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Rojo&apos;s Mexican Cuisine</title>
        <meta name="description" content="About page for Rojo's Mexican Cuisine" />
      </Head>
      <div className={classes["about-page"]}>
        <Hero />
        <section className={classes["about-section"]}>
          <div className={"table-backdrop"}>
            <div className={"section-content"}>
              <h2>Tradition Lives On</h2>
              <div className={"accent"}></div>
              <p className={"section-content-text"}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome
                to Rojo&apos;s, a vibrant Mexican culinary haven founded by the
                spirited Mexican immigrant, Pepe &quot;Rojo&quot; Garcia, in the
                heart of Wenatchee in 2003. Born from a passion for authentic
                flavors and a desire to share the rich tapestry of Mexican
                cuisine, Rojo&apos;s is a celebration of family, tradition, and
                the joy of savoring delicious meals together. From the moment
                you step into Rojo&apos;s, you are embraced by the warmth of
                Pepe&apos;s family recipes, passed down through generations.
                Each dish tells a story, carrying the essence of Mexican culture
                and the love that goes into creating every flavor-packed bite.
              </p>
              <p className={"section-content-text"}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Over
                the years, Rojo&apos;s has become an integral part of the
                downtown Wenatchee culinary scene, inviting locals and visitors
                alike to experience the true taste of Mexico. The menu boasts a
                diverse array of dishes, from sizzling fajitas to mouthwatering
                enchiladas, all prepared with the finest ingredients and a
                genuine commitment to authenticity. At Rojo&apos;s, every meal
                is a fiesta, and every guest is treated like familia. So, come
                join us at Rojo&apos;s for an unforgettable dining experience
                where the spirit of Mexico comes alive in every dish, and where
                Pepe &quot;Rojo&quot; Garcia&apos;s dream continues to flourish,
                creating lasting memories one flavorful bite at a time.
              </p>
            </div>
          </div>
          <FeatureOverlay
            title="A Passion For Flavor"
            image={enchiladas}
            word="Flavor"
          />
          <div className={classes["team-section"]}>
            <div className={"table-backdrop"}>
              <div className={"section-content"}>
                <h2>Our Team</h2>
                <div className={"accent"}></div>
                <p className={"section-content-text"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Welcome to Rojo&apos;s, where passion meets flavor in a
                  symphony of Mexican culinary excellence. Nestled in the heart
                  of Wenatchee, our restaurant is more than just a dining
                  destination, it&apos;s a celebration of authentic Mexican
                  cuisine crafted with love and skill. At Rojo&apos;s, our
                  dedicated staff is the heartbeat of our kitchen, bringing
                  together a team of culinary artisans whose commitment to
                  excellence is unmatched. With years of experience and a
                  profound love for Mexican culinary traditions, our chefs
                  transform the freshest, locally sourced ingredients into a
                  vibrant tapestry of flavors that dance on your palate. Our
                  professional team takes pride in every dish they create,
                  showcasing the rich tapestry of Mexican gastronomy. From the
                  sizzle of perfectly seasoned fajitas to the comforting warmth
                  of handmade tortillas, each plate tells a story of dedication,
                  craftsmanship, and a deep respect for the art of cooking. We
                  believe that a truly exceptional dining experience goes beyond
                  the food itself. Our attentive and friendly staff is committed
                  to providing top-notch service, ensuring that every visit to
                  Rojo&apos;s is a memorable journey into the heart of Mexican
                  culinary excellence. Whether you&apos;re a seasoned
                  connoisseur of Mexican cuisine or a newcomer eager to explore
                  the bold flavors of the region, Rojo&apos;s invites you to
                  join us in a celebration of taste, tradition, and warm
                  hospitality. Bienvenidos a Rojo&apos;s – where every meal is a
                  masterpiece, and every guest is a cherished part of our
                  extended familia.
                </p>
                <Image src={team} alt="team" className={classes["team-img"]} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
