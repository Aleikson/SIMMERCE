import React from 'react';
import styles from './Gallery.module.css';
import { Products } from '../Products';

const Gallery = () => {
  const produtosDaSemana = Products.filter((product) => product.produtoDaSemana);

  return (
    <div id='gallery' className={styles.galleryContainer}>
      <div className={styles.content}>
        <div className={styles.leftDiv}>
          <h2>Cupcakes of the Week: Our Customers' Favorites!</h2>
          <ul>
            {produtosDaSemana.map((product) => (
              <li key={product.id}>{product.productName}</li>
            ))}
          </ul>
          <button href='shopping'>ORDER</button>
        </div>
        <div className={styles.rightDiv}>
          {produtosDaSemana.map((product) => (
            <div key={product.id} className={styles.gridItem}>
              <img
                src={product.productImage}
                alt={product.productName}
              />
              <div className={styles.productInfo}>
                <p>{product.productName}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;