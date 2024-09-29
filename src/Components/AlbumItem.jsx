import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image,name,desc,id}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] px-2 py-3 rouned cursor-pointer hover:bg-[#ffffff26]'>
      <img src={image} className='rounded' alt="" />
      <p className='font-semibold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem