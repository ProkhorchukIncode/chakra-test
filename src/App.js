import React from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';

import Header from './Components/Header';
import CardList from './Components/CardList';

const theme = extendTheme({
  colors: {
    shadow: {
      100: '#ffffff',
      200: '#f5f5f5',
      300: '#e3e3e3',
      400: '#b5b5b5',
      500: '#949494',
      600: '#7a7979',
      700: '#636363',
    }
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Header/>
        <CardList/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
