import { Box, Container, Link, Text } from "@chakra-ui/react";
import WorkPreview from "./components/WorkPreview"
import {workList} from './data/data'


export default function Works({works}) {

    return (
        <Box
            pt={40}
        >
            <Box display={"flex"} flexDirection={["column", "row"]} flexWrap="wrap" alignItems="center">
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
