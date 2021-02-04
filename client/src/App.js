import React from "react";
import SearchAppBar from "./components/Navbar";
import StickyFooter from "./components/Footer";
import PostForm from "./components/Forms";
import Header from "./components/Header"

function App() {
  return ( <div>
      <SearchAppBar />
      <Header />
      <PostForm />
      <StickyFooter />
  </div>

  )}

export default App;
