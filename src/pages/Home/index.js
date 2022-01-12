import { Center, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Center h="100vh" bg="black">
      <Text
        fontSize={"40px"}
        fontWeight={"bold"}
        shadow="md"
        borderRadius={"10px"}
        bg={"#319795"}
        color="white"
        p="20px"
      >
        React App with Chakra UI Config
      </Text>
    </Center>
  );
}
