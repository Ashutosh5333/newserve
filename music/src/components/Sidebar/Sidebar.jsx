import React from "react";
import homeIcon from "../../assets/icons/home.svg";
import trendingIcon from "../../assets/icons/trending.svg";
import discoverIcon from "../../assets/icons/discover.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import musicIcon from "../../assets/icons/music.svg";

function Sidebar() {
  return (
    <aside className="w-full h-full bg-[#0E0E0E] text-white p-5 box-border poppins-thin">
      <div className="flex items-center mb-5">
        <img src={musicIcon} className="w-12 h-12" alt="Music" />
        <h1 className="ml-3 text-xl font-bold poppins-thin">
          <span className="text-[#FF5656]"> Dream</span>Music
        </h1>
      </div>
      <nav className="flex-1">
        <p className="px-2 mb-2 text-sm">Menu</p>
        <ul className="list-none p-0 m-0">
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={homeIcon} className="w-6 h-6 mr-2" alt="Home" />
            <p> Home</p>
          </li>
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={trendingIcon} className="w-6 h-6 mr-2" alt="Trends" />
            <p> Trends </p>
          </li>
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={musicIcon} className="w-6 h-6 mr-2" alt="Discover" />
            <p> Library </p>
          </li>
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={discoverIcon} className="w-6 h-6 mr-2" alt="Discover" />
            <p> Discover </p>
          </li>
        </ul>
      </nav>
      <div className="fixed bottom-2">
        <p className="px-2 mb-2 text-sm">General</p>
        <ul className="list-none p-0 m-0">
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={settingsIcon} className="w-6 h-6 mr-2" alt="Settings" />
            <p> Settings </p>
          </li>
          <li className="flex items-center gap-4 rounded px-2 py-2 cursor-pointer hover:bg-gray-700">
            <img src={logoutIcon} className="w-6 h-6 mr-2" alt="Log Out" />
            <p> Log Out </p>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
