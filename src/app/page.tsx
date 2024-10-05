"use client";

import { Analytics } from "@vercel/analytics/next";

function getRandomPosition() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  return { x, y };
}

function createPopup() {
  const { x, y } = getRandomPosition();
  const popup = document.createElement("div");
  popup.style.position = "absolute";
  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;
  popup.style.background = "white";
  popup.style.padding = "20px";
  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.onclick = () => popup.remove();
  popup.appendChild(closeButton);
  popup.innerText = "Rick Rolled!";
  document.body.appendChild(popup);
  return popup;
}

setInterval(createPopup, 1);

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black overflow-hidden">
        <video
          playsInline
          loop
          autoPlay
          width="2400"
          height="1000"
          controls={false}
        >
          <source src="/rolling.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Analytics />
    </>
  );
}
