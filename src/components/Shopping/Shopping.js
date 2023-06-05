import React, { useState } from 'react';
import { Products } from '../Products';
import { Items } from './Items';
import styles from './Shopping.module.css';

export const Shopping = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const totalPages = Math.ceil(Products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        const topProducts = document.getElementById('shopping');
        if (topProducts) {
            window.scrollTo({ top: topProducts.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div id="shopping" className={styles.container}>
            <h1>Buy your CupCake</h1>
            <div className={styles.products}>
                {Products.slice(startIndex, endIndex).map((product, index) => (
                    <Items key={index} data={product} />
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageClick(i + 1)}
                        className={currentPage === i + 1 ? styles.active : 'active'}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};