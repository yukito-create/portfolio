"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// three.jsオブジェクトのcanvasコンポーネント
export default function ThreeObject() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    /**
     * 描画に必要な3要素の作成
     */
    // 1.レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // 2.シーンを作成
    const scene = new THREE.Scene();
    
    // 3.カメラを作成
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      1,
      10000
    );
    
    camera.position.set(0, 0, 1000);
    scene.add(camera);
    
    /**
     * オブジェクトの作成
     */
    const boxGeometry = new THREE.BoxGeometry(250, 250, 250);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    const box = new THREE.Mesh(boxGeometry, material);

    scene.add(box);

    /**
     * ライトの作成
     */
    const ambientLight = new THREE.AmbientLight(0xffffff);
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    ambientLight.intensity = 0.5;
    directionalLight.intensity = 4;
    directionalLight.position.set(1, 1, 1);

    scene.add(ambientLight, directionalLight);

    /**
     * アニメーション
     */
    tick();

    function tick() {
      requestAnimationFrame(tick);

      box.rotation.x += 0.01;
      box.rotation.y += 0.01;

      // レンダリング
      renderer.render(scene, camera);
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};