"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  phase: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const initNodes = useCallback(
    (width: number, height: number) => {
      const mobile = width < 768;
      setIsMobile(mobile);
      const count = mobile
        ? Math.min(30, Math.floor((width * height) / 25000))
        : Math.min(70, Math.floor((width * height) / 18000));
      const nodes: Node[] = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.8 + 0.8,
          baseX: x,
          baseY: y,
          phase: Math.random() * Math.PI * 2,
        });
      }
      nodesRef.current = nodes;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;
      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === "dark";
      const mobile = width < 768;

      // Theme-based colors
      const nodeColorBase = isDark ? [129, 140, 248] : [120, 130, 160];
      const nodeAlpha = isDark ? 0.7 : 0.35;
      const lineColorBase = isDark ? [139, 92, 246] : [140, 150, 170];
      const lineAlphaMax = isDark ? 0.18 : 0.07;
      const glowAlpha = isDark ? 0.25 : 0.1;
      const mouseLineAlpha = isDark ? 0.35 : 0.15;

      const mouse = mouseRef.current;
      const nodes = nodesRef.current;
      const connectionDistance = mobile ? 120 : 160;
      const mouseInfluence = 180;
      const mouseConnectionDist = 200;

      // Update nodes
      for (const node of nodes) {
        // Mouse repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluence && dist > 0) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          node.vx -= (dx / dist) * force * 0.015;
          node.vy -= (dy / dist) * force * 0.015;
        }

        // Return to base
        node.vx += (node.baseX - node.x) * 0.0008;
        node.vy += (node.baseY - node.y) * 0.0008;

        // Damping
        node.vx *= 0.985;
        node.vy *= 0.985;

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap
        if (node.x < -30) node.x = width + 30;
        if (node.x > width + 30) node.x = -30;
        if (node.y < -30) node.y = height + 30;
        if (node.y > height + 30) node.y = -30;
      }

      // Draw connections with pulse
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const baseOpacity = (1 - dist / connectionDistance) * lineAlphaMax;

            // Pulse: sinusoidal phase traveling along edges
            const pulseFactor = mobile
              ? 1
              : 0.6 + 0.4 * Math.sin(t * 1.5 + nodes[i].phase + dist * 0.02);
            const opacity = baseOpacity * pulseFactor;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${lineColorBase[0]},${lineColorBase[1]},${lineColorBase[2]},${opacity})`;
            ctx.lineWidth = isDark ? 1 : 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections (desktop only)
      if (!mobile && mouse.x > 0 && mouse.y > 0) {
        for (const node of nodes) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseConnectionDist) {
            const opacity = (1 - dist / mouseConnectionDist) * mouseLineAlpha;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(${nodeColorBase[0]},${nodeColorBase[1]},${nodeColorBase[2]},${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Soft glow (skip on mobile for perf)
        if (!mobile) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nodeColorBase[0]},${nodeColorBase[1]},${nodeColorBase[2]},${glowAlpha * 0.5})`;
          ctx.fill();
        }

        // Core glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColorBase[0]},${nodeColorBase[1]},${nodeColorBase[2]},${glowAlpha})`;
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColorBase[0]},${nodeColorBase[1]},${nodeColorBase[2]},${nodeAlpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      animate();
    } else {
      // Draw static frame
      for (const node of nodesRef.current) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = resolvedTheme === "dark"
          ? "rgba(129, 140, 248, 0.4)"
          : "rgba(140, 150, 170, 0.25)";
        ctx.fill();
      }
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolvedTheme, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
