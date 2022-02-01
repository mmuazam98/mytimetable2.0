import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";

import ThemeModal from "./components/ThemeModal";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ThemeModal />
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Redirect to="/1" />
          </Route>
          <Route path="/:id" exact>
            <Timetable />
          </Route>
        </Switch>
      </AnimatePresence>
      <MobileNavigation />
      <Footer />
    </>
  );
};

export default App;
