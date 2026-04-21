'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Stats, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { degToRad } from 'three/src/math/MathUtils'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'


const Model = () => {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={2}
                transparent
                opacity={0.7} />
        </mesh>
    )
}

const Stone = () => {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <Environment preset='studio' environmentIntensity={1} />

            <Model />

            {/* <Stats /> */}

            <EffectComposer>
                <Fluid fluidColor='#1b1b1b' curl={30} />
            </EffectComposer>
        </Canvas>
    )
}

export default Stone