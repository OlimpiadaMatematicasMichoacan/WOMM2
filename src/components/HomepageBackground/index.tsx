import type { ReactNode } from 'react';
import * as THREE from 'three';
import React, { useEffect, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, usePlane, useSphere } from '@react-three/cannon';

const getCSSColors = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return ['#2563eb', '#1e40af', '#1e3a8a', '#172554', '#60a5fa', '#93c5fd'];
  }
  const styles = getComputedStyle(document.documentElement);
  return [
    styles.getPropertyValue('--ifm-color-primary').trim(),
    styles.getPropertyValue('--ifm-color-primary-dark').trim(),
    styles.getPropertyValue('--ifm-color-primary-darker').trim(),
    styles.getPropertyValue('--ifm-color-primary-darkest').trim(),
    styles.getPropertyValue('--ifm-color-primary-light').trim(),
    styles.getPropertyValue('--ifm-color-primary-lighter').trim(),
  ];
};

const niceColors = getCSSColors();
const tempColor = new THREE.Color();
const data = Array.from({ length: 200 }, () => ({
  color: niceColors[Math.floor(Math.random() * niceColors.length)],
  scale: 0.25 + Math.random(),
}));

function InstancedSpheres({ count = 100 }) {
  const { viewport } = useThree();
  const [ref, api] = useSphere((index) => ({
    mass: data[index].scale * 100,
    position: [4 - Math.random() * 8, viewport.height, 0], 
    args: [data[index].scale],
  }));

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(count)
          .fill(null)
          .flatMap((_, i) => tempColor.set(data[i].color).toArray())
      ),
    [count]
  );

  useLayoutEffect(() => {
    for (let i = 0; i < count; i++) {
      api.at(i).scaleOverride([data[i].scale, data[i].scale, data[i].scale]);
    }
  }, [api, count]);

  return (
    <instancedMesh ref={ref} args={[null, null, count]}>
      <sphereGeometry args={[1, 64, 64]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </sphereGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors />
    </instancedMesh>
  );
}

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ position = [0, 0, 0], ...props }) {
  const [, api] = usePlane(() => ({ ...props }));
  useEffect(() => {
    api.position.set(...position);
  }, [api, position]);
  return null;
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [4] }));
  useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
  return null;
}

export default function HomepageBackground(): ReactNode {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <Physics gravity={[0, -50, 0]}>
        <group position={[0, 0, -10]}>
          <Mouse />
          <Borders />
          <InstancedSpheres />
        </group>
      </Physics>
    </Canvas>
  );
}