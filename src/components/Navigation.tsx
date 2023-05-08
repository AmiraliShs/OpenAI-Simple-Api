import { HStack, Heading, Text, ColorModeScript } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navigation = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading as="h1" size="md">
        Open AI - Simple API
      </Heading>
      <Text>Built with Love for Iauet</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navigation;
