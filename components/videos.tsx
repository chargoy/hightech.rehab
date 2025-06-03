"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import VideoComponent from "./video";

export default function Videos() {
  const videoUrls = [
    "https://res.cloudinary.com/hitechrehab/video/upload/v1748960467/WhatsApp_Video_2025-05-18_at_18.54.37_qtrlje.mp4",
    "https://res.cloudinary.com/hitechrehab/video/upload/v1748960468/WhatsApp_Video_2025-05-18_at_18.54.40_zc4hru.mp4",
    "https://res.cloudinary.com/hitechrehab/video/upload/v1748960468/WhatsApp_Video_2025-05-18_at_18.54.52_giazzb.mp4",
    "https://res.cloudinary.com/hitechrehab/video/upload/v1748960467/WhatsApp_Video_2025-05-18_at_18.54.46_dpctub.mp4",
    "https://res.cloudinary.com/hitechrehab/video/upload/v1748960468/WhatsApp_Video_2025-05-18_at_18.54.33_bcy8nu.mp4",
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Pausar el video cuando cambia de slide
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== activeIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans">Conoce nuestros servicios</h2>
          </div>
          <div className="h-min-64">
            <Carousel
              slide={false}
              onSlideChange={(index) => setActiveIndex(index)}
            >
              {videoUrls.map((url, index) => (
                <VideoComponent
                  key={index}
                  src={url}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
