import React from "react";
import ArtistInfo from "./ArtistInfo";
import "./MainContent.css";
import MusicTable from "./MusicTable";
import useIsMobileOrTablet from "../CheckScreen";
// import useIsMobileOrTablet from "../CheckScreen";

function MainContent() {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <>
      <main className=" ">
        {isMobileOrTablet ? null : (
          <>
            <ArtistInfo />
          </>
        )}
        <MusicTable />
      </main>
     
    </>
  );
}

export default MainContent;
