import React from 'react';
import {
  Box,
  VStack,
  Grid,
  useColorModeValue
} from '@chakra-ui/react';
// import { Logo } from 'Logo';
import Header from "./components/Header";




function App() {

  const bg = useColorModeValue("primary_lighter.500", "primary.800")
  return ( 
      <Box textAlign="center" fontSize="xl" bg={bg}>
        <Header />
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            {/* <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link> */}
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;
