"use client";
import React, { useRef, useEffect } from "react";

type CanvasBGProps = {
  hexColors?: string[];
  squareSize?: number;
  geometry?: [number, number];
  rotate?: number;
  spacing?: number;
  className?: string;
};

const CanvasBG: React.FC<CanvasBGProps> = ({
  hexColors = ["#8882", "#8884", "#8886", "#8888"],
  squareSize = 30,
  geometry = [512, 512],
  rotate = 0,
  spacing = 5,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = geometry[0];
        canvas.height = geometry[1];

        for (let x = 0; x < canvas.width; x += squareSize + spacing) {
          for (let y = 0; y < canvas.height; y += squareSize + spacing) {
            const hexColor = hexColors[Math.floor(Math.random() * hexColors.length)];
            ctx.fillStyle = hexColor;
            ctx.save();
            ctx.translate(x + squareSize / 2, y + squareSize / 2);
            ctx.rotate((rotate * Math.PI) / 180);
            ctx.fillRect(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
            ctx.restore();
          }
        }
      }
    }
  }, [hexColors, squareSize, geometry, rotate, spacing]);

  return <canvas ref={canvasRef} className={className} />;
};

export default CanvasBG;
