import React, {useState, useEffect } from "react";
import classes from "./Reviews.module.css";
import Image from "next/image";

import Star from '../../../public/icons/star.svg';
import { useInView } from "react-intersection-observer";

const Reviews: React.FC = () => {
  // Intersection Observer pop-up / fade animation
  const [animateOne, setAnimateOne] = useState<boolean>(false);
  const [animateTwo, setAnimateTwo] = useState<boolean>(false);
  const [animateThree, setAnimateThree] = useState<boolean>(false);

  const options = { root: null, threshold: 0.2 };

  const { ref: sectionRef, inView: sectionIsVisible } = useInView(options);

  useEffect(() => {
    console.log();
    if (!sectionIsVisible) return;
    const timeoutOne = setTimeout(() => setAnimateOne(true), 0);
    const timeoutTwo = setTimeout(() => setAnimateTwo(true), 100);
    const timeoutThree = setTimeout(() => setAnimateThree(true), 200);

    return () => {
      clearTimeout(timeoutOne);
      clearTimeout(timeoutTwo);
      clearTimeout(timeoutThree);
    };
  }, [sectionIsVisible]);
  return (
    <div className={classes.reviews}>
      <div className={classes["reviews-overlay"]}>
        <h2>Customer Reviews</h2>
        <h3>
          Don&apos;t Take Our Word For It! Our loyal customers speak for
          themeselves!
        </h3>
        <div ref={sectionRef} className={classes["reviews-container"]}>
          <div
            className={
              animateOne
                ? `${classes.review}`
                : `${classes.review} ${classes.hidden} `
            }
          >
            <p className={classes["review-text"]}>
              &quot;Wow this place was great! The service was fast, the food was
              amazing and the ambience. Would absolutely recommend to
              anyone!&quot;
            </p>
            <p>-Heather B</p>
            <div className={classes.stars}>
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
          </div>
          <div
            className={
              animateTwo
                ? `${classes.review}`
                : `${classes.review} ${classes.hidden} `
            }
          >
            <p className={classes["review-text"]}>
              &quot;Came here for lunch and was blown away. The staff was so
              friendly and helpful and the food was incredible. My new favorite
              luch spot!&quot;
            </p>
            <p>-Jessica R</p>
            <div className={classes.stars}>
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
          </div>
          <div
            className={
              animateThree
                ? `${classes.review}`
                : `${classes.review} ${classes.hidden} `
            }
          >
            <p className={classes["review-text"]}>
              &quot;The carnitas tacos were bomb! You can tell these chefs know
              their trade well. Definitely comming back!&quot;
            </p>
            <p>-Matt H</p>
            <div className={classes.stars}>
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
