import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import PricingScreen from "./pages/Pricing/PricingScreen";
import Product from "./pages/Product/Product";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BakeryShopScreen from "./screens/BakeryShopScreen";
// import CategoriesScreen from "./screens/CategoriesScreen";
import ClothingShopScreen from "./screens/ClothingShopScreen";
import ElectronicShopScreen from "./screens/ElectronicShopScreen";

import GiftShopScreen from "./screens/GiftShopScreen";
import EventsScreen from "./screens/EventsScreen";

import NewsScreen from "./screens/NewsScreen/NewsScreen";
import ShopComingSoonScreen from "./screens/ShopComingSoonScreen";
import ShopScreen from "./screens/ShopScreen/ShopScreen";
import ContactScreen from "./screens/ContactScreen/ContactScreen";
import PlacesScreen from "./screens/PlacesScreen/PlacesScreen";
import HospitalScreen from "./screens/ContactScreen/HospitalScreen";
import RepairScreen from "./screens/ContactScreen/RepairScreen";
import PersonalCareScreen from "./screens/ContactScreen/PersonalCareScreen";
import TravelScreen from "./screens/ContactScreen/TravelScreen";
import AutomobileScreen from "./screens/ContactScreen/AutomobileScreen";
import FlowerScreen from "./screens/ContactScreen/FlowerScreen";
import WeddingScreen from "./screens/ContactScreen/WeddingScreen";
import RestaurantContactScreen from "./screens/ContactScreen/RestaurantContactScreen";
import AccountScreen from "./screens/ContactScreen/AccountScreen";
import WaterScreen from "./screens/ContactScreen/WaterScreen";
import DecorationScreen from "./screens/ContactScreen/DecorationScreen";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={ShopScreen} />
        <Route path="/shops" exact component={ShopScreen} />
        <Route path="/news" exact component={NewsScreen} />
        <Route path="/events" exact component={EventsScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        <Route path="/contact/hospitals" exact component={HospitalScreen} />
        <Route
          path="/contact/restaurant"
          exact
          component={RestaurantContactScreen}
        />

        <Route path="/contact/repair" exact component={RepairScreen} />
        <Route
          path="/contact/personalcare"
          exact
          component={PersonalCareScreen}
        />
        <Route path="/contact/travel" exact component={TravelScreen} />
        <Route path="/contact/automobile" exact component={AutomobileScreen} />
        <Route path="/contact/flower" exact component={FlowerScreen} />
        <Route path="/contact/wedding" exact component={WeddingScreen} />
        <Route path="/contact/accounting" exact component={AccountScreen} />
        <Route path="/contact/waterandice" exact component={WaterScreen} />
        <Route path="/contact/decoration" exact component={DecorationScreen} />
        <Route path="/places" exact component={PlacesScreen} />
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
