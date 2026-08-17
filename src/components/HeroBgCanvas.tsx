import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulseSpeed: number;
  pulseVal: number;
}

interface FloatingText {
  x: number;
  y: number;
  text: string;
  vy: number;
  opacity: number;
  color: string;
}

export const HeroBgCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const colors = [
      '#7C3AED', // Purple
      '#2563EB', // Blue
      '#06B6D4', // Cyan
      '#EC4899', // Pink
      '#22C55E', // Green
    ];

    const codeSnippets = [
      'model.fit(X_train, y_train)',
      'df.groupby("crop")["NDVI"].mean()',
      'loss: 0.0214 - accuracy: 0.962',
      'R² = 0.5288 | RMSE = 21.65',
      'import sklearn.linear_model',
      'Sentinel-2 Band B8 (NIR) & B4 (Red)',
      'fastapi.get("/api/v1/predict")',
      'GEE.ImageCollection("COPERNICUS/S2_SR")',
      'torch.tensor(dataset, dtype=torch.float32)',
      'epoch: 42/50 | val_loss: 0.018',
      'Joblib.dump(pipeline, "weather_model.pkl")',
      'NDMI = (NIR - SWIR) / (NIR + SWIR)',
    ];

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for subtle interactive node attraction
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize Nodes
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 45);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI * 2,
      });
    }

    // Initialize Floating Text Fragments
    const floatingTexts: FloatingText[] = [];
    const textCount = 10;
    for (let i = 0; i < textCount; i++) {
      floatingTexts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        vy: -(Math.random() * 0.2 + 0.1),
        opacity: Math.random() * 0.35 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    });

    resizeObserver.observe(canvas.parentElement || document.body);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(41, 48, 86, 0.18)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Neural Network Node Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, nodes[i].color);
            grad.addColorStop(1, nodes[j].color);

            ctx.strokeStyle = grad;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }
      }

      // Update & Draw Nodes
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Mouse proximity reaction
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 100 && mdist > 0) {
            node.x += (mdx / mdist) * 0.8;
            node.y += (mdy / mdist) * 0.8;
          }

          node.pulseVal += node.pulseSpeed;
        }

        const currentRadius = node.radius + Math.sin(node.pulseVal) * 0.8;

        // Node Glow
        ctx.save();
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Floating Code Fragments
      ctx.font = '11px "JetBrains Mono", monospace';
      floatingTexts.forEach((ft) => {
        if (!prefersReducedMotion) {
          ft.y += ft.vy;
          if (ft.y < -20) {
            ft.y = height + 20;
            ft.x = Math.random() * width;
            ft.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          }
        }

        ctx.fillStyle = ft.color;
        ctx.globalAlpha = ft.opacity;
        ctx.fillText(ft.text, ft.x, ft.y);
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial Gradient Glowing Ambient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-[#EC4899]/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
    </div>
  );
};
