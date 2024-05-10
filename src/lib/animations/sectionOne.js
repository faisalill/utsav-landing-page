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
const starsDuration = 4.0;

function daysUntilMay17th() {
  // Get today's date
  const today = new Date();

  // Create a date object for May 15th of the current year
  const targetDate = new Date(today.getFullYear(), 4, 17); // Month is zero-indexed (May = 4)

  // Calculate the difference in milliseconds
  const timeDifference = targetDate.getTime() - today.getTime();

  // Convert milliseconds to days and round down to the nearest whole day
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

function getTimeToTomorrowMidnight() {
  // Get the current date
  const now = new Date();

  // Create a new Date object representing tomorrow's midnight (00:00:00)
  const tomorrowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  // Calculate the difference in milliseconds
  const timeDiffMs = tomorrowMidnight.getTime() - now.getTime();

  // Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor((timeDiffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiffMs / 1000) % 60);

  // Return an object with the calculated time difference
  return {
    hours,
    minutes,
    seconds,
  };
}
export function sectionOneAnimation(cameraRef, bloomPass, document) {
  document.querySelector('#countdown-days').innerHTML = `${daysUntilMay17th()}`;
  document.querySelector('#countdown-hours').innerHTML = `${getTimeToTomorrowMidnight().hours}`;
  document.querySelector('#countdown-minutes').innerHTML = `${getTimeToTomorrowMidnight().minutes}`
  document.querySelector('#countdown-seconds').innerHTML = `${getTimeToTomorrowMidnight().seconds}`

  setInterval(() => {
    document.querySelector('#countdown-seconds').innerHTML = `${getTimeToTomorrowMidnight().seconds}`
  }, 1000)


  setInterval(() => {
    document.querySelector('#countdown-minutes').innerHTML = `${getTimeToTomorrowMidnight().minutes}`
  }, 60000)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hiddenn");
  hiddenElements.forEach((el) => observer.observe(el));

  cameraRef.position.x = cameraStart.x
  cameraRef.position.y = cameraStart.y
  cameraRef.position.z = cameraStart.z

  let textWrapper = document.querySelector("#intro-theme-text");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  textWrapper = document.querySelector("#intro-date-text");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


  animationStore.subscribe((value) => {

    if (value.startIntroAnimation && !value.isSectionOneAnimated) {
      let tl = gsap.timeline()
      bloomPass.strength = 0; tl.fromTo(cameraRef.position, {
        x: cameraStart.x, y: cameraStart.y,
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

      const fogClearanceTime = 2.5;

      tl.to("#fog", fogClearanceTime, {
        opacity: 0
      })

      tl.to("#logo-container", {
        opacity: 1,
        onComplete: () => {
          animationStore.update((value) => {
            return {
              ...value,
              isSectionOneAnimated: true
            }
          })
        }
      }, `-=${fogClearanceTime - 0.5}`)

      tl.fromTo("#navbar-wrapper", {
        opacity: 0,
        y: 100

      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
      })


      tl.fromTo("#nav-logo-text", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
      })

      tl.fromTo("#nav-link-wrapper .link", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut,
        stagger: 0.1
      })

      tl.fromTo("#intro-text-utsav", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
      })

      tl.fromTo("#utsav-logo", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut,
        onComplete: () => {

          const introTextTl = gsap.timeline({
            repeat: -1,
          });

          introTextTl.fromTo("#intro-theme-text .letter", {
            opacity: 0,
            translateY: 100,
          }, {
            opacity: 1,
            y: 0,
            stagger: 0.2
          })

          introTextTl.to("#intro-theme-text .letter", {
            opacity: 0,
            stagger: 0.1
          })

          introTextTl.fromTo("#intro-date-text .letter", {
            opacity: 0,
            translateY: 100,
          }, {
            opacity: 1,
            translateY: 0,
            stagger: 0.2
          }, '-=2')

          introTextTl.to("#intro-date-text .letter", {
            opacity: 0,
            stagger: 0.2
          })
        }
      })

      tl.to(".intro-text", {
        opacity: 1
      })

      tl.fromTo(".countdown-param", 2, {
        opacity: 0,
      }, {
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeInOut
      })

      tl.fromTo(".br", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
      })

      tl.fromTo("#events", {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut
      })

    }
  })

}
