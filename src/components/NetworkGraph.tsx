
import React, { useEffect, useRef } from "react";

// This component will render the network graph shown in the design
const NetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Save the original size for calculations
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Center of the canvas
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Generate points in a star pattern
    const points: {x: number, y: number, color: string}[] = [];
    const numPoints = 36;
    const innerRadius = Math.min(rect.width, rect.height) * 0.15;
    const outerRadius = Math.min(rect.width, rect.height) * 0.4;
    
    const colors = ["#39B0E5", "#9B87F5", "#F294B3"]; // Blue, Purple, Pink
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 * i) / numPoints;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      
      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        color: colors[i % colors.length]
      });
    }
    
    // Draw connections between points
    ctx.lineWidth = 0.5;
    ctx.setLineDash([2, 3]);
    
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        // Only connect some points for a sparser look
        if (Math.random() > 0.7) continue;
        
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.strokeStyle = "#ddd";
        ctx.stroke();
      }
    }
    
    // Draw points
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = point.color;
      ctx.fill();
    });
    
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full max-w-md aspect-square"
      style={{ maxWidth: "400px" }}
    />
  );
};

export default NetworkGraph;
