<script>
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import "../../app.css";
</script>

<div class="w-screen h-screen relative z-0" id="canvas-wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<div
  class="w-screen h-screen bg-white absolute top-0 left-0 z-30 scale-0"
  id="fog"
></div>

<div
  class="w-screen absolute opacity-0 top-0 left-0 z-20 text-white flex justify-center items-center bg-black"
  id="logo-container"
>
  <img src="/utsav-logo.png" id="logo" alt="LOGO" />
</div>

<style>
  #logo-container {
    perspective: 1000px;
  }
  #logo {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
</style>
