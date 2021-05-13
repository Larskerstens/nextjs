import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { slugit } from "../helpers";

export default function aoe({
  civilizations,
  units,
  structures,
  technologies,
}) {
  return (
    <>
      <Head>
        <title>Age of Empires pagina</title>
      </Head>
      <Heading as='h1'>Age of Empires II</Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton _focus={{ outline: 0 }}>
            <Box flex='1'>Civilizations</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul>
              {civilizations.map((civil) => (
                <>
                  <Link href={"/aoe/" + civil.id + "/" + slugit(civil.name)}>
                    <a>
                      <li key={civil.id}>{civil.name}</li>
                    </a>
                  </Link>
                </>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton _focus={{ outline: 0 }}>
            <Box flex='1'>Units</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table size='sm' variant='striped'>
              <TableCaption>
                Table that show details of the units from AoE II
              </TableCaption>
              <Thead>
                <Tr>
                  <Th isNumeric>Id</Th>
                  <Th isNumeric>Name</Th>
                  <Th isNumeric>Age</Th>
                  <Th isNumeric>Cost</Th>
                  <Th isNumeric>Hp</Th>
                  <Th isNumeric>Attack</Th>
                  <Th isNumeric>Line of sight</Th>
                  <Th isNumeric>Range</Th>
                  <Th isNumeric>Accuracy</Th>
                </Tr>
              </Thead>
              <Tbody>
                {units.map((unit) => (
                  <>
                    <Tr>
                      <Td isNumeric>{unit.id}</Td>
                      <Td isNumeric>
                        <Link
                          href={"/aoe/" + unit.id + "/" + slugit(unit.name)}
                        >
                          <a>{unit.name}</a>
                        </Link>
                      </Td>
                      <Td isNumeric>{unit.age}</Td>
                      <Td isNumeric>
                        Wood: {unit.cost.Wood || 0}, Food: {unit.cost.Food || 0}
                        , Gold: {unit.cost.Gold || 0}
                      </Td>
                      <Td isNumeric>{unit.hit_points}</Td>
                      <Td isNumeric>{unit.attack}</Td>
                      <Td isNumeric>{unit.line_of_sight}</Td>
                      <Td isNumeric>{unit.range}</Td>
                      <Td isNumeric>{unit.accuracy}</Td>
                    </Tr>
                  </>
                ))}
              </Tbody>
              <Thead>
                <Tr>
                  <Th isNumeric>Id</Th>
                  <Th isNumeric>Name</Th>
                  <Th isNumeric>Age</Th>
                  <Th isNumeric>Cost</Th>
                  <Th isNumeric>Hp</Th>
                  <Th isNumeric>Attack</Th>
                  <Th isNumeric>Line of sight</Th>
                  <Th isNumeric>Range</Th>
                  <Th isNumeric>Accuracy</Th>
                </Tr>
              </Thead>
            </Table>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton _focus={{ outline: 0 }}>
            <Box flex='1'>structures</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul>
              {structures.map((structure) => (
                <>
                  <Link
                    href={"/aoe/" + structure.id + "/" + slugit(structure.name)}
                  >
                    <a>
                      <li key={structure.id}>{structure.name}</li>
                    </a>
                  </Link>
                </>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton _focus={{ outline: 0 }}>
            <Box flex='1'>technologies</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul>
              {technologies.map((technologie) => (
                <>
                  <Link
                    href={
                      "/aoe/" + technologie.id + "/" + slugit(technologie.name)
                    }
                  >
                    <a>
                      <li key={technologie.id}>{technologie.name}</li>
                    </a>
                  </Link>
                </>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export async function getStaticProps() {
  const responseCivil = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",
  );
  const dataCivil = await responseCivil.json();
  const civilizations = dataCivil.civilizations;

  const responseUnit = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/units",
  );
  const dataUnit = await responseUnit.json();
  const units = dataUnit.units;

  const responseStruct = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/structures",
  );
  const dataStruct = await responseStruct.json();
  const structures = dataStruct.structures;

  const responseTech = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/technologies",
  );
  const dataTech = await responseTech.json();
  const technologies = dataTech.technologies;

  return {
    props: {
      civilizations,
      units,
      structures,
      technologies,
    },
  };
}
