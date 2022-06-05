import React from 'react'
import { Box, Image, Text, useDisclosure } from '@chakra-ui/react'
import { Fade } from '@chakra-ui/react'
import { motion, transform } from 'framer-motion'

export default function WorkPreview({work}) {
  return (
    <motion.div
    animate={{scale: [0.8, 1]}}>
    <Box shadow='base' maxW="sm" h={"sm"} borderWidth="2px" borderRadius='lg' overflow={"hidden"}  m={10} p={5} display='flex' flexDirection="column" alignItems="center" justifyContent="space-between" _hover={{scale :"1.1"}}>
        { work.pictures ? <Image src={work.pictures.preview} h="md" alt='preview' /> :null}
        <Box>
        <Text fontStyle={"italic"} pt={10}>{work.name} - {work.school} -{work.year}</Text>
        </Box>

    </Box>
    </motion.div>
  )
}
