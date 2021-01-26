import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Image,
  Link,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
      as={RouterLink}
      to={to}
      activeStyle={{ fontWeight: "bold" }}
    >
      {children}
    </Link>
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
      minH="95px"
      h={{ base: "15vw", md: "12vw", lg: "9vw", xl: "6vw" }}
      position="fixed"
      {...props}
    >
      <Flex align="center" minW="250px" maxH="40px">
        <Link to="/" as={RouterLink}>
          <Image src={imgSrc} alt="Be There logo" maxH="30px" />
        </Link>
      </Flex>

      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="ghost"
          size="lg"
          display={{ base: "block", md: "none" }}
        >
          Actions
        </MenuButton>
        <MenuList>
          <RouterLink to="/features">
            <MenuItem>Features</MenuItem>
          </RouterLink>
          <RouterLink to="/pricing">
            <MenuItem>Pricing</MenuItem>
          </RouterLink>
          <RouterLink to="/faq">
            <MenuItem>FAQ</MenuItem>
          </RouterLink>
          <MenuDivider />
          <RouterLink to="/signup">
            <MenuItem>Sign Up</MenuItem>
          </RouterLink>
        </MenuList>
      </Menu>

      <Box
        display={{ base: "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify="flex-end"
          direction="row"
          pt="0"
          bg="white"
        >
          <NavItem to="/features">Features </NavItem>
          <NavItem to="/pricing">Pricing </NavItem>
          <NavItem to="/faq">FAQ </NavItem>
          <RouterLink to="/signup" isLast>
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
          </RouterLink>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
