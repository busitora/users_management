import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Button } from "@chakra-ui/react";
// ここから自分で定義した内部実装
import theme from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
