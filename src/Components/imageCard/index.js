import React, { Component } from "react";
import styles from "./stylesheets/card.module.css";
import { Link } from "react-router-dom";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    let setSpan = this.imgRef.current.clientHeight + 20;
    this.setState((state) => ({ spans: Math.ceil(setSpan / 30) }));
  }

  render() {
    const { recipe } = this.props;
    return (
      <div
        className={styles.card}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <div className={styles.imgCont}>
          <img ref={this.imgRef} src={recipe.image} />
          {/* <div className={styles.filter}> </div> */}
        </div>

        <div className={styles.details}>
          <div className={styles.labels}>
            {recipe.label ? (
              <span className={styles.label}>{recipe.label}</span>
            ) : null}
            <span className={styles.category}>{recipe.category}</span>
          </div>

          <p className={styles.title}>{recipe.name}</p>
          <p className={styles.description}>{recipe.description}</p>
          <p className={styles.price}>
            <span className={styles.priceKey}>Price:</span>
            <span className={styles.priceValue}> {recipe.price}</span> ${" "}
            <i className="fas fa-tag"></i>
          </p>
          <Link
            className={styles.buy}
            to={{
              pathname: `/credit/${recipe.id}`,
              query: { recipe },
            }}
          >
            Buy Now <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default ImageCard;
