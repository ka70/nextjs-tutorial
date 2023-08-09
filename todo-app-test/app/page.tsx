import { Box, Image, VStack } from '../common/components'

export default function Home() {
  return (
    <VStack h={200} justify='center' bg='gray.100'>
      <Box maxW='80%' display='flex' justifyContent='center' alignItems='center' bg='gray.100'>
        <Image mt='20px' w='98%' maxW='350' src='./vercel.svg' alt='Sua lista está vazia :(' />
      </Box>
    </VStack>

  )
}
