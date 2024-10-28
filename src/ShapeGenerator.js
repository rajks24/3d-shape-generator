import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ sides, color }) => {
    const mesh = useRef();

    // Create geometry based on the number of sides
    const geometry = new THREE.CylinderGeometry(1, 1, 1, sides);

    // Rotate the shape for animation
    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} scale={[4, 4, 4]}> {/* Increased the scale to make the shape bigger */}
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    );
};

const ShapeGenerator = ({ sides, color }) => {
    return (
        <div className="shape-container" style={{ width: '100%', height: '100vh' }}>
            <p className="shape-text">Generated Shape with {sides} sides and color {color}</p>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <Shape sides={sides} color={color} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ShapeGenerator;
