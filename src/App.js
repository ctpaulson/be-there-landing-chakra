// import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomTheme from "./utils/theme";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Router>
        <Switch>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
