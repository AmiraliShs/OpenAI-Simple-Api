import { Tooltip, HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

const LoveText = () => {
  return (
    <Tooltip label="By Amirali Sheykhsoltan and Armin Mokari" fontSize="md">
      <HStack>
        <Text>
          Built with <Icon as={AiFillHeart} color="red" /> for Tehran Sharq
        </Text>
      </HStack>
    </Tooltip>
  );
};

export default LoveText;
