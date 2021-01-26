import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export default function LandingLayout(props) {
  return (
    <Flex direction="column" align="center" m="0 auto" {...props}>
      <Header />
      <Box h={{ base: "15vw", md: "12vw", lg: "9vw", xl: "6vw" }} minH="95px" />
      {props.children}
      <Footer />
    </Flex>
  );
}
