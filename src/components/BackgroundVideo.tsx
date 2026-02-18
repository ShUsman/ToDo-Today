import { useRef, useEffect } from 'react';
import VideoBG from '../assets/videos/background_video.mp4';

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.6;

    }
  }, []);

  return (
    <div className="fixed inset-0 bg-cover min-h-screen pointer-events-none z-[-1]">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-full h-full object-cover"
      >
        <source src={VideoBG} type="video/mp4" />
      </video>
    </div>
  );
};