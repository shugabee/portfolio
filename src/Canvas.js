import React from "react";
import { useRef, useEffect } from "react";
import shelbyImage from "./Images/shelby-photo.jpg";

export function Canvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = shelbyImage;
    img.onload = function () {
      context.drawImage(img, 0, 0, props.width, props.height);
    };
  }, [props.width, props.height]);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;

  //   const canvasRef = useRef(null);

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext("2d");

  //     context.fillStyle = "#e6d3d3";
  //     context.fillRect(0, 0, props.width, props.height);

  //     context.beginPath();
  //     context.fillStyle = "#e6d3d3";

  //     context.clip();

  //     const img = new Image();
  //     img.src = shelbyImage;
  //     img.onload = function () {
  //       context.drawImage(img, 0, 0, props.width, props.height);
  //     };

  //   }, [props.width, props.height]);

  //   return <canvas ref={canvasRef} width={props.width} height={props.height} />;
}

export default Canvas;

// const Canvas = props => {
//     const canvasRef = useRef(null)

//     useEffect(() => {
//         const canvas = canvasRef.current
//         const context = canvas.getContext('2d')

//         context.fillStyle= '000000'
//         context.fullRect(0, 0, context.canvas.width, context.canvas.height)
//     }, [])

//     return <canvas ref={canvasRef} {...props}/>
// }

// export default Canvas;
