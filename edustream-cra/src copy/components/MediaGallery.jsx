// src/components/MediaGallery.jsx
import React from 'react';

export default function MediaGallery({ mediaList = [], onPlay }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Media Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mediaList.map((m) => (
          <div key={m.id} className="p-3 border rounded bg-white dark:bg-slate-900">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{m.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{m.type.toUpperCase()}</div>
              </div>
              <div>
                <button
                  onClick={() => onPlay(m)}
                  className="px-3 py-1 rounded bg-indigo-600 text-white"
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
