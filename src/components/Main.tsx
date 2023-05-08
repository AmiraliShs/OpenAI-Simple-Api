import { Button, Textarea } from "@chakra-ui/react";
import apiHandler from "../services/api-client";

const Main = () => {
  const onButtonPressed = () => {
    apiHandler();
  };
  return (
    <>
      <Textarea size="md" placeholder="Here is a sample placeholder" />
      <Button onClick={onButtonPressed}>Submit Question</Button>
    </>
  );
};

export default Main;
