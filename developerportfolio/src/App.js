import './App.css';
import HeadersComponent from './Components/HeaderComponents/HeadersComponent';
import AboutUs from './Components/BodyComponents/AboutMe'
import Portfolio from "./Components/BodyComponents/Portfolio";
import Contact from "./Components/BodyComponents/Contact"

function App() {
  return (
    <div>
    {/* // <h1>App works well</h1> */}
    <HeadersComponent/>
    <AboutUs/>
    <Portfolio />
    <Contact/>
    </div>
  );
}

export default App;
