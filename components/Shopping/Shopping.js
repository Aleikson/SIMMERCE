import React from 'react'
import { Products } from '../Products'
import { Items } from "./Items"
import styles from "./Shopping.module.css"

export const Shopping = () => {
    return (
        <div id='shopping' className={styles.container}>
            <div className={styles.products}>
                {Products.map((product, index) => (
                    <Items key={index} data={product} />
                ))}
            </div>
        </div>
    );
};