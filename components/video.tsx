import React, { forwardRef } from "react";

interface VideoComponentProps {
  src: string;
}

const VideoComponent = forwardRef<HTMLVideoElement, VideoComponentProps>(
  ({ src }, ref) => {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden">
        <video
          ref={ref}
          src={src}
          loop
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }
);

export default VideoComponent;
