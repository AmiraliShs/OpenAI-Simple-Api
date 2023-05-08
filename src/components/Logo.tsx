import { Icon, Heading, HStack } from "@chakra-ui/react";
import { GiArtificialHive } from "react-icons/gi";

const Logo = () => {
  return (
    <HStack>
      <Icon as={GiArtificialHive} boxSize="10" />
      <Heading as="h1" size="md">
        Open AI - Simple API
      </Heading>
    </HStack>
  );
};

export default Logo;
