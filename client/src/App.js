import React, { Component} from "react";
import SearchAppBar from "./components/Navbar";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts"




class App extends Component {

  render(){   

    return (
      <div>
        <SearchAppBar />
        <Header />
        <Posts />
        <StickyFooter />
      </div>

    );
  };
};

export default App;
