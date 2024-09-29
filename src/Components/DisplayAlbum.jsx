import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playWithId} =useContext(PlayerContext)

  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} className="w-48 rounded" alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 flex items-center gap-2">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            •3,458,520 likes
            •<b>50 songs,</b>
            about 2hr 30min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3  sm:grid-cols-4 mt-10 mb-4 pl-2 
      text-[#ABA8AB]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item,index)=>(
        <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#A8A8A8] hover:bg-[#ffffff26] cursor-pointer">
            <p className="text-white">
                <b className="mr-4 text-[#A6A6A6]">{index+1}</b>
                <img src={item.image} className="inline w-10 mr-5" alt="" />
                {item.name}
            </p>
            <p className="text-[15px]">{albumData.name}</p>
            <p className="text-[15px] hidden sm:block">5 days ago</p>
            <p className="text-center text-[15px]">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
