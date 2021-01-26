import React from "react";

import { Box, Text, Image, Stack, Divider, Spacer } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="black" w="100%" textAlign="center" p="10" color="white">
      <Stack
        direction={["column", "column", "row"]}
        spacing={["10", "10", "20"]}
        mb="10"
      >
        <Box>
          <Image src="/logo-white-vertical.png" h="100px"></Image>
        </Box>
        <Spacer />
        <Box>Links go here</Box>
        <Box>More links go here</Box>
      </Stack>
      <Divider />
      <Text mt="10">Make sure everyone you love can Be There.</Text>
      <Text color="gray.500">&copy; 2020, Be There Events</Text>
    </Box>
  );
}
