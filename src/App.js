import Header from "./components/Header/header";
import Offers from "./components/Offers/offers";
import Discover from "./components/Discover/discover";
import Destinations from "./components/Destinations/destinations";
import Customers from "./components/Customers/customers";
import Banner from "./components/Banner/banner";
import Footer from "./components/Footer/footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Offers/>
      <Discover/>
      <Destinations/>
      <Customers/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
