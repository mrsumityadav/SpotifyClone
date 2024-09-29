import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({image,name,desc,id}) => {
  const {playWithId} = useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className="min-w-[180px] px-2 py-3 rouned cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} className="rounded" alt="" />
      <p className="font-semibold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
