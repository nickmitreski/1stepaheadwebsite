'use client'
import { useRef, Suspense, memo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { ErrorBoundary } from './error-boundary'

// Memoized rotating cube component
const RotatingCube = memo(() => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#FFA800" 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
})
RotatingCube.displayName = 'RotatingCube'

// Memoized floating text component
const FloatingText = memo(() => {
  const textRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1 + 1.5
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={textRef}>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        // Fallback to system font if custom font fails
        font={undefined}
      >
        1 Step Ahead
      </Text>
    </group>
  )
})
FloatingText.displayName = 'FloatingText'

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#FFA800]/10 to-[#FFA800]/30 rounded-lg">
    <div className="text-center">
      <div className="animate-spin w-8 h-8 border-2 border-[#FFA800] border-t-transparent rounded-full mx-auto mb-2" />
      <p className="text-sm text-muted-foreground">Loading 3D experience...</p>
    </div>
  </div>
)

// Error fallback component for 3D content
const ThreeDErrorFallback = () => (
  <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#FFA800]/10 to-[#FFA800]/30 rounded-lg">
    <div className="text-center px-6">
      <div className="text-[#FFA800] mb-3">
        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z" clipRule="evenodd" />
          <path d="M7 7h6v6H7z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        1 Step Ahead
      </h3>
      <p className="text-sm text-muted-foreground">
        Financial education for the future
      </p>
    </div>
  </div>
)

// Scene content component
const SceneContent = memo(() => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <pointLight position={[-10, -10, -5]} intensity={0.5} />
    
    <RotatingCube />
    <FloatingText />
    
    <OrbitControls 
      enableZoom={false} 
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.5}
      enableDamping
      dampingFactor={0.05}
    />
  </>
))
SceneContent.displayName = 'SceneContent'

export default function HeroCube() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Always render the same fallback on server and initial client render
  if (!isMounted) {
    return (
      <div 
        className="w-full h-[400px] lg:h-[500px]"
        role="img"
        aria-label="Interactive 3D cube representing 1 Step Ahead financial education"
      >
        <LoadingFallback />
      </div>
    )
  }

  return (
    <ErrorBoundary fallback={<ThreeDErrorFallback />}>
      <div 
        className="w-full h-[400px] lg:h-[500px]"
        role="img"
        aria-label="Interactive 3D cube representing 1 Step Ahead financial education"
      >
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ background: 'transparent' }}
            dpr={[1, 2]} // Limit pixel ratio for performance
            performance={{ min: 0.5 }} // Reduce quality if performance drops
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: 'default' // Use integrated graphics when available
            }}
            onError={(error) => {
              console.error('Three.js Canvas error:', error)
            }}
          >
            <SceneContent />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}
