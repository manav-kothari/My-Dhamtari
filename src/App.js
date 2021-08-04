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
import ComputerShopsScreen from "./screens/ContactScreen/ComputerShopsScreen";
import EducationScreen from "./screens/ContactScreen/EducationScreen";
import DairyScreen from "./screens/ContactScreen/DairyScreen";
import FireBrigadeScreen from "./screens/ContactScreen/FireBrigadeScreen";
import TelephoneScreen from "./screens/ContactScreen/TelephoneScreen";
import PostOfficeScreen from "./screens/ContactScreen/PostOfficeScreen";
import ComputerRepairScreen from "./screens/ContactScreen/ComputerRepairScreen";
import carOnHireScreen from "./screens/ContactScreen/CarOnHire";
import ElectronicShopsScreen from "./screens/ContactScreen/ElectronicShopsScreen";
import FitnessScreen from "./screens/ContactScreen/Fitness";
import BloodBankScreen from "./screens/ContactScreen/BloodBank";
import FurnitureScreen from "./screens/ContactScreen/FurnitureScreen";
import ComputerTrainingScreen from "./screens/ContactScreen/ComputerTrainingScreen";
import MedicineScreen from "./screens/ContactScreen/MedicineScreen";
import MobileShopsScreen from "./screens/ContactScreen/MobileShopsScreen";
import PathologyScreen from "./screens/ContactScreen/PathologyLab";
import PhotographersScreen from "./screens/ContactScreen/PhotographersScreen";
import BhawanScreen from "./screens/ContactScreen/BhawanScreen";
import YogaScreen from "./screens/ContactScreen/YogaScreen";
import IcecreamScreen from "./screens/ContactScreen/IcecreamScreen";
import WebDeveloperScreen from "./screens/ContactScreen/WebDeveloperScreen";

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
          path="/contact/firebrigade"
          exact
          component={FireBrigadeScreen}
        />
        <Route path="/contact/telephone" exact component={TelephoneScreen} />
        <Route
          path="/contact/electricity"
          exact
          component={ElectricityScreen}
        />
        <Route path="/contact/postoffice" exact component={PostOfficeScreen} />
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
          path="/contact/vastushastra"
          exact
          component={CivilEngineerScreen}
        />
        <Route path="/contact/bloodbank" exact component={BloodBankScreen} />
        <Route path="/contact/dairy" exact component={DairyScreen} />
        <Route
          path="/contact/civilengineer"
          exact
          component={CivilEngineerScreen}
        />
        <Route path="/contact/caronhire" exact component={carOnHireScreen} />
        <Route
          path="/contact/computershops"
          exact
          component={ComputerShopsScreen}
        />
        <Route
          path="/contact/computerrepair"
          exact
          component={ComputerRepairScreen}
        />
        <Route
          path="/contact/computertraining"
          exact
          component={ComputerTrainingScreen}
        />
        <Route
          path="/contact/electronicshops"
          exact
          component={ElectronicShopsScreen}
        />
        <Route
          path="/contact/mobileshops"
          exact
          component={MobileShopsScreen}
        />
        <Route
          path="/contact/photographers"
          exact
          component={PhotographersScreen}
        />
        <Route path="/contact/bhawan" exact component={BhawanScreen} />
        <Route path="/contact/yoga" exact component={YogaScreen} />
        <Route path="/contact/travel" exact component={TravelScreen} />
        <Route path="/contact/pathology" exact component={PathologyScreen} />
        <Route path="/contact/medicine" exact component={MedicineScreen} />
        <Route path="/contact/furniture" exact component={FurnitureScreen} />
        <Route path="/contact/education" exact component={EducationScreen} />
        <Route path="/contact/fitness" exact component={FitnessScreen} />
        <Route path="/contact/icecream" exact component={IcecreamScreen} />
        <Route path="/contact/webdev" exact component={WebDeveloperScreen} />
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
