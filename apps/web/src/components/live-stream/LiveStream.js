"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

const TEST_STREAMS = {
  1: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  2: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
  3: "https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",
};

export default function LiveStream({ shopId }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const streamUrl = TEST_STREAMS[shopId] || TEST_STREAMS[1];

    if (Hls.isSupported()) {
      hlsRef.current = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hlsRef.current.loadSource(streamUrl);
      hlsRef.current.attachMedia(videoRef.current);

      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      });

      hlsRef.current.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hlsRef.current.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hlsRef.current.recoverMediaError();
              break;
            default:
              hlsRef.current.destroy();
              break;
          }
        }
      });
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = streamUrl;
      videoRef.current.addEventListener("loadedmetadata", () => {
        videoRef.current.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [shopId]);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        playsInline
        poster="/stream-placeholder.jpg"
      />
      <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
        Live
      </div>
    </div>
  );
}
