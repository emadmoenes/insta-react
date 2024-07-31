import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      bgImage={"url('/bgImage.png')"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
    >
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left hand-side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/leftImage.png" h={650} w={600} alt="Phone img" />
          </Box>

          {/* Right hand-side */}
          <VStack
            spacing={4}
            align={"stretch"}
            bgColor={"whiteAlpha.700"}
            borderRadius={4}
            w={400}
          >
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
