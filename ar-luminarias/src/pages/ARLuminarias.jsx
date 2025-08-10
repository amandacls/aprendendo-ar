import React from "react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
        <h2>OLPÀ ugadiua</h2>
      <model-viewer
        src="/lum01.glb"
        alt="modelo 3D"
        ar
        ar-modes="scene-viewer webxr quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
