import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import SiteHeader from "./Components/MainParts/Header";
import SiteFooter from "./Components/MainParts/Footer";
import SiteContent from "./Components/MainParts/Content";

function Application(){
 return (
     <Router>
        <SiteHeader/>
        <Switch> 
            <Route exact path="/" ></Route>
            <Route exact path="/studenci" component={()=> <div>Lista Studentów</div>}></Route>
            <Route exact path="/404" component={()=> <div>Nie znaleziono</div>}></Route>
            <Redirect to="/404" ></Redirect>
        </Switch>
        <SiteContent headerText="Text Propsa"/>
        <SiteFooter/>
     </Router>
 )
}

export default Application;