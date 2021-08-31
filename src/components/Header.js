import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { motion } from "framer-motion"

import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["primary.500", "primary.500", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon w={6} h={6} color="primary.500" /> : <HamburgerIcon w={8} h={8} color="primary.500"/>}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to} style={{ textDecoration: 'none' }}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};


const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      // bg="linear-gradient(rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2))"
      rounded="md"
      // whileTap={{ scale: 0.9 }}
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      width="94%"
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "center", "center"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about ">About Me</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/LEDbar">
          <Button
            size="lg"
            rounded="md"
            _hover={{
              bgGradient: "linear-gradient(to-tr, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
            }}
            color={["primary.500", "primary.500", "primary.500", "primary.500"]}
            bg={["white", "white", "white", "white"]}
          >
            LED Bar
          </Button>
        </MenuItem>
        <MenuItem isLast>
          <ColorModeSwitcher justifySelf="flex-end" />
        </MenuItem>

      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="primary.800"
      // bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;