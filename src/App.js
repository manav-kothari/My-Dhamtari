import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import PricingScreen from "./pages/Pricing/PricingScreen";
import Product from "./pages/Product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BakeryShopScreen from "./screens/BakeryShopScreen";
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
import HotelScreen from "./screens/ContactScreen/HotelScreen";
import FooterMain from "./components/Footer Main/FooterMain";
import ParksScreen from "./screens/PlacesScreen/ParksScreen";
import DamsScreens from "./screens/PlacesScreen/DamsScreens";
import RestaurantsScreens from "./screens/PlacesScreen/RestaurantsScreen";
import WaterfallsScreen from "./screens/PlacesScreen/WaterfallsScreen";
import WildllifeSanturyScreen from "./screens/PlacesScreen/WildllifeSanturyScreen";
import NatureFriendlyScreens from "./screens/PlacesScreen/NatureFriendlyScreens";
import AdventureScreen from "./screens/PlacesScreen/AdventureScreen";
import ContactComingSoon from "./screens/ContactScreen/ContactComingSoon";
import HelplineScreen from "./screens/ContactScreen/HelplineScreen";
import PoliceScreen from "./screens/ContactScreen/PoliceScreen";
import ElectricityScreen from "./screens/ContactScreen/ElectricityScreen";
import CaterersScreen from "./screens/ContactScreen/CaterersScreen";
import CivilEngineerScreen from "./screens/ContactScreen/CivilEngineerScreen";
import ComputerSellandRepairScreen from "./screens/ContactScreen/ComputerSellandRepairScreen";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={ContactScreen} />
        <Route path="/shops" exact component={ShopScreen} />
        <Route path="/news" exact component={NewsScreen} />
        <Route path="/events" exact component={EventsScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        <Route path="/contact/helpline" exact component={HelplineScreen} />
        <Route path="/contact/police" exact component={PoliceScreen} />
        <Route
          path="/contact/electricity"
          exact
          component={ElectricityScreen}
        />
        <Route path="/contact/comingsoon" exact component={ContactComingSoon} />
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
        <Route path="/contact/hotel" exact component={HotelScreen} />
        <Route path="/contact/caterer" exact component={CaterersScreen} />
        <Route
          path="/contact/civilengineer"
          exact
          component={CivilEngineerScreen}
        />
        <Route
          path="/contact/computersellandrepair"
          exact
          component={ComputerSellandRepairScreen}
        />
        <Route path="/places" exact component={PlacesScreen} />
        <Route path="/places/parks" exact component={ParksScreen} />
        <Route path="/places/dams" exact component={DamsScreens} />
        <Route
          path="/places/restaurants"
          exact
          component={RestaurantsScreens}
        />
        <Route path="/places/waterfalls" exact component={WaterfallsScreen} />
        <Route
          path="/places/wildlife"
          exact
          component={WildllifeSanturyScreen}
        />
        <Route path="/places/nature" exact component={NatureFriendlyScreens} />
        <Route path="/places/adventure" exact component={AdventureScreen} />
        <Route path="/clothingshops" exact component={ClothingShopScreen} />
        <Route path="/electronicshops" exact component={ElectronicShopScreen} />
        <Route path="/giftshops" exact component={GiftShopScreen} />
        <Route path="/bakeryaccshops" exact component={BakeryShopScreen} />
        <Route path="/shopcomingsoon" exact component={ShopComingSoonScreen} />
        <Route path="/aboutshop" exact component={Home} />
        <Route path="/pricing" component={PricingScreen} />
        <Route path="/product" component={Product} />
      </Switch>
      <FooterMain />
    </Router>
  );
}

export default App;
