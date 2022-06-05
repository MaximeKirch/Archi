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
  useColorMode,
  LinkProps
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillHome } from 'react-icons/ai'
import { DarkModeSwitch } from './DarkSwitchMode'
import { AiOutlineHome} from 'react-icons/ai'

export default function Navbar() {
  const {colorMode} = useColorMode()
  const isDark = colorMode === "dark"
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
    <Flex w="100%" pos="fixed" display="flex" alignItems="center" zIndex={99} background={isDark ? 'blackAlpha.800' : 'whiteAlpha.800'}>
        <Flex>
      <NextLink activeClassName="is-active" href="/" passHref>
        <Button as="a" variant="ghost" aria-label="Home" mx={5} my={5} w={{base: "20%" }}>
          <Icon as={AiOutlineHome} boxSize={6} />
        </Button>
      </NextLink>

      <NextLink activeClassName="is-active" href="/home" passHref>
        <Button  as="a" variant="ghost" aria-label="Accueil" mx={5} my={5} w={{base: "20%" }}>
          Accueil
        </Button>
      </NextLink>

      <NextLink activeClassName="is-active" href="/works" passHref>
        <Button  variant='ghost' aria-label="Travaux" mx={5} my={5} w={{base: "20%" }}>
            Travaux
        </Button>
      </NextLink>

      <NextLink activeClassName="is-active" href="/about" passHref>
        <Button  as="a" variant="ghost" aria-label="A Propos" mx={5} my={5} w={{base: "20%" }}>
            À Propos
        </Button>
      </NextLink>
      </Flex>
     <DarkModeSwitch/>

    </Flex>
  )
}
