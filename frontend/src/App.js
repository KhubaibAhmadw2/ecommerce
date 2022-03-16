import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSinUp from './component/User/LoginSignUp';
import UserOptions from './component/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
function App() {


  const {isAuthenticated,user}=useSelector(state=state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  })

  return (
    <Router>
      <Header/>
      {isAuthenticated &&<UserOptions user={user}/>}
      <Route  exact path="/" component={Home}/>
      <Route  exact path="/Product/:id" component={ProductDetails}/>
      <Route  exact path="/Products" component={Products}/>
      <Route  exact path="/Search" component={Search}/>
      <Route  exact path="/Login" component={LoginSinUp}/>


      <Footer/>
    </Router>
  


  );
}

export default App;
