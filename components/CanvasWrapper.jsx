'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ShirtModel from './ShirtModel';

export default function CanvasWrapper() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: '#111' }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      {/* 3D Shirt Model */}
      <Suspense fallback={null}>
        <ShirtModel scale={1.5} position={[0, -1, 0]} />
      </Suspense>

      {/* Orbit controls for dragging */}
      <OrbitControls />
    </Canvas>
  );
}
