import { Box, Text } from '@chakra-ui/react'

export default function SingleLineCV({ year, title, duration, current }) {
  return (
    <Box display="flex" flexDirection="row" width="auto" justifyContent="space-between">
      <Box display="flex" flex={2}>
        <Text
          mr={1}
          fontStyle="helvetica"
          justifyContent="flex-start"
        >
          {year}
        </Text>
        <Text mr={10}>{current}</Text>
      </Box>
      <Box flex={4} justifyItems="center" >
        <Text>{title}</Text>
      </Box>
      <Box flex={2}>
        <Text>{duration}</Text>
      </Box>
    </Box>
  )
}
