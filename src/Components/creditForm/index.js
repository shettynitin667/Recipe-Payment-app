import React, { useState } from "react";
import styles from "./credit.module.css";
import CreditDetail from "../CreditDetail";
import ProductDetail from "../ProductDetail";
import BadRequest from "../badRequest";

const CreditCard = (props) => {
  const [popup, setPopup] = useState(false);

  const onPopup = () => {
    setPopup(true);
  };

  if (props.location.query) {
    const { recipe } = props.location.query;
    return (
      <div className={styles.container}>
        {popup ? (
          <div className={styles.popup}>
            <p>
              Payment Successful <i class="far fa-check-circle"></i>
            </p>
            <a className={styles.ok} href="/">
              Continue Shopping
            </a>
          </div>
        ) : null}
        <div className={styles.details}>
          <ProductDetail recipe={recipe} />
        </div>
        <div className={styles.form}>
          <CreditDetail onPopup={onPopup} price={recipe.price} id={recipe.id} />
        </div>
      </div>
    );
  } else {
    return <BadRequest />;
  }
};

export default CreditCard;
