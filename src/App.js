// import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomTheme from "./utils/theme";

import Landing from "./pages/Landing";

export default function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
