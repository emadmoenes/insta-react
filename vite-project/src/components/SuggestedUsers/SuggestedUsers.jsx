import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="John" followers="1234" avatar="/john.png" />
      <SuggestedUser name="Messi" followers="5000000" avatar="/messi.png" />
      <SuggestedUser name="Ronaldo" followers="7000000" avatar="/Ronaldo.png" />

      <Box fontSize={12} color={"gray.500"} mt={8}>
        @2024 Built by {"Emad moanes"}
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
