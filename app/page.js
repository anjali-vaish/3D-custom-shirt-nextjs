'use client';

import Sidebar from '../components/Sidebar';
import CanvasWrapper from '../components/CanvasWrapper';

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-gray-900">
      <Sidebar />
      <div className="h-full w-full">
        <CanvasWrapper />
      </div>
    </main>
  );
}
