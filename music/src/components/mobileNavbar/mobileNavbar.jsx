import React, { useState } from "react";
import { FaMusic } from "react-icons/fa";
import homeIcon from "../../assets/icons/home.svg";
import trendingIcon from "../../assets/icons/trending.svg";
import discoverIcon from "../../assets/icons/discover.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import musicIcon from "../../assets/icons/music.svg";

const MobileNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed z-10 block  w-full py-2 px-4 h-20  bg-gradient-to-b from-red-900 poppins-thin">
      <div className="flex  border-black items-center gap-10 justify-between">
        <div className="flex gap-5 text-white py-2 items-center ">
          <button className="text-2xl" onClick={toggleDrawer}>
            &#9776;
          </button>
          <div className="flex items-center mb-5"></div>
        </div>

        <div className="flex items-center">
          <button>
            <h1 className="ml-3 text-xl font-bold poppins-thin">
              <span className="text-[#FF5656]"> Dream</span>Music
            </h1>
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="top-0 left-0 h-auto fixed inset-0 w-full bg-white bg-opacity-75 z-50  space-y-3  overflow-y-scroll  scrollbar poppins-thin"
        >
          <div className=" border-black h-screen ">
            <div className="h-screen px-6 py-4 bg-black shadow-md text-[#9A9AA9] p-2">
              <div className="px-4  flex justify-between border-t-red-600 py-4 mb-2">
                <FaMusic className="text-[1.5rem] text-[#FF5656]" />
                <div className="flex gap-2">
                  <button>
                    <h1 className="ml-3 text-xl font-bold poppins-thin">
                      <span className="text-[#FF5656]"> Dream</span>Music
                    </h1>
                  </button>
                  <button className="text-white" onClick={toggleDrawer}>
                    &#10006;
                  </button>
                </div>
              </div>

              <div className=" flex flex-col justify-center px-1 py-4 border-red-600">
                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img src={homeIcon} className="w-6 h-6 mr-2" alt="Home" />
                  </span>

                  <span className="text-sm font-medium">Home </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img
                      src={trendingIcon}
                      className="w-6 h-6 mr-2"
                      alt="Trends"
                    />
                  </span>

                  <span className="text-sm font-medium">Trends </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img
                      src={discoverIcon}
                      className="w-6 h-6 mr-2"
                      alt="Discover"
                    />
                  </span>

                  <span className="text-sm font-medium">Library </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img
                      src={musicIcon}
                      className="w-6 h-6 mr-2"
                      alt="Discover"
                    />
                  </span>
                  <span className="text-sm font-medium">Calender </span>
                </div>

                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img
                      src={settingsIcon}
                      className="w-6 h-6 mr-2"
                      alt="Settings"
                    />
                  </span>

                  <span className="text-sm font-medium">Settings </span>
                </div>
                <div className="flex items-center gap-2 py-2 mb-6">
                  <span className="material-icons mr-2">
                    <img
                      src={logoutIcon}
                      className="w-6 h-6 mr-2"
                      alt="Log Out"
                    />
                  </span>
                  <span className="text-sm font-medium">Log Out </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
