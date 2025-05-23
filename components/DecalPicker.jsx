'use client';

import React from 'react';
import state from '../lib/store';

export default function DecalPicker() {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // create a browser URL for the uploaded image
    state.decalTexture = URL.createObjectURL(file);
  };

  return (
    <div className="mt-4 p-2">
      <h2 className="mb-2 text-gray-700 font-semibold">Upload Decal</h2>
      <input type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
}
