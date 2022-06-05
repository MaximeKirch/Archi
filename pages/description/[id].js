import { Box, Text, Image, Container, Flex } from '@chakra-ui/react'
import { workList } from '../data/data'

export default function description({ work }) {

  return (
    <Flex display="flex" flexDirection="column" ml={10} mr={10}  height="auto">
    <Box alignSelf="center" w={['xs', "md", "5xl"]} mt={20}>
        <Image  src={work.pictures.preview} alt="preview" />
      </Box>
      <Box w={["xs", "ml", "xl"]} pt={20} mb={5} display="flex">
        <Text fontWeight={'bold'}>{work.name}</Text>,
        <Text fontStyle="italic">{" "} {work.location}</Text>
      </Box>
      <Box mb={5}>
        <Text>
          {work.year} - {work.school} - {work.description}
        </Text>
      </Box>
      <Box mb={10}>
        <Text fontSize={14} lineHeight="1.8" fontWeight="light">
          {work.resume}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" alignSelf="center" w={["xs", "lg" , "5xl"]}>
        <Image loading="lazy" src={work.pictures.generalcut} alt="generalcut" />
        <Image loading="lazy" src={work.pictures.cut[1]} alt="cut1" />
        <Image loading="lazy" src={work.pictures.cut[2]} alt="cut2" />
        <Image loading="lazy" src={work.pictures.cut[3]} alt="cut3" />
        <Image loading="lazy" src={work.pictures.mass} alt="mass" />
        <Box display="flex" alignItems={["center", "null", "null"]} justifyContent={["null", "null","space-between"]}  flexDirection={["column", "column", "row"]} w={["xs","md", "xl"]}>
        <Image mr={5} ml={2} w={["xs", "s", "l"]} loading="lazy" src={work.pictures.access} alt="access" />
        <Image mr={5} w={["xs", "s", "l"]} loading="lazy" src={work.pictures.batis} alt="batis" />
        <Image w={["xs", "s", "l"]} loading="lazy" src={work.pictures.parcours} alt="parcours" />
        </Box>
        </Box>
    </Flex>
  )
}

export const getStaticProps = async ({ params }) => {
  const uniqueWork = workList.filter((w) => w.id.toString() === params.id)
  return {
    props: {
      work: workList[params.id - 1],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = workList.map((w) => ({
    params: { id: w.id.toString() },
  }))
  return { paths, fallback: false }
}
