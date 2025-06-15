import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function useParticleBackground(containerRef: React.RefObject<HTMLDivElement | null>) {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Capture the container element to avoid stale references in cleanup
    const containerEl = containerRef.current;

    const isLowPower = navigator.hardwareConcurrency <= 4;
    const particleCount = isLowPower ? 1500 : 4000;

    // Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.015);

    const camera = new THREE.PerspectiveCamera(
      75,
      containerEl.clientWidth / containerEl.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
    containerEl.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;

      positions.set([x, y, z], i * 3);
      velocities.set(
        [(Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1],
        i * 3
      );
      sizes[i] = Math.random() * 1 + 0.5;

      const color = new THREE.Color(0xffffff);
      colors.set([color.r, color.g, color.b], i * 3);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      alphaTest: 0.1,
      vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Smooth parallax motion
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 20;
      targetY = (0.5 - event.clientY / window.innerHeight) * 20;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i3];
        pos[i3 + 1] += velocities[i3 + 1];
        pos[i3 + 2] += velocities[i3 + 2] + Math.sin(performance.now() * 0.001 + i) * 0.002;

        // Reset out-of-bounds
        if (
          Math.abs(pos[i3]) > 100 ||
          Math.abs(pos[i3 + 1]) > 100 ||
          Math.abs(pos[i3 + 2]) > 100
        ) {
          pos[i3] = (Math.random() - 0.5) * 200;
          pos[i3 + 1] = (Math.random() - 0.5) * 200;
          pos[i3 + 2] = (Math.random() - 0.5) * 200;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Smooth parallax camera motion
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      scene.rotation.y += 0.0005; // subtle orbital swirl
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      containerEl.removeChild(renderer.domElement);
    };
  }, [containerRef]);
}