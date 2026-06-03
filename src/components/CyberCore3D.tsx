import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CyberCore3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    let animationFrameId: number;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all objects for rotation
    const holographicCore = new THREE.Group();
    scene.add(holographicCore);

    // 1. Central Neural Point Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.8, 30, 30);
    
    // Create custom particle positions based on sphere geometry
    const particleCount = sphereGeometry.attributes.position.count;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = sphereGeometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = originalPositions[i];
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Canvas Texture for smooth circular glowing points
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(0, 243, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointSphere = new THREE.Points(particleGeometry, particleMaterial);
    holographicCore.add(pointSphere);

    // 2. Inner Solid-looking Glow Wireframe Sphere
    const wireframeGeometry = new THREE.SphereGeometry(1.78, 15, 15);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xbd00ff, // Neon Purple
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const innerWireSphere = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    holographicCore.add(innerWireSphere);

    // 3. Orbiting HUD Rings
    const ringGroup = new THREE.Group();
    holographicCore.add(ringGroup);

    const ringCount = 3;
    const rings: THREE.LineLoop[] = [];

    const ringColors = [0x00f3ff, 0xbd00ff, 0x00ff87];
    const ringRadii = [2.2, 2.4, 2.6];
    const ringRotations = [
      [Math.PI / 2, 0, 0],
      [0, Math.PI / 2, 0],
      [Math.PI / 4, Math.PI / 4, 0],
    ];

    for (let i = 0; i < ringCount; i++) {
      const ringGeometry = new THREE.RingGeometry(ringRadii[i] - 0.02, ringRadii[i], 64);
      // Convert to LineLoop to make it look like a clean ring vector
      const edgeGeom = new THREE.EdgesGeometry(ringGeometry);
      const ringLine = new THREE.LineLoop(edgeGeom, new THREE.LineBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      }));

      ringLine.rotation.set(
        ringRotations[i][0],
        ringRotations[i][1],
        ringRotations[i][2]
      );
      ringGroup.add(ringLine);
      rings.push(ringLine);
    }

    // 4. Subtle Outer Floating Particles
    const outerParticleCount = 120;
    const outerGeometry = new THREE.BufferGeometry();
    const outerPositions = new Float32Array(outerParticleCount * 3);

    for (let i = 0; i < outerParticleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.8 + Math.random() * 1.5; // distance from core

      outerPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      outerPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      outerPositions[i * 3 + 2] = r * Math.cos(phi);
    }

    outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3));
    const outerMaterial = new THREE.PointsMaterial({
      size: 0.08,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.5,
      depthWrite: false,
    });
    const outerPoints = new THREE.Points(outerGeometry, outerMaterial);
    holographicCore.add(outerPoints);

    // Mouse responsiveness
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1) relative to container
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = (x / width) * 2 - 1;
      targetY = -(y / height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render / Animation Loop
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (lerping)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base rotations
      pointSphere.rotation.y = elapsedTime * 0.15;
      pointSphere.rotation.x = elapsedTime * 0.05;

      innerWireSphere.rotation.y = -elapsedTime * 0.1;
      
      // Individual ring rotations with different speeds
      rings[0].rotation.z = elapsedTime * 0.3;
      rings[1].rotation.x = elapsedTime * 0.2;
      rings[2].rotation.y = -elapsedTime * 0.25;

      outerPoints.rotation.y = elapsedTime * 0.05;

      // Mouse interactive tilt
      holographicCore.rotation.y = mouseX * 0.8;
      holographicCore.rotation.x = -mouseY * 0.8;

      // Oscillate outer particles slightly (pulse effect)
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
      pointSphere.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Resize Handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      
      // Dispose resources
      sphereGeometry.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      outerGeometry.dispose();
      outerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
};
export default CyberCore3D;
