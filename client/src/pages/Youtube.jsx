import React, { useState } from 'react'
import axios from "axios"

const Youtube = () => {
  const [videoUrl, setVideoUrl] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/youtube/download/video",
        { link: videoUrl },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "video.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={videoUrl} onChange={(e)=> setVideoUrl(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Youtube