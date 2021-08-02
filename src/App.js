import React from 'react';
import Form from './Form';
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from '@chakra-ui/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div style={{
        backgroundColor: '#eeeeee',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Form />
      </div>
    </ChakraProvider>
  );
}

export default App;
