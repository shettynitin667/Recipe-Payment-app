import React, { Component } from "react";
import axios from "axios";
import pizza from "./pizza.png";
import coffee from "./coffee.png";
import "./App.css";
import GridContainer from "./gridContainer";
import Navbar from "./navbar";
import CreditCard from "./creditForm";
import BadRequest from "./badRequest";
import recipeData from "./../database.json";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    recipes: [],
  };

  getData = async () => {
    let data = recipeData;
    this.setState((state) => ({ recipes: data }));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const renderList = this.state.recipes.map((e) => <li>{e.name}</li>);
    return (
      <div>
        <div className="backImage">
          <img className="pizza" alt="pizza" src={pizza} />
          <img className="coffee" alt="coffee" src={coffee} />
        </div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <GridContainer recipes={this.state.recipes} />
            </Route>
            <Route path="/credit/:id" exact component={CreditCard} />
            <Route path="*" component={BadRequest} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
