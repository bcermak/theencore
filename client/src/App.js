import React, { Component} from "react";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro"
import Posts from "./components/Posts"

class App extends Component {

  render(){   

    return (
      <div>
        <Header />
        <Intro />
        <Posts />
        <StickyFooter />
      </div>

    );
  };
};

export default App;
