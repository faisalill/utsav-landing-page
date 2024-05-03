import { animationStore } from '$lib/stores/animations.js'
import gsap, { Expo } from 'gsap'
import { document } from 'postcss';

const cameraStart = {
  x: 62.581234,
  y: -1.8095,
  z: 0.07825
}

const cameraEnd = {
  x: 8.4657,
  y: -0.2447,
  z: 0.01058
}

const starBloomPassStartValue = 0.0;
const starBloomPassEndValue = 6.0;
const starsDuration = 3.5;

export function sectionOneAnimation(cameraRef, bloomPass, document) {
  let tl = gsap.timeline()

  bloomPass.strength = 0;

  tl.fromTo(cameraRef.position, {
    x: cameraStart.x,
    y: cameraStart.y,
    z: cameraStart.z
  }, {
    x: cameraEnd.x,
    y: cameraEnd.y,
    z: cameraEnd.z,
    duration: starsDuration,
    ease: 'none',
  })

  tl.fromTo(bloomPass, {
    strength: 0.0
  }, {
    strength: 6.0,
    duration: starsDuration,
    ease: 'expo.in',
  }, `-=${starsDuration}`)

  tl.set("#fog", { scale: 1 })

  const fogClearanceTime = 4;

  tl.to("#fog", fogClearanceTime, {
    opacity: 0
  })

  tl.to("#logo-container", {
    opacity: 1
  }, `-=${fogClearanceTime - 0.5}`)

}
