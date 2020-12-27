import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import Layout from "./components/layout";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
