import React, { useEffect, useRef } from "react";

function Preloader(props) {
  const preloaderRef = useRef(null);

  useEffect(() => {
    if (props.load && preloaderRef.current) {
      // Force animation restart by recreating the element
      const container = preloaderRef.current;
      const oldBackground = window.getComputedStyle(container).backgroundImage;
      container.style.backgroundImage = 'none';
      
      // Trigger browser reflow
      void container.offsetHeight;
      
      // Restore the background image to restart animation
      container.style.backgroundImage = oldBackground;
    }
  }, [props.load]);

  return (
    <div 
      ref={preloaderRef} 
      id={props.load ? "preloader-on" : "preloader-off"}
      style={{
        WebkitTransform: 'translate3d(0,0,0)',
        transform: 'translate3d(0,0,0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitPerspective: 1000,
        perspective: 1000
      }}
    />
  );
}

export default Preloader;