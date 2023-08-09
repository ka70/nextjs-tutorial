import { Box, Image, VStack } from '../components/ChakraUi';

export default function Home() {
  const imageSrc = '.vercel.svg'; // ここに定数としてsrcを設定

  return (
    <VStack h={200} justify='center' bg='gray.100'>
      <Box maxW='80%' display='flex' justifyContent='center' alignItems='center' bg='gray.100'>
        <Image mt='20px' w='98%' maxW='350' src={imageSrc} alt='Sua lista está vazia :(' />
      </Box>
    </VStack>
  )
}
