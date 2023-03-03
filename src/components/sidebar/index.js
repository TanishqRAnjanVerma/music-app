import React, { useEffect, useState } from 'react';
import '../sidebar/sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState("https://images.unsplash.com/photo-1615640848864-21d95c1dc365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBhcHB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60")
  
  useEffect(()=>{
     apiClient.get("me").then(response => {
      console.log(response.data.images[0].url);
    })
  },[])
  return (
    <div className="sidebar-container">
      <img src={image}
        alt="profile" />
      <div>
        <SidebarButton title = "Feed" to = "/feed" icon = {<MdSpaceDashboard />} />
        <SidebarButton title = "Trending" to = "/trending" icon = {<FaGripfire />} />
        <SidebarButton title = "Player" to = "/player" icon = {<FaPlay />} />
        <SidebarButton title = "Favorites" to = "/favorites" icon = {<MdFavorite />} />
        <SidebarButton title = "Library" to = "/" icon = {<IoLibrary />} />

      </div>
      <SidebarButton title = "Sign Out" to= "" icon = {<FaSignOutAlt/>} />
    </div>
  )
}
