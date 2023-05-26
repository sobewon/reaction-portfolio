// import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import About from "../about";
import Contact from "../contact";
import Resume from "../resume";
import Project from "../project";

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