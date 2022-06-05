import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

export default function WorkPreview({work}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius='lg' overflow={"hidden"}  m={10} p={5} display='flex' flexDirection="column" alignItems="center">
        { work.pictures ? <Image src={work.pictures.preview} alt='preview' /> :null}
        <Box>
        <Text fontStyle={"italic"}>{work.name} - {work.school} -{work.year}</Text>
        </Box>

    </Box>
  )
}
