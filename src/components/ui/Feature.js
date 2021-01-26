import React from "react";

import { Heading, Text, Image, Button, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

export default function Feature({ name, title, imgSrc, description }) {
  return (
    <Link to={`/features#${name}`}>
      <Flex
        direction="column"
        align="center"
        borderWidth="1px"
        borderRadius="lg"
        p="7"
        boxShadow="lg"
        layoutPropNames
        h="100%"
        _hover={{ boxShadow: "2xl" }}
      >
        <Heading as="h3" size="md" fontFamily="asul" m="3">
          {title}
        </Heading>
        <Image
          boxSize="150px"
          objectFit="cover"
          src={imgSrc}
          borderRadius="full"
          alt="wedding feature photo"
          m="3"
        />
        <Text m="4">{description}</Text>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="gray"
          variant="ghost"
          fontWeight="normal"
          textTransform="uppercase"
          letterSpacing="3px"
          borderRadius="4px"
          mt="auto"
        >
          Learn more
        </Button>
      </Flex>
    </Link>
  );
}
