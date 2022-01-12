import Routes from "routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "global/theme";
import "global/style/style.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
