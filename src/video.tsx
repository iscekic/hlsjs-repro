import React, { useEffect, useState } from "react";
import Hls from "hls.js";

const Video = () => {
  const [hls] = useState(
    () =>
      new Hls({
        maxBufferSize: 10 * 1000 * 1000,
      })
  );

  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!hls || !videoEl) {
      return;
    }

    hls.on(Hls.Events.ERROR, (event, data) => {
      console.log(event, data);
    });

    hls.attachMedia(videoEl);

    hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
  }, [hls, videoEl]);

  return <video ref={setVideoEl} playsInline controls />;
};

export default Video;
