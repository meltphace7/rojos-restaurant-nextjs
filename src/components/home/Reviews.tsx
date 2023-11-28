import React from "react";
import classes from "./Reviews.module.css";
import Image from "next/image";

import Star from '../../../public/icons/star.svg';

// import Fajitas from "../../../public/imgs/fajitas-1.jpg";
// import Burrito from "../../../public/imgs/burrito-1.jpg";
// import Tacos from "../../../public/imgs/tacos-4.jpg";

const Reviews: React.FC = () => {
  return (
    <div className={classes.reviews}>
      <div className={classes["reviews-overlay"]}>
        <h2>Customer Reviews</h2>
        <h3>
          Don&apos;t Take Our Word For It! Our loyal customers speak for
          themeselves!
        </h3>
        <div className={classes["reviews-container"]}>
          <div className={classes.review}>
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
          <div className={classes.review}>
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
          <div className={classes.review}>
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
