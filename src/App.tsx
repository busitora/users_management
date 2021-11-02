import React from "react";
import theme from "./theme/theme";
import { ChakraProvider, Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <p>テキスト</p>
    </ChakraProvider>
  );
}

export default App;
