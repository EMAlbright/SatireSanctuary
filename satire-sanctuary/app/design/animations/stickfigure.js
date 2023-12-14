import React, { useRef, useEffect } from "react";

export default function StickFigure() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Scale the canvas to half of its original size
    const scale = 0.5;
    canvas.width = canvas.width * scale;
    canvas.height = canvas.height * scale;
    ctx.scale(scale, scale);

    // Head
    ctx.beginPath();
    ctx.arc(100, 100, 10, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(100, 120);
    ctx.lineTo(100, 200);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(100, 130);
    ctx.lineTo(60, 160);
    ctx.moveTo(100, 130);
    ctx.lineTo(140, 160);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(60, 250);
    ctx.moveTo(100, 200);
    ctx.lineTo(140, 250);
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={200} height={300} />;
}
