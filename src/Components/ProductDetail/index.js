import React, { Component } from "react";
import styles from "./product.module.css";
const ProductDetail = ({ recipe }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={recipe.image} />
      <p className={styles.name}>{recipe.name}</p>
      <p className={styles.description}>{recipe.description}</p>
      <p className={styles.key}>Total Amount:</p>
      <p className={styles.value}>
        {recipe.price} $ <i className="fas fa-tag"></i>
      </p>
    </div>
  );
};

export default ProductDetail;
