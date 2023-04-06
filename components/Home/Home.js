import React from 'react'
import Styles from "../Home/Home.module.css"
import imgPrincipal from "../../assets/imgPrincipal.png"

export const Home = () => {
    return (
        <div className={Styles.container}>
            <div className="content-wrapper">
                <div className={Styles.content}>
                    <h2>Irresistible Flavors</h2>
                    <p>Don't waste any more time and try our fresh delicacies. Your taste buds will thank you!</p>
                </div>
                <img className={Styles.imgPrincipal} src={imgPrincipal} alt=""></img>
            </div>
        </div>

    )
}

export default Home