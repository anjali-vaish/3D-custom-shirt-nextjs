'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import client-only components to avoid SSR mismatches
const ColorPicker = dynamic(() => import('./ColorPicker'), { ssr: false });
const DecalPicker = dynamic(() => import('./DecalPicker'), { ssr: false });

export default function Sidebar() {
  return (
    <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10">
      <h1 className="mb-4 text-lg font-bold">Customize Shirt</h1>
      <ColorPicker />
      <DecalPicker />
    </div>
  );
}
