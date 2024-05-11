<script>
  import { Canvas } from "@threlte/core";
  import { useProgress } from "@threlte/extras";
  import Scene from "./Scene.svelte";
  import "../../app.css";
  import { animationStore } from "$lib/stores/animations.js";
  import Main from "./Main.svelte";

  const { progress } = useProgress();

  $: {
    if ($progress == 1) {
      animationStore.update((value) => {
        return {
          ...value,
          startIntroAnimation: true,
        };
      });
    }
  }
</script>

<div class="w-screen h-screen relative z-0" id="canvas-wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<div
  class="w-screen h-screen bg-white absolute top-0 left-0 z-30 scale-0 pointer-events-none"
  id="fog"
></div>

<div
  class="w-screen absolute opacity-0 top-0 left-0 z-20 text-white bg-black"
  id="logo-container"
>
  <Main />
</div>

<div
  class="w-screen h-screen absolute top-0 left-0 z-40 flex justify-center items-center text-6xl text-white text-opacity-70 font-voyage_bold"
  id="warp-btn-wrapper"
>
  <button class="transition-all ease-in-out duration-500">
    {$progress * 100}%
  </button>
</div>

<style>
  #logo-container {
    perspective: 1000px;
    background-image: url("/vintage-bg.jpg");
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
  }
  #logo {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
</style>
