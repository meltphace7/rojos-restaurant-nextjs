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
        <title>About | Rojo's Mexican Cuisine</title>
        <meta name="description" content="About page for Rojo's Cantina" />
      </Head>
      <div className={classes["about-page"]}>
        <Hero />
        <section className={classes["about-section"]}>
          <div className={classes["about-mission"]}>
            <div className={classes["about-mission-text"]}>
              <h1>Tradition Lives On</h1>
              <div className={classes.accent}></div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded
                in 2006 by Mike Higgins, Tieton construction has thrived by
                upholding core values of quality, integrity, and community.
                Evolving to meet the demands of our fast-paced world, we remain
                committed to delivering exceptional construction services. With
                a focus on craftsmanship and ethical practices, we build not
                only structures but enduring relationships within the
                communities we serve. Explore our journey and discover how we
                transform visions into quality-built realities.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At
                Tieton Construction, our commitment revolves around you—the
                customer. Experience worry-free projects as we blend
                craftsmanship with efficiency, ensuring beautiful results
                delivered on time. Trust us to bring your vision to life,
                surpassing expectations with every detail and timeline met.
              </p>
            </div>
          </div>
          {/* <div className={classes["about-image__overlay"]}>
            <h2>
              A Passion for<span>Flavor</span>
            </h2>
          </div> */}
          <FeatureOverlay title="A Passion For Flavor" image={enchiladas} word="Flavor" />
          <div className={classes["team-section"]}>
            <div className={classes["about-mission"]}>
              <div className={classes["about-mission-text"]}>
                <h1>Our Team</h1>
                <div className={classes.accent}></div>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Welcome to Rojo's, where passion meets flavor in a symphony of
                  Mexican culinary excellence. Nestled in the heart of [City],
                  our restaurant is more than just a dining destination; it's a
                  celebration of authentic Mexican cuisine crafted with love and
                  skill. At Rojo's, our dedicated staff is the heartbeat of our
                  kitchen, bringing together a team of culinary artisans whose
                  commitment to excellence is unmatched. With years of
                  experience and a profound love for Mexican culinary
                  traditions, our chefs transform the freshest, locally sourced
                  ingredients into a vibrant tapestry of flavors that dance on
                  your palate. Our professional team takes pride in every dish
                  they create, showcasing the rich tapestry of Mexican
                  gastronomy. From the sizzle of perfectly seasoned fajitas to
                  the comforting warmth of handmade tortillas, each plate tells
                  a story of dedication, craftsmanship, and a deep respect for
                  the art of cooking. We believe that a truly exceptional dining
                  experience goes beyond the food itself. Our attentive and
                  friendly staff is committed to providing top-notch service,
                  ensuring that every visit to Rojo's is a memorable journey
                  into the heart of Mexican culinary excellence. Whether you're
                  a seasoned connoisseur of Mexican cuisine or a newcomer eager
                  to explore the bold flavors of the region, Rojo's invites you
                  to join us in a celebration of taste, tradition, and warm
                  hospitality. Bienvenidos a Rojo's – where every meal is a
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
