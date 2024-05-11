<script>
  import { T, useThrelte, useRender } from "@threlte/core";
  import { useProgress, OrbitControls } from "@threlte/extras";
  import Stars from "./Stars.svelte";
  import { Vector3, Raycaster, Vector2, PMREMGenerator, Color } from "three";
  import { onMount } from "svelte";
  import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
  import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
  import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
  import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
  import { sectionOneAnimation } from "$lib/animations/sectionOne.js";

  let cameraPosition = new Vector3(14.8835, -0.43037, 0.01861);
  let sphereRef,
    intersectionPoint,
    planeRef,
    spaceShipRef,
    environmentMap,
    cameraRef;
  let { camera, renderer, scene } = useThrelte();
  let composer = new EffectComposer(renderer);
  let bloomPass;
  let isBloomPassAnimated;
  let animatedParams = {
    speed: 0,
    scale: 0,
  };

  let pmremGenerator = new PMREMGenerator(renderer);

  const params = {
    bloomStrength: 0.3,
    bloomThreshold: 0,
    bloomRadius: 0,
  };

  useRender(() => {
    scene.background = null;
    environmentMap = pmremGenerator.fromScene(scene, 0, 0.1, 1000);
    scene.background = new Color("#598889").multiplyScalar(0.05);
    composer.render();
  });

  onMount(async () => {
    // const dat = await import("dat.gui");
    // const gui = new dat.GUI();

    composer.setSize(window.innerWidth, window.innerHeight);

    let renderPass = new RenderPass(scene, camera.current);
    composer.addPass(renderPass);

    bloomPass = new UnrealBloomPass(
      new Vector2(window.innerWidth, window.innerHeight),
      params.bloomStrength,
      params.bloomThreshold,
      params.bloomRadius,
    );

    // gui.add(params, "bloomStrength", 0.0, 10.0).onChange(function (value) {
    //   bloomPass.strength = Number(value);
    // });
    //
    // gui.add(params, "bloomThreshold", 0.0, 10.0).onChange(function (value) {
    //   bloomPass.threshold = Number(value);
    // });
    //
    // gui.add(params, "bloomRadius", 0.0, 10.0).onChange(function (value) {
    //   bloomPass.radius = Number(value);
    // });

    composer.addPass(bloomPass);

    let outputPass = new OutputPass();
    composer.addPass(outputPass);

    sectionOneAnimation(cameraRef, bloomPass, document);
  });

  function randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }
</script>

<T.PerspectiveCamera
  rotation={[1.56867, 1.414108, -1.568643]}
  makeDefault
  bind:ref={cameraRef}
>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={2}
  position={[0, 15, 0]}
  castShadow
  shadow.bias={-0.0001}
/>
<T.AmbientLight intensity={2} />

<Stars />
