'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, Decal, useTexture } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../lib/store';

// Preload model
useGLTF.preload('/models/shirt_baked.glb');
// Transparent fallback image
const BLANK_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQoAAd8B9tR7nQAAAABJRU5ErkJggg==';

export default function ShirtModel(props) {
  const snap = useSnapshot(state);
  const { scene } = useGLTF('/models/shirt_baked.glb');

  // Reference to the shirt mesh for decals
  const meshRef = useRef();
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && !meshRef.current) {
        meshRef.current = child;
      }
    });
  }, [scene]);

  // Load decal texture (hook always called)
  const decalMap = useTexture(snap.decalTexture || BLANK_IMAGE);

  // Apply shirt color on material
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(snap.shirtColor);
        child.material.needsUpdate = true;
      }
    });
  }, [scene, snap.shirtColor]);

  return (
    <group {...props}>
      <primitive object={scene} />
      {snap.decalTexture && meshRef.current && (
        <Decal
          mesh={meshRef.current}
          position={[0, 0.5, 0.1]} // adjust as needed
          rotation={[0, 0, 0]}
          scale={1}
          map={decalMap}
          flatShading
        />
      )}
    </group>
  );
}
