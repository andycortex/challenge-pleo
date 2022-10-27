import React,{useMemo} from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Heading,
} from "@chakra-ui/core";
import { useFavorites } from "../context/favorite";
import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";

function FavoritesDrawer({ isOpen, onClose }) {
  const [{ launches, pads }] = useFavorites();

  const favoritesLaunches = useMemo(() => Array.from(launches.values()), [launches])
  console.log(favoritesLaunches)
  const favoritesPads = useMemo(() => Array.from(pads.values()), [pads])
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>
          <DrawerBody>
            <Stack>
              {favoritesLaunches.length  && <Heading
                color="gray.900"
                display="inline"
                fontSize={["md", "lg"]}
              >
                Launch
              </Heading>}
              {favoritesLaunches.map((launch) => (
                <LaunchItem launch={launch} key={launch.flight_number} />
              ))}
              {favoritesPads.length  &&<Heading
                color="gray.900"
                display="inline"
                fontSize={["md", "lg"]}
              >
                Launch Pads
              </Heading>}
              {favoritesPads.map((pad) => (
                <LaunchPadItem launchPad={pad} key={pad.site_id} />
              ))}
              {!favoritesLaunches.length && !favoritesPads.length &&(
                <Heading fontWeight="normal" fontSize="lg" color="gray.400">No favorites yet</Heading>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FavoritesDrawer;
