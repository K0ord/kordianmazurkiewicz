import React from "react";
function Preloader(props) {
  return <div id={props.load ? "preloader-on" : "preloader-off"}></div>;
}

export default Preloader;