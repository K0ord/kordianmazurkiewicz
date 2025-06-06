import React, { useEffect, useRef } from "react";

function Preloader(props) {
  const preloaderRef = useRef(null);

  useEffect(() => {
    if (props.load && preloaderRef.current) {
      // Force a repaint to restart the animation
      preloaderRef.current.style.display = 'none';
      // Trigger reflow
      void preloaderRef.current.offsetHeight;
      preloaderRef.current.style.display = 'block';
    }
  }, [props.load]);

  return <div ref={preloaderRef} id={props.load ? "preloader-on" : "preloader-off"}></div>;
}

export default Preloader;