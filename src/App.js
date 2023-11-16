import Header from "./components/Header/header";
import Offers from "./components/Offers/offers";
import Discover from "./components/Discover/discover";
import Destinations from "./components/Destinations/destinations";
import Weblog from "./components/Weblog/weblog";
function App() {
  return (
    <div className="App">
      <Header/>
      <Offers/>
      <Discover/>
      <Destinations/>
      <Weblog/>
    </div>
  );
}

export default App;
