import Link from "next/link";
import { HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

function navigation() {
  return (
    <>
      <HStack bgColor="#a53333" justifyContent="space-evenly">
        <Menu>
          <Link href="/" passHref>
            <MenuButton
              my={3}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Home pagina">Home</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <MenuButton
            my={4}
            px={4}
            py={3}
            zIndex="4"
            borderBottom="2px solid transparent"
            transition="all 0.4s"
            color="#1f2832"
            _hover={{
              borderBottom: "2px solid #1f2832",
            }}
            _expanded={{
              bg: "#1f2832",
              color: "#F1F1F1",
              borderBottom: "2px solid #F1F1F1",
              borderRadius: "5px 5px 0 0",
            }}
          >
            Pokédex <ChevronDownIcon />
          </MenuButton>
          <MenuList
            border="none"
            bgColor="#a53333"
            color="#1f2832"
            paddingBottom="0"
            marginTop="-16px"
          >
            <Link href="/pokedex" passHref>
              <MenuItem
                _hover={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 5px 0 0",
                }}
                _focus={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 5px 0 0",
                }}
              >
                <a title="Ga naar de Pokedex pagina">Pokédex</a>
              </MenuItem>
            </Link>
            <Link href="/pokedex-shiny" passHref>
              <MenuItem
                _hover={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 0 5px 5px",
                }}
              >
                <a title="Ga naar de Shiny Pokédex pagina">Shiny Pokédex</a>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            my={4}
            px={4}
            py={3}
            zIndex="4"
            borderBottom="2px solid transparent"
            transition="all 0.4s"
            color="#1f2832"
            _hover={{
              borderBottom: "2px solid #1f2832",
            }}
            _expanded={{
              bg: "#1f2832",
              color: "#F1F1F1",
              borderBottom: "2px solid #F1F1F1",
              borderRadius: "5px 5px 0 0",
            }}
          >
            Cocktail <ChevronDownIcon />
          </MenuButton>
          <MenuList
            border="none"
            bgColor="#a53333"
            color="#1f2832"
            paddingBottom="0"
            marginTop="-16px"
          >
            <Link href="/cocktail-react" passHref>
              <MenuItem
                _hover={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 5px 0 0",
                }}
                _focus={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 5px 0 0",
                }}
              >
                <a title="Ga naar de Cocktail-react pagina">Cocktail-react</a>
              </MenuItem>
            </Link>
            <Link href="/cocktail" passHref>
              <MenuItem _hover={{ bg: "#1f2832", color: "#EDF2F7" }}>
                <a title="Ga naar de Cocktail pagina">Cocktail-ssr</a>
              </MenuItem>
            </Link>
            <Link href="/cocktail-nextjs-static">
              <MenuItem
                _hover={{
                  bg: "#1f2832",
                  color: "#EDF2F7",
                  borderRadius: "0 0 5px 5px",
                }}
              >
                <a title="Ga naar de Cocktail-nextjs-static pagina">
                  Cocktail-static
                </a>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <Link href="/movie" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Movie pagina">Movie</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/todo" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Todo pagina">Todo</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/counter" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Counter pagina">Counter</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/dog" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Dog pagina">Dog</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/aoe" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Age of Empires II pagina">
                Age of Empires II
              </a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/train" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Train pagina">Train</a>
            </MenuButton>
          </Link>
        </Menu>
        <Menu>
          <Link href="/places-db" passHref>
            <MenuButton
              my={4}
              px={4}
              py={3}
              zIndex="4"
              borderBottom="2px solid transparent"
              transition="all 0.4s"
              color="#1f2832"
              _hover={{
                borderBottom: "2px solid #1f2832",
              }}
            >
              <a title="Ga naar de Plaatsen pagina">Places</a>
            </MenuButton>
          </Link>
        </Menu>
      </HStack>
    </>
  );
}

export default navigation;
