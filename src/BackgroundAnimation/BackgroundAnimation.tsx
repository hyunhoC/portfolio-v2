import React, { MutableRefObject, useEffect, useRef, useState } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const [mouseCoordinate, setMouseCoordinate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleWindowResize();
  }, []);

  const handleWindowResize = () => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  };

  // Canvas resize when browser resizes
  window.addEventListener("resize", handleWindowResize);

  // Get coordinates for mouse
  window.addEventListener("mousemove", (event) => {
    setMouseCoordinate({ x: event.clientX, y: event.clientY });
  });

  // Get mobile touch listener
  window.addEventListener("touchmove", (event) => {
    setMouseCoordinate({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  });

  useEffect(() => {
    const canvasContext = canvasRef.current.getContext("2d");
  }, [mouseCoordinate])

  return <canvas ref={canvasRef}></canvas>;
};

export default BackgroundAnimation;
