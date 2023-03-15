import React from 'react'
import { Products } from '../Products'
import { Items } from "./Items"
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {Products.map((product, index) => (
                    <Items key={index} data={product} />
                ))}
            </div>
        </div>
    );
};