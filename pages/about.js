import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import PersonalInformation from './components/PersonalInformations'


export default function About() {
  return (
    <>
    <Box display='flex' width='100%' justifyContent="center">
      </Box>
      <motion.div initial={{opacity: 0.2}} animate={{opacity:1}}>
    <Box h="100vh"  m={40}>
      <PersonalInformation />
    </Box>
    </motion.div>
    </>
  )
}
