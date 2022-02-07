import { SimpleGrid, Stack, Container, Heading, Divider, Text, Button } from "@chakra-ui/react"

import posts from '../../posts.json'

const CardList = () => {
    return(
        <Container maxW={'container.lg'}>
            <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py={4}>
                {posts.map(({id, title, body}) => {
                    return <Stack key={id} spacing={2} p={4} _hover={{shadow: 'md'}} justifyContent='space-between'>
                        <Heading as='h4' isTruncated>{title}</Heading>
                        <Divider/>
                        <Text>{body}</Text>
                        <Button colorScheme={'shadow'}>More...</Button>
                    </Stack>
                })}
            </SimpleGrid>
        </Container>
    )
}
export default CardList