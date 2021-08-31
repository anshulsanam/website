import React from "react"
import { Box, Image } from "@chakra-ui/react"
import profilePic from '../assets/profile.jpg';


export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        borderRadius="full"
        boxSize="60px"
        src={profilePic}
        alt="Anshul Sanamvenkata"
      />
    </Box>
  )
}

