"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import type { Mesh, PointLight as PointLightType } from "three";

const FloatingTorusKnot = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshStandardMaterial
          color="#7042f8"
          wireframe
          emissive="#7042f8"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
};

const OrbitingLight = () => {
  const lightRef = useRef<PointLightType>(null);

  useFrame((state) => {
    if (lightRef.current) {
      const t = state.clock.elapsedTime;
      lightRef.current.position.x = Math.sin(t * 0.5) * 4;
      lightRef.current.position.z = Math.cos(t * 0.5) * 4;
      lightRef.current.position.y = Math.sin(t * 0.3) * 2;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={2}
      color="#06b6d4"
      distance={10}
    />
  );
};

const FloatingIcosahedron = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={[2.5, -1, -2]} scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[-2.5, 1, -1]} scale={0.4}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#b49bff"
          wireframe
          emissive="#b49bff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

export const HeroScene = () => (
  <div className="w-full h-full absolute inset-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#7042f8" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#06b6d4" />
        <OrbitingLight />
        <FloatingTorusKnot />
        <FloatingIcosahedron />
        <FloatingOctahedron />
      </Suspense>
    </Canvas>
  </div>
);
