import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { CALIM_TOKEN_CONTRACT_ADDRESS, CLAIM_TOKEN_IMAGE } from "../const/addresses";

export default function ClaimPage() {
    const {
        contract
    } = useContract(CALIM_TOKEN_CONTRACT_ADDRESS, "token-drop");

    const {
        data: contractMetadata
    } = useContractMetadata(contract);

    const claimAmount = 10;
    const toast = useToast();

    return (
        <Container maxW={"1440px"} h={"80vh"} >
            <SimpleGrid columns={2} spacing={10} h={"100%"}>
                <Flex>
                    <MediaRenderer
                        src={CLAIM_TOKEN_IMAGE}
                        height="100%"
                        width="100%"
                    />
                </Flex>
                <Flex flexDirection={"column"} justifyContent={"center"}>
                    <Stack spacing={4}>
                        <Heading fontSize={"5xl"}>Mine your {contractMetadata?.symbol} Here</Heading>
                        <Text fontSize={"xl"}>Mine your  your FREE {contractMetadata?.symbol} coins . Just pay for the gas fee to mine your ${contractMetadata?.symbol}. You can use this Coins to test and transfer to aother account befofe use .</Text>
                        <Text fontWeight={"bold"}>Mine {claimAmount} ${contractMetadata?.symbol} Tokens</Text>
                        <Box>
                            <Web3Button
                                contractAddress={CALIM_TOKEN_CONTRACT_ADDRESS}
                                action={(contract) => contract.erc20.claim(claimAmount)}
                                onSuccess={() => toast({
                                    title: 'Mine Successful',
                                    description: "You have successfully got your tokens!",
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })}
                            >Mine your Coins</Web3Button>
                        </Box>
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    )
}