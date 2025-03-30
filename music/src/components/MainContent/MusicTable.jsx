import React from "react";
import { useCallback } from "react";
import useIsMobileOrTablet from "../CheckScreen";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const MusicTable = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  // ✅ Correct Backend Initialization
  const getBackend = useCallback(
    (manager) => {
      return isMobileOrTablet
        ? new TouchBackend({ enableMouseEvents: true, manager })
        : HTML5Backend;
    },
    [isMobileOrTablet]
  );

  return (
    <>
      {/* <DndProvider backend={getBackend}>
        music


      </DndProvider> */}
    </>
  );
};

export default MusicTable;
