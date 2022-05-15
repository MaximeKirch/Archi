import { useColorMode, Switch, Flex, Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'

export const DarkModeSwitch = () => {
    const {colorMode,  toggleColorMode} = useColorMode()
    const isDark = colorMode === "dark"
    return (
        <Flex>
        <Switch
            pos="fixed"
            top= "1rem"
            right='1rem'
            color='green'
            isChecked={isDark}
            onChange={toggleColorMode}
        />
        </Flex>
    )
}