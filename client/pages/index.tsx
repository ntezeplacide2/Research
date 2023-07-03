
import type { NextPage } from "next";
import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";



const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20} >
        <Flex flexDirection={"row"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"xl"}> SMART WEB PAYMENT SYSTEM</Heading>
              <Heading fontSize={"5xl"}>
              Pay  with SMART SYSYEM any time anywhere.
              </Heading>
              <Text fontSize={"xl"} fontStyle={"italic"} fontFamily={"fantasy"} color={"GrayText"} backgroundColor={"#fff1b1"}> SMART SYSTEM is blockchain based system that allows people<br></br> to send noney via crypto currency based system without intermediaries parties.<br></br> Mwibanga rikomeye cyane </Text>
              <Link href={"/transfer"}>
                <Button w={"80%"}>Trasfer money </Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <MediaRenderer
              src={HERO_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
      <Flex justifyContent="center" alignItems="center">
        <MediaRenderer src={FEATURES_IMAGE_URL} height="100%" width="80%" borderRadius="md" boxShadow="lg" />
      </Flex>
      <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={4} align="center">
        <FeatureCard
          step="A"
          title="Compose the token"
          description="Check the tokens well to make secure transaction"
          bg="blue.500"
          color="#f0a36b"
          p={4}
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
          _active={{ bg: 'blue.700', transform: 'scale(0.95)' }}
          transition="all 0.3s ease-in-out"
        />
        <FeatureCard
          step="B"
          title="Who to Send To"
          description="Make sure to enter verified address because the money cannot come back"
          bg="green.500"
          color="#f0a36b"
          p={4}
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: 'green.600', transform: 'scale(1.05)' }}
          _active={{ bg: 'green.700', transform: 'scale(0.95)' }}
          transition="all 0.3s ease-in-out"
        />
        <FeatureCard
          step="C"
          title="Description"
          description="Write a message here like a description"
          bg="purple.500"
          color="#f0a36b"
          p={4}
          borderRadius="md"
          boxShadow="md"
          _hover={{ bg: 'purple.600', transform: 'scale(1.05)' }}
          _active={{ bg: 'purple.700', transform: 'scale(0.95)' }}
          transition="all 0.3s ease-in-out"
        />
      </Stack>
    </Flex>
    </SimpleGrid>
     
    </Container>
  );
};

export default Home;
