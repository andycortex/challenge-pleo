import React,{ createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [launches, setLauches] = useState(() => new Map());
  const [pads, setPads] = useState(() => new Map());

  function handleAddLaunch(launch) {
    const draft = structuredClone(launches)
    draft.set(launch.flight_number,launch)
    setLauches(draft)
  }
  function handleAddPad(pad) {
    setPads(pads => pads.concat(pad));
  }
  function handleDeleteLaunch(id) {}
  function handleDeletePad(id) {}
  const state = {
    launches,
    pads,
  };
  const actions = {
    addLaunch: handleAddLaunch,
    addPad: handleAddPad,
    removeLaunch: handleDeleteLaunch,
    removePad: handleDeletePad,
  };

  return (
    <FavoriteContext.Provider value={{ state, actions }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export function useFavorites() {
  const { state, actions } = useContext(FavoriteContext);
  return [state, actions];
}
export { FavoriteContext as default, FavoriteProvider as Provider };
