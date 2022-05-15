import { Box, Container, Text } from "@chakra-ui/react";
import SingleLineCV from "./SingleLineCV";

export default function Curriculum() {
    return (
        <Container display="flex" flexDirection="column" alignItems="center" height='60vh' mx={20}>
        <Box display="flex" flexDirection="column" justifyContent="center" w="100%" maxW="800px" borderRadius={15} py={10}>
          <Box p={20} display='flex' flexDirection="row" width="auto" justifyContent="center" borderBottomColor="#000" borderBottomWidth={1}>
            <Text fontWeight="bold" textTransform="uppercase"> curriculum vitae</Text>
          </Box>
  
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box mb={20} alignSelf="left" pl={20}>
            <Text fontWeight="bold"> Diplômes </Text>
            </Box>
          <Box px={10} mx={10} display="flex" flexDirection="column">
                <SingleLineCV year={"2022"} title="Master 1 architecture" duration="(ENSA Marseille)"/>
                <SingleLineCV year={"2022"} title="Licence d'Architecture" duration="(ENSA Marseille)"/>
                <SingleLineCV year={"2018"} title="Licence d'Arts Plastiques" duration="(Univ. de Corse)"/>
                <SingleLineCV year={"2014"} title="Baccalauréat série Scientifique" duration="(Lycée Fesch)"/>
          </Box>
  
          </Box>
  
          <Box mt={20} display="flex" flexDirection="column" justifyContent="center">
            <Box mb={20} pl={20} alignSelf="left">
              <Text fontWeight="bold"> Expériences professionnelles</Text>
            </Box>
            <Box px={10} mx={10} display="flex" flexDirection="column">
                      <SingleLineCV year={"2013-2021"} title="Emploi saisonnier - Gîte A Tiusella" duration="(2 mois)" />
                      <SingleLineCV year={"2021"} title="Stage en agence d'Architecture - Giusti-Versini" duration="(1 mois)" />
                      <SingleLineCV year={"2019"} title="Emploi saisonnier - Mairie de Corte" duration="(1 mois)" />
                      <SingleLineCV year={"2019"} title="Stage chantier - Antoine Silvestri" duration="(2 semaines)" />
                      <SingleLineCV year={"2018"} title="Stage en agence d'Architecture - ADP" duration="(2 semaines)" />
                      <SingleLineCV year={"2017"} title="Emploi saisonnier - Restaurant A Scudella" duration="(4 mois)" />
                      <SingleLineCV year={"2016"} title="Stage d'observation - Journal La Marseillaise" duration="(1 semaine)" />
                      <SingleLineCV year={"2011"} title="Stage d'observation - Clinique Clairval" duration="(1 semaine)" />
            </Box>
          </Box>
          <Box>
            <Box px={10} mt={20} ml={5}>
            <Text fontWeight="bold"> Langues</Text>
                  <Box display="flex" justifyContent="space-evenly" mt={5}>
                      <Text pl={5}> Italien (CLES B2)</Text>
                      <Text pr={5}> Anglais (niveau lycée)</Text>
                  </Box>
            </Box>
          </Box>
  
          <Box>
            <Box px={10} mt={10} mb={20} ml={5}>
            <Text fontWeight="bold"> Logiciels</Text>
                  <Box display="flex" mt={10}>
                  <Text pl={5}>Pack office, logiciels Mac, Autocad, Revit, Sketchup, Twinmotion, Suite Adobe</Text>
                  </Box>
            </Box>
          </Box>
        </Box>
  </Container>
    )
}