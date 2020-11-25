import React from "react";
import styles from "./bad.module.css";
import badRequest from "./badRequest.svg";
const BadRequest = () => {
  return (
    <div className={styles.container}>
      <p>Page Not Found</p>
      <img src={badRequest} />
    </div>
  );
};

export default BadRequest;
