import React from "react";
import styles from "./item.module.css";

function Item({ foodItem, handelBuyButton, bought }) {
  return (
    <>
      <li
        className={`${styles["la-item"]} list-group-item ${
          bought ? "active" : null
        }`}
      >
        <span className={styles["la-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-danger`}
          onClick={handelBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;
