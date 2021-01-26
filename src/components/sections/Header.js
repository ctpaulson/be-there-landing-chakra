import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Image,
  Link as ChakraLink,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const CustomMenuItem = ({ children, isLast, to = "/", ...rest }) => {
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

const Header = (props) => {
  const imgSrc = useBreakpointValue({
    base: "/logo-black-simple.png",
    md: "/logo-black-horizontal.png"
  });

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

      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: "block", md: "none" }}
        >
          Actions
        </MenuButton>
        <MenuList>
          <Link to="/features">
            <MenuItem>Features</MenuItem>
          </Link>
          <Link to="/pricing">
            <MenuItem>Pricing</MenuItem>
          </Link>
          <Link to="/faq">
            <MenuItem>FAQ</MenuItem>
          </Link>
          <MenuDivider />
          <Link to="/signup">
            <MenuItem>Sign Up</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          bg="white"
        >
          <CustomMenuItem to="/features">Features </CustomMenuItem>
          <CustomMenuItem to="/pricing">Pricing </CustomMenuItem>
          <CustomMenuItem to="/faq">FAQ </CustomMenuItem>
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
