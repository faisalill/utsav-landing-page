import gsap from 'gsap'
import anime from 'animejs'

function daysUntilMay17th() {
  const today = new Date();

  // Get today's date
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

function splitInLetters(element, document) {
  const el = document.querySelector(element);
  el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

function splitInLettersV2(element, document) {
  const el = document.querySelector(element);
  el.innerHTML = el.textContent.replace(/\S/g, "<span class='split-letter'>$&</span>");
}

export function animationHandler(document) {

  splitInLetters('#intro-text-bmsce', document)
  splitInLetters('#intro-text-bmsce-info', document)
  splitInLettersV2('#intro-theme-text', document)
  splitInLettersV2('#intro-date-text', document)

  const introTimeline = anime.timeline({
    easing: 'easeInOutSine'
  })

  introTimeline.add({
    targets: '#intro-text-bmsce .letter',
    bottom: [-100, 0],
    opacity: [0, 1],
    scale: [0.4, 3],
    easing: 'easeInOutExpo',
    delay: (el, i) => {
      return i * 200
    }
  })

  introTimeline.add({
    targets: '#intro-text-bmsce-info .letter',
    bottom: [-100, 0],
    opacity: [0, 1],
    scale: [0.4, 3],
    easing: 'easeInOutExpo',
    delay: (el, i) => {
      return i * 50
    }
  })


  introTimeline.add({
    targets: '#svg-utsav-text path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1500,
    easing: 'easeInOutSine',
    delay: (el, i) => { return i * 500 },
  })

  introTimeline.add({
    targets: '#intro-text-bmsce .letter',
    bottom: ['0', '100%'],
    opacity: [1, 0],
    delay: anime.stagger(100),
    duration: 1000,
    begin: () => {
      const exitTimeline = anime.timeline({
        duration: 200,
        easing: 'linear',

      })
      exitTimeline.add({
        targets: '#intro-text-bmsce-info .letter',
        opacity: [1, 0],
        bottom: ['0', '100%'],
        delay: anime.stagger(50),
      })
      exitTimeline.add({
        targets: '#svg-utsav-text path',
        bottom: ['0', '100%'],
        opacity: [1, 0],
        delay: anime.stagger(100)
      }, '-=500')
      exitTimeline.add({
        targets: '#intro-bars .intro-bar',
        bottom: ['0', '100%'],
        easing: 'easeInOutSine',
        begin: () => {

          anime({
            targets: '#theme p',
            opacity: [0, 1],
            bottom: [-100, 0],
            easing: 'easeInOutExpo',
          })

          anime({
            targets: '#theme h1',
            opacity: [0, 1],
            bottom: [-100, 0],
            easing: 'easeInOutExpo',
            delay: 500
          })

          anime({
            targets: '#events a',
            opacity: [0, 1],
            bottom: [-100, 0],
            easing: 'easeInOutExpo',
          })

          anime({
            targets: '#events h1',
            opacity: [0, 1],
            bottom: [-100, 0],
            easing: 'easeInOutExpo',
            delay: 500
          })

          anime({
            targets: '#br',
            opacity: [0, 1],
            translateY: [100, 0],
            easing: 'easeInOutExpo',
            delay: 1000
          })

          anime({
            targets: ".countdown-param",
            opacity: [0, 1],
            translateY: [100, 0],
            delay: anime.stagger(200),
            duration: 1000,
            delay: 1500,
            complete: () => {

              const introTextTl = gsap.timeline({
                repeat: -1,
              });

              introTextTl.fromTo("#intro-theme-text .split-letter", {
                opacity: 0,
                bottom: -20,
              }, {
                opacity: 1,
                bottom: 0,
                stagger: 0.2
              })


              introTextTl.to("#intro-theme-text .split-letter", {
                opacity: 0,
                stagger: 0.1
              })


              introTextTl.fromTo("#intro-date-text .split-letter", {
                opacity: 0,
                bottom: -20
              }, {
                opacity: 1,
                bottom: 0,
                stagger: 0.2
              }, '-=2')

              introTextTl.to("#intro-date-text .split-letter", {
                opacity: 0,
                stagger: 0.2
              })

            }
          })

          anime({
            targets: '#utsav-logo',
            translateY: [-100, 0],
            opacity: [0, 1],
            delay: 2000,
            complete: () => {
              anime({
                targets: '#svg-utsav-logo path',
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 5000,
                easing: 'easeInOutSine',
                delay: (el, i) => {
                  return (i * 500 - 2000)
                },
              })

              anime({
                targets: '#svg-utsav-logo path',
                fill: '#935506',
                duration: 2000,
                easing: 'easeInOutSine',
                delay: (el, i) => {
                  return i * 500 + 2000
                }
              })
            }
          })


          splitInLettersV2('#intro-text-utsav', document)

          anime({
            targets: '#intro-text-utsav .split-letter',
            bottom: [100, 0],
            opacity: [0, 1],
            delay: 1800,
            stagger: anime.stagger(100),
            complete: () => {
              document.body.style.overflowY = "scroll";
            }
          })

        },
        delay: anime.stagger(100),
        duration: 1000
      }, '-=800')
    }
  })


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

}
