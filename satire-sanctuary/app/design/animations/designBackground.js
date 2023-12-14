import React, { useEffect, useRef } from "react";

export default function Wave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const amplitude = 35;
    const frequency = 0.01;
    let phase = 0;
    const speed = 0.02;

    const cloudCount = 5;
    const cloudSpacing = 450;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    function drawCloud(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + 40, y + 20, x + 40, y + 70, x - 60, y + 70);
      ctx.c
      ctx.bezierCurveTo(x - 80, y + 100, x - 150, y + 100, x - 170, y + 70);
      ctx.bezierCurveTo(x - 250, y + 70, x - 250, y + 40, x - 220, y + 20);
      ctx.bezierCurveTo(x - 260, y - 40, x - 200, y - 50, x - 170, y - 30);
      ctx.bezierCurveTo(x - 150, y - 75, x - 80, y - 60, x - 80, y - 30);
      ctx.bezierCurveTo(x - 30, y - 75, x + 20, y - 60, x, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }

    function animate() {
      phase += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cloudCount; i++) {
        const x = i * cloudSpacing;
        const y = amplitude * Math.sin(frequency * x + phase) + canvas.height / 2;
        drawCloud(x, y);
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}


