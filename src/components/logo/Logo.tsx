import React from 'react'
import classes from './Logo.module.css';

const Logo:React.FC = () => {
    return (
        <div className={classes.logo}>
            <h1>Rojo's</h1>
            <h2>Mexican Cuisine</h2>
        </div>
    )
}

export default Logo
