import { Container, Fade, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();

    return (
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href={"/"}>
                    <Text fontWeight={"black"} >SMART WEB SYSTEM</Text>
                </Link>
                {address && (
                    <Flex flexDirection={"row"}>
                        <Link href={"/transfer"}>
                            <Text mr={8} fontSize={"26"} fontFamily={"Arial, sans-serif"} fontWeight={"frames"} fontStyle={"Fade"} bgColor={"transparent"} color={"#0d0f2f"} backgroundColor="blue.100"
      
      border="none"
      padding="0.75rem 1rem"
      cursor="pointer"
      transition="background-color 0.3s ease"
      boxShadow="md"
      textDecoration="none"
      transform="scale(1)"
      _hover={{
        backgroundColor: 'blue.600',
      }}
      _active={{
        backgroundColor: 'blue.700',
        transform: 'scale(0.95)',
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'outline',
      }}
    >Transfer Your Coins</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mr={8} fontSize={"26"} fontFamily={"Arial, sans-serif"} fontWeight={"frames"} fontStyle={"Fade"} bgColor={"transparent"} color={"#0d0f2f"}backgroundColor="blue.100"
      border="none"
      padding="0.75rem 1rem"
      cursor="pointer"
      transition="background-color 0.3s ease"
      boxShadow="md"
      textDecoration="none"
      transform="scale(1)"
      _hover={{
        backgroundColor: 'blue.600',
      }}
      _active={{
        backgroundColor: 'blue.700',
        transform: 'scale(0.95)',
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'outline',
      }}
    >Mine your Coins</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text fontSize={"26"} fontFamily={"Arial, sans-serif"} fontWeight={"frames"} fontStyle={"Fade"} bgColor={"transparent"} color={"#0d0f2f"}backgroundColor="blue.100"
      
      border="none"
      padding="0.75rem 1rem"
      cursor="pointer"
      transition="background-color 0.3s ease"
      boxShadow="md"
      textDecoration="none"
      transform="scale(1)"
      _hover={{
        backgroundColor: 'blue.600',
      }}
      _active={{
        backgroundColor: 'blue.700',
        transform: 'scale(0.95)',
      }}
      _focus={{
        outline: 'none',
        boxShadow: 'outline',
      }}
    >My Account</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet/>
            </Flex>
        </Container>
    )
}