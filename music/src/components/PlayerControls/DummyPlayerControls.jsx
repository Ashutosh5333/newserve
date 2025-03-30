import React from "react";
import useIsMobileOrTablet from "../CheckScreen";

import RepeatIcon from "../../assets/icons/repeat.svg";
import RewindIcon from "../../assets/icons/rewind.svg";
import PlayIcon from "../../assets/icons/play.svg";
import PauseIcon from "../../assets/icons/pause.svg";
import FastForwardIcon from "../../assets/icons/fastforward.svg";
import RandomIcon from "../../assets/icons/random.svg";

import Poster from "../../assets/music/musicimage.png";

const DummyPlayerControls = () => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <>
      {isMobileOrTablet ? (
        <div className="fixed w-full h-auto left-0 p-1 bottom-0 bg-red-900 shadow-lg rounded-t-lg overflow-hidden ">
          <div className="flex items-center p-2 text-white">
            <img src={Poster} className="w-16 h-16 rounded-md mr-2" alt="" />
            <div className="flex-1">
              <h2 className="font-bold"> No song selected</h2>
              <p>Please select a song.</p>
            </div>
            <div className="flex space-x-2">
              <button>
                <img src={RewindIcon} alt="Previous" className="w-8 h-8" />
              </button>
              <button>
                <img src={PlayIcon} alt="Play/Pause" className="w-10 h-10" />
              </button>
              <button>
                <img src={FastForwardIcon} alt="Next" className="w-8 h-8" />
              </button>
            </div>
          </div>
          <div className="w-full bg-[#F6F6F6] h-1 cursor-pointer" />
          <div className="flex justify-between px-4 py-1 text-white text-xs">
            <span>0:00</span>
            <span>0:00</span>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-2 right-6 w-56 bg-red-900 shadow-lg rounded-lg overflow-hidden">
          <div className="text-center py-2 text-white font-semibold">
            Now Playing
          </div>

          <div className="p-2">
            <img
              src={Poster}
              alt="Now Playing"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>

          <div className="p-2">
            <div className="text-center mb-2">
              <h4 className="text-sm font-bold text-white">No song selected</h4>
              <p className="text-xs text-gray-300">Please select a song.</p>
            </div>

            <div
              className="flex items-center mb-2"
              style={{ cursor: "pointer" }}
            >
              <span className="text-xs text-[#F6F6F6]">0:00</span>

              <div className="relative m-auto flex-grow mx-2">
                <div className="bg-gray-300 h-1 m-auto rounded-full">
                  <div className="bg-[#F6F6F6] h-full rounded-full"></div>
                  <div className="absolute  bg-[#F6F6F6] w-3 h-3 -top-1 rounded-full"></div>
                </div>
              </div>

              <span className="text-xs text-[#F6F6F6]">0:00</span>
            </div>

            <div className="flex justify-center space-x-3 mt-2">
              <img
                src={RepeatIcon}
                className="control-icon w-5 h-5"
                alt="Repeat"
              />
              <img
                src={RewindIcon}
                className="control-icon w-5 h-5"
                alt="Rewind"
              />
              <img
                src={PlayIcon}
                className="control-icon w-6 h-6"
                alt="Play/Pause"
              />
              <img
                src={FastForwardIcon}
                className="control-icon w-5 h-5"
                alt="Fast Forward"
              />
              <img
                src={RandomIcon}
                className="control-icon w-5 h-5"
                alt="Random"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DummyPlayerControls;
