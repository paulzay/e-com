import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shopage/ShopPage";
import Header from "./components/header/Header";
import SignupSigninPage from "./pages/signup-signin/signup-signin";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignupSigninPage} />
      </Switch>
    </div>
  );
}
export default App;
