import React from 'react'
import Styles from "../Home/Home.module.css"
import imgPrincipal from "../../assets/principal.png"

export const Home = () => {
    return (
        <div className={Styles.container}>
            <div class="content-wrapper">
                <div className={Styles.content}>
                    <h2>Text Here</h2>
                    <p>Lorem impsun Lorem impsun Lorem impsun Lorem impsun Lorem impsun Lorem impsun Lorem impsun</p>
                </div>
                <img className={Styles.imgPrincipal} src={imgPrincipal} alt=""></img>
            </div>
        </div>

    )
}

export default Home