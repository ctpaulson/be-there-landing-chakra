import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Image,
  Link as ChakraLink,
  useBreakpointValue
} from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <ChakraLink
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </ChakraLink>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const imgSrc = useBreakpointValue({
    base: "/logo-black-simple.png",
    md: "/logo-black-horizontal.png"
  });
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["white"]}
      boxShadow="lg"
      zIndex="3"
      minH="85px"
      h={{ base: "15vw", md: "12vw", lg: "9vw", xl: "6vw" }}
      position="fixed"
      {...props}
    >
      <Flex align="center" minW="250px" maxH="40px">
        <Link to="/">
          <Image src={imgSrc} alt="Be There logo" maxH="30px" />
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          bg="white"
        >
          <MenuItem to="/features">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/faq">FAQ </MenuItem>
          <Link to="/signup" isLast>
            <Button
              bg="white"
              color="black"
              border="1.5px black solid"
              textTransform="uppercase"
              letterSpacing="2px"
              borderRadius="4px"
              size="sm"
              fontWeight="normal"
              boxShadow="1px 1px 3px #888888"
              _hover={{ boxShadow: "0px 0px", background: "#eeeeee" }}
            >
              Sign Up
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
