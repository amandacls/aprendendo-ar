import React from "react";

function App() {
  return (
    <model-viewer
      src="/lum01.glb"
      alt="Astronaut Model"
      ar
      ar-modes="scene-viewer webxr quick-look"
      environment-image="neutral"
      auto-rotate
      camera-controls
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

export default App;
