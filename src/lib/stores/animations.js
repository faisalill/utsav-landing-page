import { writable } from "svelte/store";

export const animationStore = writable({
  startIntroAnimation: false,
  isSectionOneAnimated: false
})
