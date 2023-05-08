import { HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import LoveText from "./LoveText";

const Navigation = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Heading as="h1" size="md">
        Open AI - Simple API
      </Heading>
      <LoveText />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navigation;
