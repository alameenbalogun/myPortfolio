import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeJSBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    camera.position.z = 50;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 80;
    const positionArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 100;
      positionArray[i + 1] = (Math.random() - 0.5) * 100;
      positionArray[i + 2] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positionArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x3b82f6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create rotating shapes
    const geometries = [
      new THREE.IcosahedronGeometry(8, 4),
      new THREE.OctahedronGeometry(8, 2),
      new THREE.TetrahedronGeometry(8),
    ];

    const shapes: THREE.Mesh[] = [];
    const colors = [0x3b82f6, 0x8b5cf6, 0xec4899];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: colors[index],
        wireframe: true,
        emissive: colors[index],
        emissiveIntensity: 0.3,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (index - 1) * 25,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shapes.push(mesh);
      scene.add(mesh);
    });

    // Lighting
    const light1 = new THREE.PointLight(0x3b82f6, 1, 100);
    light1.position.set(50, 50, 50);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 0.8, 100);
    light2.position.set(-50, -50, 50);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0002;
      particles.rotation.y += 0.0003;

      // Rotate and move shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.004 + index * 0.001;
        shape.rotation.y += 0.005 + index * 0.0015;
        shape.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.02;
      });

      // Camera movement based on mouse
      camera.position.x = mouseX * 5;
      camera.position.y = mouseY * 5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);

      const container = containerRef.current;
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((g) => g.dispose());
      particlesMaterial.dispose();
      shapes.forEach((shape) => {
        const material = shape.material as THREE.Material;
        material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 overflow-hidden"
      style={{ top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
}
