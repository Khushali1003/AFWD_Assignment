import React from "react";
import MediaPlayer from "./MediaPlayer";

export default function MediaGallery() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <MediaPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" type="video" />
      <MediaPlayer src="https://www.w3schools.com/html/horse.mp3" type="audio" />
    </div>
  );
}
