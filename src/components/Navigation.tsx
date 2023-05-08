import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import LoveText from "./LoveText";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Logo />
      <LoveText />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navigation;
