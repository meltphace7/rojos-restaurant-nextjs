import React from 'react'
import classes from './MenuItem.module.css';
import Image from 'next/image';

interface MenuItemProps {
    title: string;
    description: string;
    price: number;
    image: any;
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
    return (
      <div className={classes["menu-item"]}>
        <div className={classes["item-img__container"]}>
          <Image src={props.image} alt={props.title} />
        </div>
        <div className={classes["item-text__container"]}>
          <h3>{props.title}</h3>
          <div className={classes.accent}></div>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>{`$${props.price}`}</p>
        </div>
      </div>
    );
}

export default MenuItem
