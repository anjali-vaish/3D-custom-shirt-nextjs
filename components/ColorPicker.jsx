'use client';

import React from 'react';
import { ChromePicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../lib/store';

export default function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="p-2">
      <h2 className="mb-2 text-gray-700 font-semibold">Shirt Color</h2>
      <ChromePicker
        color={snap.shirtColor}
        onChange={(c) => (state.shirtColor = c.hex)}
        disableAlpha
      />
    </div>
  );
}
