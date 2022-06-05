import { Box, Container, Link, Text } from "@chakra-ui/react";
import WorkPreview from "./components/WorkPreview"
import {workList} from './data/data'


export default function Works({works}) {

    return (
        <Box
            pt={40}
            display="flex"
            justifyContent="center"
        >
            <Box display={"flex"} w={["ml","3xl", "7xl"]} flexWrap="wrap" flexDirection={["column", "column", "row"]} alignItems="center" justifyContent="center">
           {works.map((work, index) => {
                return(
                <div key={index}>
                    <Link href={`/description/${encodeURIComponent(work.id)}`}>
                    <WorkPreview work={work}/>
                </Link>
                </div>
                )
            })} 
            </Box>
         </Box>
    )
}

export const getStaticProps = async() => {
    return {
      props : {
        works : workList
      }
    }
  }
