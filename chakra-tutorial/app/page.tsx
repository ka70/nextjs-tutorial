'use client'

import { Box, Button, Flex, Heading, Input, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Login />
      {/* その他のHomeコンポーネント内の要素 */}
    </Box>
  )
}

function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackGround} padding={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">Log in</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>

        <Box>
          <Text fontSize='1xl'>(6xl) In love with React & Next</Text>
          <Heading>heading</Heading>
          <Button>button</Button>
        </Box>
      </Flex>
    </Flex>
  );
}
