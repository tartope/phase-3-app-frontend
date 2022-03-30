import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "../NavBar";
import Tracker from "../Tracker";

function App() {

  return (
    <BrowserRouter >
        <NavBar />
            <Switch>
              <Route path= "/tracker" >
                <Tracker />
              </Route>
            
          </Switch>

    </BrowserRouter>
  );
}

export default App;
