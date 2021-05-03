import { Flex } from "@chakra-ui/react";
function footer() {
  return (
    <>
      <footer>
        <Flex
          justifyContent="center"
          alignItems="center"
          h="50px"
          bgColor="#a53333"
          color="#1f2832"
        >
          Copyright © Kerstens Lars
        </Flex>
      </footer>
    </>
  );
}

export default footer;
