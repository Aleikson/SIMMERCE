import React from 'react'
import Styles from "../Home/Home.module.css"

export const Home = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
            <h2>Welcome to Our Cupcake Shop</h2>
                <p>Indulge in the world of sweet delights. Our delicious cupcakes are made with love and care. Whether it's a special occasion or a simple craving, we've got you covered.</p>
                <button className={Styles.button}>Explore More</button>
            </div>
        </div>
    )
}

export default Home;