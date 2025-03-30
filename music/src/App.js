import React from "react";
import Header from "./components/MainContent/Header";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSide from "./components/RightSidebar/RightSide";
import "./App.css";
import MobileNavbar from "./components/mobileNavbar/mobileNavbar";
import useIsMobileOrTablet from "./components/CheckScreen";

function App() {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <div className="flex h-screen bg-gradient-to-b from-red-900 to-black text-white">
      {isMobileOrTablet ? (
        <>
          <MobileNavbar />
          <div className="p-4 m-auto mt-20 w-[80%]">
            <MainContent />
          </div>
        </>
      ) : (
        <>
          <div className="hidden sm:block w-[20%] h-full">
            <Sidebar />
          </div>
          <div className="flex w-[60%] flex-grow flex-col bg-gradient-to-b from-red-900 to-black text-white">
            <Header />
            <MainContent />
          </div>
          <div className="w-[20%] hidden sm:block h-full bg-gradient-to-b from-black to-red-900 text-white overflow-y-auto">
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
              <RightSide />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
