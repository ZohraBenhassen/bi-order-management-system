import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar"
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Productlist from "./component/Productlist";
//import CartContainer from "./component/CartContainer"
import { Provider } from "react-redux";
import { store } from "./redux/store";
//import data from "./data/Products.json"


function App() {
  
  return (
    
      <Provider store={store}>

          <Navbar />
          <Container className="mb-4">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/ProductList" element={<Productlist />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Container>
          </Provider>
        
  );
}

export default App;
