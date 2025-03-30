import React, { useEffect, useState } from "react";
import RepeatIcon from "../../assets/icons/repeat.svg";
import RewindIcon from "../../assets/icons/rewind.svg";
import PlayIcon from "../../assets/icons/play.svg";
import PauseIcon from "../../assets/icons/pause.svg";
import FastForwardIcon from "../../assets/icons/fastforward.svg";
import RandomIcon from "../../assets/icons/random.svg";
import { Howl } from "howler";
import useIsMobileOrTablet from "../CheckScreen";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

function PlayerControls({
  currentSong,
  howlInstance,
  setHowlInstance,
  setCurrentSong,
  songs,
}) {
  const isMobileOrTablet = useIsMobileOrTablet();

  const [playedTime, setPlayedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (howlInstance) {
      setTotalTime(howlInstance.duration());

      const updateTime = () => {
        if (howlInstance.playing()) {
          setPlayedTime(howlInstance.seek());
        }
        requestAnimationFrame(updateTime);
      };

      howlInstance.on("play", () => {
        setIsPlaying(true);
        updateTime();
      });
      howlInstance.on("pause", () => setIsPlaying(false));
      howlInstance.on("end", () => {
        setPlayedTime(0);
        playNext();
      });

      return () => {
        howlInstance.off("play", updateTime);
        howlInstance.off("pause", () => setIsPlaying(false));
      };
    }
  }, [howlInstance]);

  const playOrPause = () => {
    if (howlInstance) {
      if (howlInstance.playing()) {
        howlInstance.pause();
      } else {
        howlInstance.play();
      }
    }
  };

  const playNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    playSong(songs[nextIndex]);
  };

  const playPrev = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    playSong(songs[prevIndex]);
  };

  const playSong = (song) => {
    if (howlInstance) {
      howlInstance.stop();
    }
    const newHowl = new Howl({
      src: [song.songSrc],
      html5: true,
      onload: () => {
        setTotalTime(newHowl.duration());
        setPlayedTime(0);
      },
    });
    newHowl.play();
    setHowlInstance(newHowl);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * totalTime;
    if (howlInstance) {
      howlInstance.seek(seekTime);
      setPlayedTime(seekTime);
    }
  };

  if (!currentSong) return null;

  return (
    <>
      {isMobileOrTablet ? (
        <div className="fixed w-full h-auto left-0 p-1 bottom-0 bg-red-900 shadow-lg rounded-t-lg overflow-hidden ">
          <div className="flex items-center p-2 text-white">
            <img
              src={currentSong.posterSrc}
              className="w-16 h-16 rounded-md mr-2"
              alt={currentSong.title}
            />
            <div className="flex-1">
              <h2 className="font-bold">{currentSong.title}</h2>
              <p>{currentSong.album}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={playPrev}>
                <img src={RewindIcon} alt="Previous" className="w-8 h-8" />
              </button>
              <button onClick={playOrPause}>
                <img
                  src={isPlaying ? PauseIcon : PlayIcon}
                  alt="Play/Pause"
                  className="w-10 h-10"
                />
              </button>
              <button onClick={playNext}>
                <img src={FastForwardIcon} alt="Next" className="w-8 h-8" />
              </button>
            </div>
          </div>

          <div
            className="w-full bg-gray-400 h-1 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="bg-[#F6F6F6] h-1"
              style={{ width: `${(playedTime / totalTime) * 100}%` }}
            />
          </div>

          <div className="flex justify-between px-4 py-1 text-white text-xs">
            <span>{formatTime(playedTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-2 right-6 w-56 bg-red-900 shadow-lg rounded-lg overflow-hidden">
          <div className="text-center py-2 text-white font-semibold">
            Now Playing
          </div>

          <div className="p-2">
            <img
              src={currentSong.posterSrc}
              alt="Now Playing"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>

          <div className="p-2">
            <div className="text-center mb-2">
              <h4 className="text-sm font-bold text-white">
                {currentSong.title}
              </h4>
              <p className="text-xs text-gray-300">{currentSong.album}</p>
            </div>

            <div
              className="flex items-center mb-2"
              onClick={handleSeek}
              style={{ cursor: "pointer" }}
            >
              <span className="text-xs text-[#F6F6F6]">
                {formatTime(playedTime)}
              </span>

              <div className="relative m-auto flex-grow mx-2">
                <div className="bg-gray-300 h-1 m-auto rounded-full">
                  <div
                    className="bg-[#F6F6F6] h-full rounded-full"
                    style={{ width: `${(playedTime / totalTime) * 100}%` }}
                  ></div>
                  <div
                    className="absolute  bg-[#F6F6F6] w-3 h-3 -top-1 rounded-full"
                    style={{
                      left: `${(playedTime / totalTime) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>

              <span className="text-xs text-[#F6F6F6]">
                {formatTime(totalTime)}
              </span>
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
                onClick={playPrev}
              />
              <img
                src={
                  howlInstance && howlInstance.playing() ? PauseIcon : PlayIcon
                }
                className="control-icon w-6 h-6"
                alt="Play/Pause"
                onClick={playOrPause}
              />
              <img
                src={FastForwardIcon}
                className="control-icon w-5 h-5"
                alt="Fast Forward"
                onClick={playNext}
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
}

export default PlayerControls;
