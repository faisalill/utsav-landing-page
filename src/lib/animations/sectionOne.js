import { animationStore } from '$lib/stores/animations.js'
import gsap, { Expo } from 'gsap'

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
const starsDuration = 4.0;

export function sectionOneAnimation(cameraRef, bloomPass) {

  bloomPass.strength = 0;

  gsap.fromTo(cameraRef.position, {
    x: cameraStart.x,
    y: cameraStart.y,
    z: cameraStart.z
  }, {
    x: cameraEnd.x,
    y: cameraEnd.y,
    z: cameraEnd.z,
    duration: starsDuration,
    ease: 'none',
    repeat: -1
  })

  gsap.fromTo(bloomPass, {
    strength: 0.0
  }, {
    strength: 6.0,
    duration: starsDuration,
    ease: 'expo.in',
    repeat: -1
  }
  )
}
