import React from "react";
import AddtoCard from "./AddtoCard";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddtoCard />
    </div>
  );
};

export default ProductCard;
