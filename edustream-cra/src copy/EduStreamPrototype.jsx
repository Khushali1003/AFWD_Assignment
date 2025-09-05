// src/EduStreamPrototype.jsx
import React, { useEffect, useState } from 'react';
import MediaGallery from './components/MediaGallery';
import MediaPlayer from './components/MediaPlayer';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

export const SAMPLE_MEDIA = [
  {
    id: 'vid1',
    type: 'video',
    title: 'Flower (sample)',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    id: 'vid2',
    type: 'video',
    title: 'Big Buck Bunny (short)',
    src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
  },
  {
    id: 'aud1',
    type: 'audio',
    title: 'T-Rex Roar (sample audio)',
    src: 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3',
  },
];

export default function EduStreamPrototype() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('edu:dark') === 'true';
    } catch {
      return false;
    }
  });

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('media'); // 'media' | 'dashboard' | 'signup'
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('edu:user')) || null;
    } catch {
      return null;
    }
  });

  // Toggle dark mode and persist
  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('edu:dark', dark ? 'true' : 'false'); } catch {}
  }, [dark]);

  useEffect(() => {
    try { localStorage.setItem('edu:user', JSON.stringify(user)); } catch {}
  }, [user]);

  function handlePlayMedia(media) {
    setSelectedMedia(media);
  }

  function handleClosePlayer() {
    setSelectedMedia(null);
  }

  function handleSignup(newUser) {
    setUser(newUser);
    alert('Signup successful (mock). User saved locally.');
    setActiveTab('dashboard');
  }

  return (
    <div className="container">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">EduStream — Frontend Prototype</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Media player, dark mode, signup validation, dashboard charts</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-700 dark:text-gray-200">Hello {user ? user.name : 'Guest'}</div>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-3 py-1 border rounded text-sm bg-white dark:bg-slate-800"
            aria-pressed={dark}
          >
            {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      <nav className="mb-6 space-x-3">
        <button className={`px-3 py-1 rounded ${activeTab === 'media' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`} onClick={() => setActiveTab('media')}>Media</button>
        <button className={`px-3 py-1 rounded ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
        <button className={`px-3 py-1 rounded ${activeTab === 'signup' ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`} onClick={() => setActiveTab('signup')}>Signup</button>
      </nav>

      <main>
        {activeTab === 'media' && (
          <>
            <MediaGallery mediaList={SAMPLE_MEDIA} onPlay={handlePlayMedia} />
            {selectedMedia && <MediaPlayer media={selectedMedia} onClose={handleClosePlayer} />}
          </>
        )}

        {activeTab === 'dashboard' && <Dashboard />}

        {activeTab === 'signup' && <SignupForm onSignup={handleSignup} />}
      </main>

      <footer className="mt-8 text-xs text-gray-500 dark:text-gray-400">
        Prototype — client-only. No backend. Local persistence only.
      </footer>
    </div>
  );
}
