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
  useColorMode,
  IconButton,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

import { DarkModeSwitch } from './DarkSwitchMode'
import { AiOutlineHome } from 'react-icons/ai'
import React from 'react'
import { useRouter } from 'next/router'
import { DarkModeSwitchBurger } from './DarkSwitchModeBurger'

export default function Navbar({
  to,
  activeProps,
  children,
  _hover,
  ...props
}) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { asPath } = useRouter()

  return (
    <>
      <Box
        h={50}
        display={['flex', 'flex', 'none']}
        backgroundColor={isDark ? 'blackAlpha.700' : 'whiteAlpha.900'}
        pos="fixed"
        justifyContent="space-between"
        alignItems="center"
        zIndex={99}
        w={'100%'}
        pr={5}
        pt={2}
      >
        <Text ml={10}>Marie Coulombon Casanova</Text>
        <Menu placement="top">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            aria-label="Menu"
          />
          <MenuList>
            <NextLink active={asPath === '/'} href="/" passHref>
              <MenuItem>
                <Icon as={AiOutlineHome} boxSize={8} />
              </MenuItem>
            </NextLink>

            <NextLink active={asPath === '/works'} href="/works" passHref>
              <MenuItem>
                <Text fontWeight={'bold'}>Travaux</Text>
              </MenuItem>
            </NextLink>
            <NextLink active={asPath === '/about'} href="/about" passHref>
              <MenuItem>
                <Text fontWeight={'bold'}>À Propos</Text>
              </MenuItem>
            </NextLink>
            <MenuItem>
              <DarkModeSwitchBurger />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Flex
        w="100%"
        pos="fixed"
        display={['none', 'none', 'flex']}
        alignItems="center"
        zIndex={99}
        background={isDark ? 'blackAlpha.800' : 'whiteAlpha.800'}
      >
        <Flex>
          <NextLink active={asPath === '/'} href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              mx={5}
              my={5}
              w={{ base: '20%' }}
            >
              <Icon as={AiOutlineHome} boxSize={6} />
            </Button>
          </NextLink>

          {/* <NextLink active={asPath === '/home'} href="/home" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Accueil"
              mx={5}
              my={5}
              w={{ base: '20%' }}
            >
              Accueil
            </Button>
          </NextLink> */}

          <NextLink active={asPath === '/works'} href="/works" passHref>
            <Button
              variant="ghost"
              aria-label="Travaux"
              mx={5}
              my={5}
              w={{ base: '20%' }}
            >
              Travaux
            </Button>
          </NextLink>

          <NextLink active={asPath === '/about'} href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="A Propos"
              mx={5}
              my={5}
              w={{ base: '20%' }}
            >
              À Propos
            </Button>
          </NextLink>
        </Flex>
        <DarkModeSwitch />
      </Flex>
    </>
  )
}
