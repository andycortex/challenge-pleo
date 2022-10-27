import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/core";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavoritesDrawer from "./favorites";
import { Heart } from "react-feather";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
      
    </div>
  );
}

function NavBar() {
  const [showFavorites, toogleFavorites] = useState(false)
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="6"
        bg="gray.800"
        color="white"
      >
        <Text
          fontFamily="mono"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="lg"
        >
          ¡SPACE·R0CKETS!
        </Text>
        <Heart onClick={() => toogleFavorites(true)}/>
      </Flex>
      <FavoritesDrawer onClose={() => toogleFavorites(false)} isOpen={showFavorites}/>
    </>
  );
}
