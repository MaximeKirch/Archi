import { useColorMode, Switch, Flex, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitchBurger = () => {
    const {colorMode,  toggleColorMode} = useColorMode()
    const isDark = colorMode === "dark"
    return (
        <Flex>
        <Switch
            color='green'
            isChecked={isDark}
            onChange={toggleColorMode}
        />
        </Flex>
    )
}