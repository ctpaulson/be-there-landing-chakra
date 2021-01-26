import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Box
      backgroundImage="url('Hero-4.png')"
      background-position="center center"
      backgroundSize="cover"
      w="100%"
    >
      <Flex
        align="center"
        justify="center"
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="65vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align="center" m="6">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            // color="gray.900"
            textAlign="center"
            fontFamily="asul"
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="lg"
            color="gray.900"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign="center"
            fontFamily="asul"
            mb="30"
          >
            {subtitle}
          </Heading>
          <Link to={ctaLink}>
            <Button
              className="red"
              bg="white"
              border="1.5px black solid"
              textTransform="uppercase"
              letterSpacing="3px"
              borderRadius="4px"
              size="lg"
              fontWeight="normal"
              boxShadow="1px 1px 5px #888888"
              _hover={{ boxShadow: "0px 0px", background: "#eeeeee" }}
            >
              {ctaText}
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};
