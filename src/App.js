import React from "react";
import { ReactComponent as Background } from "./images/illustration.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import menuItems from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/style.css";

function App() {
  return (
    <>
      <Router>
        <Background />
        <div className='container'>
          <Header />
          <Switch>
            {menuItems.map((item, index) => {
              return (
                <Route
                  exact
                  path={"/" + item.name.toLowerCase()}
                  key={parseInt(item.id, 10)}
                >
                  <Menu selected={parseInt(index, 10)} />
                </Route>
              );
            })}
            <Route path='*'>
              <Menu selected={0} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
