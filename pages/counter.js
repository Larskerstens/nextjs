import Head from "next/head";
import {
  Button,
  Flex,
  Heading,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export default function counter() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(256);
  const increment = () => setCounter(counter + 1);
  const deccrement = () => setCounter(counter - 1);
  const multiple = () => setCounterTwo(counterTwo * 2);
  const divide = () => setCounterTwo(counterTwo / 2);
  const inputChange = (e) => setCounter(parseInt(e.target.value, 10));
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb="1em"
      >
        <Heading pt="1em">Counter</Heading>
        <p>Een counter oefening om te oefenen</p>
        <Heading p="1em">Counterstatus: {counter}</Heading>
        <InputGroup w="500px">
          <InputLeftAddon border="none">
            <Button onClick={increment}>+</Button>
            <Button onClick={deccrement}>-</Button>
          </InputLeftAddon>
          <Input
            type="number"
            value={counter}
            onChange={inputChange}
            border="none"
            bgColor="rgba(165,51,51,.5)"
          />
        </InputGroup>
      </Flex>
      <hr />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb="1em"
      >
        <Heading p="1em">Counterstatus: {counterTwo}</Heading>
        <InputGroup w="500px">
          <InputLeftAddon border="none">
            <Button onClick={multiple}>x2</Button>
            <Button onClick={divide}>%2</Button>
          </InputLeftAddon>
          <Input
            type="number"
            value={counterTwo}
            onChange={inputChange}
            border="none"
            bgColor="rgba(165,51,51,.5)"
          />
        </InputGroup>
      </Flex>
      <hr />
    </>
  );
}
