import { Box, Container, Text, Image, Link, Button } from '@chakra-ui/react'
import vercel from '../public/vercel.svg'
import Curriculum from './components/Curriculum'
import Navbar from './components/navbar'
import PersonalInformation from './components/PersonalInformations'
import SingleLineCV from './components/SingleLineCV'


export default function About() {
  return (
    <>
    <Box display='flex' width='100%' justifyContent="center">
        <Navbar />
      </Box>
    <Box h="100vh"  m={40} borderRadius={15}>
     

      <PersonalInformation />
    </Box>

    </>
  )
}
