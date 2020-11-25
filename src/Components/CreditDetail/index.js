import React, { Component } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styles from "./credit.module.css";
import { withRouter } from "react-router-dom";

class CreditDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    };
  }

  onSubmit = (data) => {
    data.preventDefault();
    this.props.onPopup();
  };

  render() {
    const { price, id } = this.props;
    const { name, number, expiry, cvc, focus } = this.state;
    return (
      <div className={styles.container}>
        <Cards
          className={styles.card}
          number={number}
          name={name}
          xpiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form onSubmit={this.onSubmit} className={styles.form}>
          <input
            maxLength="16"
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => this.setState({ number: e.target.value })}
            onFocus={(e) => this.setState({ focus: e.target.name })}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            onFocus={(e) => this.setState({ focus: e.target.name })}
            required
          />
          <div className={styles.single}>
            <input
              type="tel"
              name="expiry"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => this.setState({ expiry: e.target.value })}
              onFocus={(e) => this.setState({ focus: e.target.name })}
              maxLength="5"
              required
            />

            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => this.setState({ cvc: e.target.value })}
              onFocus={(e) => this.setState({ focus: e.target.name })}
              maxLength="3"
              required
            />
          </div>

          <button className={styles.pay} type="submit">
            {`Pay ${price} $`}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreditDetail);
