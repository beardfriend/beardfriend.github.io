import "../global/reset.css"

import { Box, Button, Text, useColorMode } from "@chakra-ui/react"
import React, { useEffect } from "react"

import Layout from "@Components/Layout"

const index = () => {
  return (
    <Layout>
      <Text fontSize={{ base: "40px", md: "55px" }}>test</Text>
    </Layout>
  )
}

export default index
