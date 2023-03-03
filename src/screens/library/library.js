import React, { useState, useEffect } from 'react';
import APIkit from '../../spotify';

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect (()=> {
    APIkit.get("me/playlists").then(function(response){
      setPlaylists(response.data.items);
      console.log(response.data.items);
   });

  },[]);
  
  return (
    <div className ="screen-container">
      {playlists?.map((playlist) =>{
        <div>{playlist.name}</div>;
        
      })}
    </div>
  )
}
