import React from "react";
import styles from "./gridContainer.module.css";
import ImageCard from "../imageCard";

function ImageGrid({ recipes }) {
  let renderImages = recipes.map((recipe) => (
    <ImageCard key={recipe.id} recipe={recipe} />
  ));
  return <div className={styles.container}>{renderImages}</div>;
}

export default ImageGrid;
