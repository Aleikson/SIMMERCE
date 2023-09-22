import React from 'react'
import Styles from "../Home/Home.module.css"


export const Home = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <h2>Delicious cupcake      </h2>
   
                <h2> to order</h2>
                <button className={Styles.button}>Explore More</button>
            </div>
        </div>
    )
}

export default Home;