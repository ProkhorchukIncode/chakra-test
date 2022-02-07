import { Box, Container, Flex, Image } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

import logo from "../../logo.svg"

const Header = () => {
    const {colorMode} = useColorMode()
    return (
        <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}>
            <Container maxW='container.lg'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Image
                        src={logo}
                        alt='Logo'
                        objectFit={'cover'}
                        boxSize={5}
                    />
                    <ColorModeSwitcher/>
                </Flex>
            </Container>
        </Box>
    )
}
export default Header