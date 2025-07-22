"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"
import { useSpring, useTransform, MotionValue } from "framer-motion"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  )
}

function CameraRig({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const { camera } = useThree()

  const cameraX = useTransform(scrollProgress, [0, 0.2, 0.4, 0.6, 0.8], [5, -5, 0, 0, 2])
  const cameraY = useTransform(scrollProgress, [0, 0.2, 0.4, 0.6, 0.8], [5, 3, 10, 2, 1])
  const cameraZ = useTransform(scrollProgress, [0, 0.2, 0.4, 0.6, 0.8], [5, 5, 10, 4, 1])
  const cameraFov = useTransform(scrollProgress, [0, 0.2, 0.4, 0.6, 0.8], [25, 20, 35, 18, 15])

  const smoothX = useSpring(cameraX, { damping: 30, stiffness: 100 })
  const smoothY = useSpring(cameraY, { damping: 30, stiffness: 100 })
  const smoothZ = useSpring(cameraZ, { damping: 30, stiffness: 100 })
  const smoothFov = useSpring(cameraFov, { damping: 30, stiffness: 100 })

  useFrame(() => {
    camera.position.set(smoothX.get(), smoothY.get(), smoothZ.get())
    if ("fov" in camera) {
      camera.fov = smoothFov.get()
      camera.updateProjectionMatrix()
    }
  })

  return null
}

export default function ThreeScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

      <CameraRig scrollProgress={scrollProgress} />

      <AnimatedSphere />
      <FloatingParticles />

      <Environment preset="night" />
      <OrbitControls
        enableZoom
        enablePan={false}
        enableRotate
        autoRotate
        autoRotateSpeed={0.5}
        maxDistance={10}
        minDistance={3}
      />
    </Canvas>
  )
}
