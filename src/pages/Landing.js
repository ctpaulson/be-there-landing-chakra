import React from "react";

import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  Image
} from "@chakra-ui/react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import Feature from "../components/ui/Feature";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Nobody should have to miss your wedding day."
        subtitle="Make your wedding events memorable for everyone you invite&mdash;whether or not they can be there in person."
        ctaText="Sign Up"
        ctaLink="/signup"
      />
      <Box p="10" textAlign="center" w={{ base: "90%", md: "60%" }}>
        <Heading as="h2" size="lg" fontFamily="asul">
          Don't let distance, scheduling conflicts, or health concerns ruin your
          wedding day.
        </Heading>
        <br />
        <Text fontSize="lg">
          Be There adds to your wedding experience by allowing those who cannot
          attend in person to experience your event virtually instead. Virtual
          guests will get an experience that feels almost like they are actually
          there.
        </Text>
        <Divider my="7" />
        <Heading as="h2" size="lg" fontFamily="asul" mb="3">
          How do we do it?
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing="10">
          <Feature
            name="line"
            title="Video Receiving Line"
            imgSrc="https://source.unsplash.com/collection/1127807"
            description="Your wedding party pre-records videos to invite and thank your guests. Your guests can respond with videos or messages of their own."
          />
          <Feature
            name="guestbook"
            title="Virtual Guestbook"
            imgSrc="https://source.unsplash.com/collection/1127807"
            description="Photos and messages can be added and viewed by any of your guests. Think of it like a photo booth at your event&mdash;but your virtual guests are included too."
          />
          <Feature
            name="gallery"
            title="Event Gallery"
            imgSrc="https://source.unsplash.com/collection/1127807"
            description="In-person guests upload photos and videos of your event. You and your guests (in-person or virtual) can access them later."
          />
        </SimpleGrid>
      </Box>
      <Box bg="black" h="200px" w="100%" textAlign="center" p="10">
        <Text color="white">Make sure everyone you love can Be There.</Text>
        <Image src="/logo-white-vertical.png" h="100px"></Image>
      </Box>
    </LandingLayout>
  );
}
