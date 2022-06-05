import { Box, Text, Image, Container, Flex } from '@chakra-ui/react'
import { workList } from '../data/data'
import { motion } from 'framer-motion'

export default function description({ work }) {

  return (
    <motion.div initial={{opacity: 0.2}} animate={{opacity:1}}>
    <Flex display="flex" flexDirection="column" ml={10} mr={10}  height="auto" >
    <Box alignSelf="center" w={['xs', "sm", "5xl"]} mt={20}>
        <Image m={20} w={["xs", "lg", "4xl"]}  src={work.pictures.preview} alt="preview" />
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
      <Box display="flex" flexDirection="column" alignSelf="center" w={["xs", "lg" , "5xl"]} mb={20}>
        <Image loading="lazy" src={work.pictures.generalcut} alt="generalcut" />
        {work.pictures.cut !== undefined && 
        <>
        <Image loading="lazy" src={work.pictures.cut[1]} alt="cut1" />
        <Image loading="lazy" src={work.pictures.cut[2]} alt="cut2" />
        <Image loading="lazy" src={work.pictures.cut[3]} alt="cut3" />
        </>
        }
        {work.pictures.plan ? <Image loading="lazy" src={work.pictures.plan} alt="plan" /> : null}
        <Image mx={20} loading="lazy" src={work.pictures.mass} alt="mass" />
        <Box display="flex" alignItems={["center", "null", "null"]} justifyContent={["null", "space-around","space-between"]}  flexDirection={["column", "column", "row"]} w={["xs","md", "xl"]} mt={10} px={10}>
        <Image mr={3} w={["xs", "xs", "l"]} h={["xs",'xs',"xs"]} loading="lazy" src={work.pictures.access} alt="access" />
        <Image mr={3} w={["xs", "xs", "l"]} h={["xs",'xs',"xs"]} loading="lazy" src={work.pictures.batis} alt="batis" />
        <Image mr={3} w={["xs", "xs", "l"]} h={["xs",'xs',"xs"]} loading="lazy" src={work.pictures.parcours} alt="parcours" />
        </Box>
        </Box>
    </Flex>
    </motion.div>
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
