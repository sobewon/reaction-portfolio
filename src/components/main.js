// import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import Project from "../Project";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Main({setPage}) {
  return (
    <Router>
      <Header setPage={setPage}/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Project} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;