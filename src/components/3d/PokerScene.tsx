'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles, Text, RoundedBox, useTexture } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// A simple procedural Card component
const FONT_URL = "/fonts/Inter-Bold.woff";

function PlayingCard({ position, rotation, rank, suit, color = 'black', speed = 2 }: { position: [number, number, number], rotation: [number, number, number], rank: string, suit: string, color?: string, speed?: number }) {
    const meshRef = useRef<THREE.Group>(null);
    // Load the logo texture for the card back
    const texture = useTexture('/logo.jpeg');

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Gentle floating rotation logic combined with Float
            // We add a bit of extra random rotation drift
            meshRef.current.rotation.y += delta * 0.1 * speed;
            meshRef.current.rotation.z += delta * 0.05 * speed;
        }
    });

    return (
        // Increased chaos: rotationIntensity 2, floatIntensity 3, range [-0.5, 0.5]
        <Float speed={speed} rotationIntensity={2} floatIntensity={3} floatingRange={[-0.5, 0.5]}>
            <group ref={meshRef} position={position} rotation={rotation}>
                {/* Card Body (White Plastic/Paper) */}
                <RoundedBox args={[2.5, 3.5, 0.02]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#ffffff" metalness={0.05} roughness={0.3} />
                </RoundedBox>

                {/* Card Back (Logo Texture) */}
                <group position={[0, 0, -0.011]} rotation={[0, Math.PI, 0]}>
                    {/* Gold Border Frame */}
                    <mesh position={[0, 0, -0.001]}>
                        <planeGeometry args={[2.4, 3.4]} />
                        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
                    </mesh>
                    {/* The Logo Image */}
                    <mesh position={[0, 0, 0.001]}>
                        <planeGeometry args={[2.2, 3.2]} />
                        <meshStandardMaterial map={texture} />
                    </mesh>
                </group>

                {/* Card Front Content */}
                <group position={[0, 0, 0.011]}>
                    {/* Big Center Suit */}
                    <Text
                        position={[0, 0, 0]}
                        fontSize={1.5}
                        color={color}
                        font={FONT_URL}
                        anchorX="center"
                        anchorY="middle"
                    >
                        {suit}
                    </Text>

                    {/* Top Left Corner */}
                    <group position={[-0.9, 1.4, 0]}>
                        <Text
                            position={[0, 0, 0]}
                            fontSize={0.4}
                            color={color}
                            font={FONT_URL}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {rank}
                        </Text>
                        <Text
                            position={[0, -0.35, 0]}
                            fontSize={0.3}
                            color={color}
                            font={FONT_URL}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {suit}
                        </Text>
                    </group>

                    {/* Bottom Right Corner (Rotated) */}
                    <group position={[0.9, -1.4, 0]} rotation={[0, 0, Math.PI]}>
                        <Text
                            position={[0, 0, 0]}
                            fontSize={0.4}
                            color={color}
                            font={FONT_URL}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {rank}
                        </Text>
                        <Text
                            position={[0, -0.35, 0]}
                            fontSize={0.3}
                            color={color}
                            font={FONT_URL}
                            anchorX="center"
                            anchorY="middle"
                        >
                            {suit}
                        </Text>
                    </group>
                </group>
            </group>
        </Float>
    )
}

function SceneContent() {
    return (
        <>
            {/* Improved Lighting for better visibility */}
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="white" />
            <pointLight position={[-10, 5, 2]} intensity={1} color="#fbbf24" /> {/* Warm gold light */}
            <pointLight position={[0, -5, 5]} intensity={0.5} color="#3b82f6" /> {/* Subtle blue fill light */}

            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={15} size={4} speed={0.4} opacity={0.4} color="#D4AF37" />

            {/* Scattered Royal Flush - Messier positions and rotations */}
            <PlayingCard position={[-5, 3, -6]} rotation={[0.5, 0.5, 0.2]} rank="A" suit="♠" color="black" speed={1.5} />
            <PlayingCard position={[-2, -4, -4]} rotation={[0.2, -0.5, -0.1]} rank="K" suit="♠" color="black" speed={2} />
            <PlayingCard position={[3, 4, -8]} rotation={[-0.2, 0.1, 0.4]} rank="Q" suit="♠" color="black" speed={1.2} />
            <PlayingCard position={[6, -2, -5]} rotation={[0.3, -0.2, -0.3]} rank="J" suit="♠" color="black" speed={1.8} />
            <PlayingCard position={[7, 3, -7]} rotation={[-0.1, 0.4, 0.1]} rank="10" suit="♠" color="black" speed={1.3} />

            {/* Background Chaos Cards */}
            <PlayingCard position={[9, -5, -10]} rotation={[0.5, 1, 0]} rank="A" suit="♥" color="#ef4444" speed={2.5} />
            <PlayingCard position={[-8, -3, -9]} rotation={[-0.5, -0.5, 0.5]} rank="A" suit="♦" color="#ef4444" speed={2.2} />
            <PlayingCard position={[0, -7, -6]} rotation={[1, 0, 0.2]} rank="7" suit="♣" color="black" speed={3} />
            <PlayingCard position={[-5, 6, -12]} rotation={[0, 0.5, -0.5]} rank="2" suit="♦" color="#ef4444" speed={1} />
            <PlayingCard position={[4, 7, -15]} rotation={[0.2, 0.2, 0.2]} rank="K" suit="♥" color="#ef4444" speed={1.5} />
        </>
    )
}

export default function PokerScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ alpha: true }}>
                <Suspense fallback={null}>
                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
}
