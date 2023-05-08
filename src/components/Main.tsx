import { useState } from "react";
import { Flex, Spinner, Text, Button, Textarea } from "@chakra-ui/react";
import apiHandler from "../services/api-client";

const Main = () => {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleInputChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  const onButtonPressed = () => {
    setShowSpinner(true);
    apiHandler(value).then((str: string) => {
      setAnswer(str);
      setShowSpinner(false);
    });
  };
  return (
    <Flex p="10px" flexDirection="column">
      <Text>Matni ke mikhayd tarjome she ro vared konid (Be farsi)</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        size="md"
        placeholder="After typing press Submit Question"
      />
      <Button onClick={onButtonPressed}>Submit Question</Button>
      {showSpinner && <Spinner />}
      {answer.length > 0 && <Textarea value={answer}></Textarea>}
    </Flex>
  );
};

export default Main;
