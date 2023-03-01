import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {Routes ,Route} from "react-router-dom"
import Header from "./component/Header";
import Card from "./component/Card";
import Cart from "./pages/Cart";



function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
