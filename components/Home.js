import React from 'react'
import { Products } from './Products'
import { Items } from "./Items"
import "../styles/Home.css"

export const Home = () => {
    return (
        <div className='container'>
            <div className="products">
                {Products.map((product, index) => (
                    <Items key={index} data={product} />
                ))}
            </div>
        </div>
    );
};