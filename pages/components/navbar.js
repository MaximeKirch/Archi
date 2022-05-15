import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Link,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Switch,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'
import { DarkModeSwitch } from './DarkSwitchMode'

export default function Navbar() {
  return (
    // <Menu>
    //   <MenuButton rightIcon={<HamburgerIcon />}>
    //     Actions
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem>Download</MenuItem>
    //     <MenuItem>Create a Copy</MenuItem>
    //     <MenuItem>Mark as Draft</MenuItem>
    //     <MenuItem>Delete</MenuItem>
    //     <MenuItem>Attend a Workshop</MenuItem>
    //   </MenuList>
    // </Menu>
    <Flex w="100%" pos="fixed" top="1rem" display="flex" alignItems="center">
        <Flex>
      <NextLink href="/" passHref>
        <Button as="a" variant="ghost" aria-label="Home" mx={5} my={5} w={{base: "20%" }}>
          Home
        </Button>
      </NextLink>

      <NextLink href="/home" passHref>
        <Button  as="a" variant="ghost" aria-label="Accueil" mx={5} my={5} w={{base: "20%" }}>
          Accueil
        </Button>
      </NextLink>

      <NextLink href="/works" passHref>
        <Button  variant='ghost' aria-label="Travaux" mx={5} my={5} w={{base: "20%" }}>
            Travaux
        </Button>
      </NextLink>

      <NextLink href="/about" passHref>
        <Button  as="a" variant="ghost" aria-label="A Propos" mx={5} my={5} w={{base: "20%" }}>
            À Propos
        </Button>
      </NextLink>
      </Flex>
     <DarkModeSwitch/>

    </Flex>
  )
}
