import { useColorMode, Switch, Flex, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
    const {colorMode,  toggleColorMode} = useColorMode()
    const isDark = colorMode === "dark"
    return (
        <Flex>
        <Switch
            pos="fixed"
            top= "2rem"
            right='2rem'
            color='green'
            isChecked={isDark}
            onChange={toggleColorMode}
        />
        </Flex>
    )
}