import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import musicIcon from "../../assets/icons/music.svg";
import useIsMobileOrTablet from "../CheckScreen";

const ItemType = "MUSIC_ITEM";

const SongRow = ({ song, index, moveItem, playSong, isPlaying }) => {
  const isMobileOrTablet = useIsMobileOrTablet();

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleRowClick = (e) => {
    e.stopPropagation();
    playSong(song);
  };

  return (
    <>
      <tr
        ref={ref}
        style={{
          opacity: isDragging ? 0.5 : 1,
          backgroundColor: isPlaying ? "#520000" : "transparent",
        }}
        onClick={handleRowClick}
        className="hover:bg-yellow-500 hover:text-white transition-colors duration-300"
      >
        <td className="p-2">
          {isPlaying ? (
            <img src={musicIcon} className="w-6 h-6" alt="Music Icon" />
          ) : (
            index + 1
          )}
        </td>
        {isMobileOrTablet ? (
          <>
            <td className="p-2">
              <img src={song.posterSrc} className="w-10 h-10" alt={index + 1} />
            </td>
            <td className="p-2">{song.title}</td>
            <td className="p-2">{song.time}</td>
          </>
        ) : (
          <>
            <td className="p-2">
              <img src={song.posterSrc} className="w-10 h-10" alt={index + 1} />
            </td>
            <td className="p-2">{song.title}</td>
            <td className="p-2">{song.playing}</td>
            <td className="p-2">{song.time}</td>
            {/* <td className="p-4 overflow-hidden text-ellipsis whitespace-nowrap w-32 inline-block align-middle">
              {song.album}
            </td> */}
            <td className="p-4 overflow-hidden text-ellipsis whitespace-nowrap w-44 inline-block align-middle ">
              {song.album}
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default SongRow;
