import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { Route, Switch, HashRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Education from "./pages/education.js";
import Contact from "./pages/contact.js";
import Projects from "./pages/projects.js";
import Header from "./components/header";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={chosenTheme}>
          <HashRouter>
            <div>
              <Header theme={chosenTheme} />
            </div>
            <Switch>
              <Route exact path="/">
                <Home theme={chosenTheme} />
              </Route>
              <Route exact path="/home">
                <Home theme={chosenTheme} />
              </Route>
              <Route exact path="/education">
                <Education theme={chosenTheme} />
              </Route>
              <Route exact path="/contact">
                <Contact theme={chosenTheme} />
              </Route>
              <Route exact path="/projects">
                <Projects theme={chosenTheme} />
              </Route>
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </div >
    );
  }
}