import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <MainContent />
      </div>
      </BrowserRouter>
  );
}
}

export default App;
