import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import PricingScreen from "./pages/Pricing/PricingScreen";
import Product from "./pages/Product/Product";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BakeryShopScreen from "./screens/BakeryShopScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import ClothingShopScreen from "./screens/ClothingShopScreen";
import ElectronicShopScreen from "./screens/ElectronicShopScreen";

import GiftShopScreen from "./screens/GiftShopScreen";
import EventsScreen from "./screens/EventsScreen";

import NewsScreen from "./screens/NewsScreen";
import ShopComingSoonScreen from "./screens/ShopComingSoonScreen";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={CategoriesScreen} />
        <Route path="/shops" exact component={CategoriesScreen} />
        <Route path="/news" exact component={NewsScreen} />
        <Route path="/events" exact component={EventsScreen} />
        <Route path="/clothingshops" exact component={ClothingShopScreen} />
        <Route path="/electronicshops" exact component={ElectronicShopScreen} />
        <Route path="/giftshops" exact component={GiftShopScreen} />
        <Route path="/bakeryaccshops" exact component={BakeryShopScreen} />
        <Route path="/shopcomingsoon" exact component={ShopComingSoonScreen} />
        <Route path="/aboutshop" exact component={Home} />
        <Route path="/pricing" component={PricingScreen} />
        <Route path="/product" component={Product} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
