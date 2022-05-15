import {
  Container,
  Box,
  Text,
  Link,
  Image,
  Icon,
  Button,
} from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'
import { FaIdCard } from 'react-icons/fa'

export default function PersonalInformation() {
  return (
    <Container
      height="100vh"
      pt={10}
      mb={40}
      mt={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" width="auto" alignItems="center">
        <Image
          src="/johndoe.jpg"
          alt="profile pic"
          w={200}
          h={200}
          borderRadius={100}
        />
      </Box>

      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        w="70vw"
        mt={20}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py={10}
          pt={20}
          width="100%"
          maxWidth="800px"
        >
          <Box display="flex" flexDirection="column" w="auto">
            <Text fontWeight="bold" fontSize="32" color="orange">
              {' '}
              À propos de moi
            </Text>
            <Box mt={20} display="flex" flexDirection="row">
              <Icon color="orange" mr={5} as={AiFillHome} />
              <Text> A Tiusella 20126 Evisa</Text>
            </Box>
            <Box mt={5} display="flex" flexDirection="row">
              <Icon color="orange" mr={5} as={AiFillHome}  />
              <Text>59 Rue Paul Codaccioni 13007 Marseille</Text>
            </Box>
            <Box mt={5} display="flex" flexDirection="row">
              <Icon color="orange" mr={5} as={PhoneIcon} />
              <Text> 06 52 05 55 86</Text>
            </Box>
            {/* <Box mt={5} display="flex" flexDirection="row">
              <Icon as={EmailIcon} mr={5} />
              <Link>
                <a href="mailto:marie.clcasa@gmail.com">
                  <Text fontWeight="bold"> marie.clcasa@gmail.com </Text>
                </a>
              </Link>
            </Box> */}
          </Box>
          <Text mt={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            urna vitae erat tristique congue. Aliquam porttitor auctor leo, ut
            convallis enim pretium eget. Donec eget lacinia odio. Donec gravida
            malesuada sollicitudin. Curabitur vitae massa vel arcu ullamcorper
            egestas vel ac mi. Vestibulum a est eget magna porttitor lobortis
            sit amet ut justo. Quisque blandit, ligula in pellentesque placerat,
            ex augue efficitur erat, sit amet posuere sapien sapien ac ante.
            Praesent egestas euismod porta. Morbi pretium augue vel nunc
            porttitor consequat. Maecenas luctus sapien ut elementum venenatis.
            Aenean quis commodo ligula, vel lacinia odio. Nulla facilisi. Aenean
            sit amet dolor vel justo pulvinar lacinia. Nulla placerat neque
            laoreet commodo blandit. Etiam dapibus sit amet nulla et iaculis.
            Proin tellus libero.{' '}
          </Text>
        </Box>
      </Container>
      <Box mt={50}  display="flex"  w="100%" justifyContent='space-around' flexWrap="wrap">
        <Link href="/">
          <Button
            variant="solid"
            size="sm"
            colorScheme="orange"
            mb={10}
          >
            <Icon as={FaIdCard} mr={5} />
            Télécharger mon CV
          </Button>
        </Link>
        <Button
          size="sm"
          variant="solid"
          mb={30}
          colorScheme="teal"
        >
          <Icon as={EmailIcon} mr={5} />
          Me contacter
        </Button>
      </Box>
    </Container>
  )
}
