import React from 'react'
import Image from 'next/image';
import classes from './InfiniteScroll.module.css';

interface infiniteScrollProps {
    images: any[];
}

const InfiniteScroll: React.FC<infiniteScrollProps> = (props) => {
    return (
      <section className={classes.scroller}>
        <div className={classes.slide}>
          {props.images.map((img: any, i: number) => {
              return (
                <div key={i} className={classes['image-container']}>
                  <Image src={img} alt="image" />
                </div>
              );
          })}
        </div>
        <div className={classes.slide}>
          {props.images.map((img: any, i: number) => {
             return (
               <div key={i} className={classes["image-container"]}>
                 <Image src={img} alt="image" />
               </div>
             );
          })}
        </div>
      </section>
    );
}

export default InfiniteScroll
