<script>
  import { T, useFrame } from "@threlte/core";
  import { useTexture, InstancedMesh, Instance } from "@threlte/extras";
  import { DoubleSide, Color } from "three";

  const map = useTexture("/star.png");

  const starsCount = 400;
  let stars = [];
  const starColors = ["#f0c74f", "#6C9897", "#ff0000", "#ffffff", "#112d28"];

  function randomGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      position: [
        randomGenerator(-20, 20),
        randomGenerator(-10, 10),
        randomGenerator(-10, 10),
      ],
      scaleX: 15,
      color: new Color(starColors[Math.floor(randomGenerator(0, 5))])
        .convertSRGBToLinear()
        .multiplyScalar(3.5),
      speed: randomGenerator(10, 50),
    });
  }

  useFrame((_, delta) => {
    stars.forEach((star) => {
      star.position[0] += (star.speed + delta) * 0.1;
      if (star.position[0] > 50) {
        star.position[0] = -0;
      }
    });
    stars = stars;
  });
</script>

{#await map then value}
  <InstancedMesh limit={starsCount} range={starsCount}>
    <T.PlaneGeometry />
    <T.MeshStandardMaterial side={DoubleSide} alphaMap={value} transparent />

    {#each stars as star}
      <Instance
        position={[star.position[0], star.position[1], star.position[2]]}
        scale={[star.scaleX, 0.05, 1]}
        color={star.color}
      />
    {/each}
  </InstancedMesh>
{/await}
