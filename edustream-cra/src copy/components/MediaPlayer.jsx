// src/components/MediaPlayer.jsx
import React, { useEffect, useRef } from 'react';

function formatTime(s = 0) {
  if (!isFinite(s)) return '0:00';
  const mins = Math.floor(s / 60);
  const secs = Math.floor(s % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

export default function MediaPlayer({ media, onClose }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Start drawing loop
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;

    function resizeCanvas() {
      if (!canvas) return;
      const ratio = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * ratio) || canvas.height !== Math.round(h * ratio)) {
        canvas.width = Math.round(w * ratio);
        canvas.height = Math.round(h * ratio);
        ctx && ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      }
    }

    function draw() {
      const mediaEl = media.type === 'video' ? videoRef.current : audioRef.current;
      if (!canvas || !ctx || !mediaEl) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      resizeCanvas();
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      const t = mediaEl.currentTime || 0;
      const d = mediaEl.duration || 1;
      const pct = Math.min(1, t / d);

      // bottom progress background
      const barW = w * 0.9;
      const barH = 6;
      const barX = w * 0.05;
      const barY = h - 18;

      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      roundRect(ctx, barX, barY, barW, barH, 4);
      ctx.fill();

      // filled portion
      ctx.fillStyle = 'rgba(99,102,241,0.95)'; // indigo-600
      roundRect(ctx, barX, barY, barW * pct, barH, 4);
      ctx.fill();

      // time text
      ctx.font = '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.fillText(`${formatTime(t)} / ${isFinite(d) ? formatTime(d) : '--:--'}`, barX, barY - 8);

      // for audio: draw simple moving circles to simulate waveform
      if (media.type === 'audio') {
        const count = 30;
        for (let i = 0; i < count; i++) {
          const x = (i / (count - 1)) * w;
          const amp = Math.abs(Math.sin((t * 3) + (i / count) * Math.PI * 2)) * 18;
          ctx.beginPath();
          ctx.arc(x, h * 0.5, amp * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${0.2 + (i / count) * 0.6})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [media]);

  useEffect(() => {
    // Focus video when open
    const el = media.type === 'video' ? videoRef.current : audioRef.current;
    if (el) try { el.focus(); } catch {}
  }, [media]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white dark:bg-slate-900 rounded shadow-lg w-full max-w-4xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold">{media.title}</h3>
            <div className="text-xs text-gray-600 dark:text-gray-300">{media.type.toUpperCase()}</div>
          </div>
          <div>
            <button onClick={onClose} className="px-3 py-1 rounded bg-gray-200 dark:bg-slate-700">Close</button>
          </div>
        </div>

        <div className="media-player">
          {media.type === 'video' ? (
            <video
              ref={videoRef}
              src={media.src}
              controls
              crossOrigin="anonymous"
              className="rounded"
            />
          ) : (
            <audio
              ref={audioRef}
              src={media.src}
              controls
              crossOrigin="anonymous"
              className="w-full"
            />
          )}

          <canvas ref={canvasRef} />
        </div>

        <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          Use the native controls for play/pause; canvas overlay shows progress & simple visualization.
        </div>
      </div>
    </div>
  );
}

// helper: rounded rect for canvas
function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, Math.floor(Math.min(w, h) / 2));
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
