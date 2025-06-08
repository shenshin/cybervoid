import { Canvas, useFrame } from '@react-three/fiber'
import { type Mesh } from 'three'
import { useRef } from 'react'

function RotatingBox() {
  const ref = useRef<Mesh>(null!)

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta * 0.5
    ref.current.rotation.x += delta * 0.3
  })
  const side = 2.5
  return (
    <mesh ref={ref}>
      <boxGeometry args={[side, side, side]} />
      <meshStandardMaterial color="indigo" />
    </mesh>
  )
}

export function Experience() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} className="max-w-xs aspect-square">
      <ambientLight />
      <directionalLight intensity={5} position={[5, 5, 5]} />
      <RotatingBox />
    </Canvas>
  )
}
