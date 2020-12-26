import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner/index";
import Process from "./components/process";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main className="flex-shrink-0">
          <Banner />
          <Process />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
