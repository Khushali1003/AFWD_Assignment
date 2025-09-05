import React from "react";

export default function MediaPlayer({ src, type }) {
  return (
    <div className="w-full">
      {type === "video" ? (
        <video controls className="w-full rounded-lg">
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <audio controls className="w-full rounded-lg">
          <source src={src} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
