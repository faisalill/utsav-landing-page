<script>
  import Facebook from "$lib/icons/Facebook.svelte";
  import Instagram from "$lib/icons/Instagram.svelte";
  import LinkedIn from "$lib/icons/LinkedIn.svelte";
  import Twitter from "$lib/icons/Twitter.svelte";
  import UtsavLogo from "$lib/svgs/UtsavLogo.svelte";
</script>

<div id="main-wrapper relative" class="relative mt-24 md:mt-32">
  <div class="flex flex-col items-center mt-8">
    <h1 class="intro-text hover:scale-125 relative" id="intro-text-utsav">
      Utsav 24
    </h1>
    <div class="w-[250px] md:w-[500px] h-auto relative" id="utsav-logo">
      <UtsavLogo />
    </div>
    <div class="mt-8 md:mt-24">
      <h1
        class="intro-text absolute text-nowrap -translate-x-1/2 -translate-y-1/2"
        id="intro-theme-text"
      >
        Realms of Time
      </h1>
      <h1
        class="intro-text absolute text-nowrap -translate-x-1/2 -translate-y-1/2"
        id="intro-date-text"
      >
        17, 18, 19 - May 2024
      </h1>
    </div>
  </div>

  <div class="flex flex-col items-center gap-4">
    <div class="mt-8 md:mt-20 flex justify-center gap-4 md:gap-8">
      <div
        class="font-kenyan_bold text-gradient text-3xl md:text-7xl flex text-center gap-4"
        id="countdown"
      >
        <div class="countdown-param">
          <h2 id="countdown-days" class="font-angel_raphsody"></h2>
          <h4 class="text-xl md:text-4xl font-voyage_bold">Days</h4>
        </div>
        <div class="countdown-param">
          <h2 id="countdown-hours" class="font-angel_raphsody"></h2>
          <h4 class="text-xl md:text-4xl font-voyage_bold">Hours</h4>
        </div>
        <div class="countdown-param">
          <h2 id="countdown-minutes" class="font-angel_raphsody"></h2>
          <h4 class="text-xl md:text-4xl font-voyage_bold">Minutes</h4>
        </div>
        <div class="countdown-param">
          <h2 id="countdown-seconds" class="font-angel_raphsody"></h2>
          <h4 class="text-xl md:text-4xl font-voyage_bold">Seconds</h4>
        </div>
      </div>
    </div>

    <div
      class="bg-amber-900 br bg-opacity-90 h-2 w-1/2 rounded-xl realtive mt-2 md:mt-12"
      id="br"
    />

    <div class="flex flex-col items-center gap-4" id="events">
      <h1
        class="mt-4 md:mt-24 text-4xl md:text-8xl text-gradient font-angel_raphsody relative"
      >
        Events And Workshops
      </h1>
      <a
        href="https://registrations.bmsutsav.in/"
        class="font-voyage_bold text-2xl md:text-5xl bg-gradient-to-b mt-4 from-amber-400 to-amber-950 p-3 rounded-xl hover:cursor-pointer hover:scale-125 relative"
        id="explore-btn">EXPLORE EVENTS!!</a
      >
    </div>

    <div class="flex flex-col items-center" id="theme">
      <h1
        class="mt-4 md:mt-16 text-4xl md:text-8xl text-gradient font-angel_raphsody"
      >
        Theme
      </h1>
      <p
        class="font-voyage_bold text-xl md:text-3xl text-center px-4 md:px-72 text-black p-3 rounded-xl hover:cursor-pointer"
      >

Step into the intertwining threads of history and modernity at our youth festival, where the echoes of the past resound alongside the rhythms of the present. Journey through the civilizations of yore, immerse yourself in the vibrant tapestry of mythology, and witness the timeless tales that continue to shape our world today. Join us as we bridge the gap between past and present, weaving together the rich tapestry of human experience in a celebration of youth, culture, and heritage.      </p>
      <p
        class="font-voyage_bold text-xl md:text-3xl text-center px-4 md:px-72 text-black p-3 rounded-xl hover:cursor-pointer"
      >
        As a beacon of cultural festivity, Utsav -The Festival of Faith, is all set to be a platform where past and present coalesce, offering a unique space for students to showcase their talents across music, dance, literature, and more. In embracing the theme "Realms of Time," the 2024 edition of Utsav invites participants to traverse the continuum of human creativity, from the whispers of ancient civilizations to the contemporary beats of today's world.
      </p>
    </div>

    <div class="flex flex-col items-center gap-4" id="about">
      <h1
        class="mt-16 text-4xl md:text-8xl text-gradient font-angel_raphsody hiddenn"
      >
        About Us
      </h1>
      <img src="/bmsce.webp" class="rounded-full h-auto w-52 hiddenn" />
      <p
        class="font-voyage_bold text-xl md:text-3xl text-center hiddenn px-4 md:px-72 text-black p-3 rounded-xl hover:cursor-pointer"
      >
        Founded in 1946, B. M. S. College of Engineering (BMSCE) stands as an early trailblazer in engineering education. Envisioned by the late Sri B. M. Sreenivasaiah, the college was established in Basavanagudi, with the ambition of becoming a cornerstone of higher education in Bengaluru. This dream was passionately pursued by his son, the late Sri B. S. Narayan, who was committed to providing quality education to students globally.

      </p>
      <p
        class="font-voyage_bold text-xl md:text-3xl md:text-3xl text-center px-4 md:px-72 text-black hiddenn p-3 rounded-xl hover:cursor-pointer"
      >
        
Today, BMSCE has grown to offer 18 undergraduate and 13 postgraduate programs across various engineering and management fields. The college boasts a team of highly qualified faculty and staff, dedicated to delivering outstanding education while keeping pace with the future.

      </p>
    </div>

    <div class="flex flex-col items-center gap-4">
      <h1
        class="mt-16 text-4xl md:text-8xl text-gradient font-angel_raphsody hiddenn"
      >
        Our Sponsors
      </h1>
      <p
        class="font-voyage_bold text-2xl md:text-3xl text-center px-72 text-black p-3 hiddenn rounded-xl hover:cursor-pointer"
      >
        SPONSORS.......
      </p>
    </div>

    <div class="flex flex-col items-center gap-4" id="contact">
      <h1
        class="mt-16 text-4xl md:text-8xl text-gradient hiddenn font-angel_raphsody"
      >
        Get In Touch
      </h1>
      <div class="flex flex-col items-center gap-4">
        <div class="flex gap-8 mt-4 text-black hiddenn">
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
        <div
          class="flex-col items-center text-center font-voyage_bold text-xl md:text-4xl text-black"
        >
          <h1 class="text-xl md:text-4xl hiddenn">
            B. M. S. College of Engineering
          </h1>
          <h4 class="hiddenn">
            #1908, Bull Temple Road, Basavanagudi, Bangalore - 560029
          </h4>
          <a class="hiddenn" href="mailto:utsav@bmsce.ac.in"
            >utsav@bmsce.ac.in</a
          >
          <h3 class="hiddenn">© UTSAV 2024</h3>
        </div>

        <div class="flex flex-col items-center">
          <h1
            class="mt-16 text-4xl md:text-8xl text-gradient hiddenn font-angel_raphsody"
          >
            Patrons
          </h1>
          <div class="flex flex-wrap gap-8 justify-center mt-4 hiddenn">
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. B.S. Ragini Narayan</h2>
              <h4 class="patron-info">Donor Trustee & Chairperson, BMSET</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. P. Dayananda Pai</h2>
              <h4 class="patron-info">
                Chairperson, BMSCE & Life Trustee, BMSET
              </h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Shri Aviram Sharma</h2>
              <h4 class="patron-info">Trustee, BMSET</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Shri Ravi Venkatesam</h2>
              <h4 class="patron-info">Trustee, BMSET</h4>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h1
            class="mt-16 text-4xl md:text-8xl text-gradient hiddenn font-angel_raphsody"
          >
            Advisory Committee
          </h1>
          <div class="flex flex-wrap gap-8 justify-center mt-4 hiddenn">
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. S. Muralidhara</h2>
              <h4 class="patron-info">Principal, BMSCE</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Bheemsha Aray</h2>
              <h4 class="patron-info">Vice Principal</h4>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h1
            class="mt-16 text-4xl md:text-8xl text-gradient hiddenn font-angel_raphsody"
          >
            Faculty Core Committee
          </h1>
          <div class="flex flex-wrap gap-8 justify-center mt-4 hiddenn">
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Rathanraj KJ</h2>
              <h4 class="patron-info">Working Chairman</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Prof. Namratha M</h2>
              <h4 class="patron-info">Organizing Secretary</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Umavathi M</h2>
              <h4 class="patron-info">Joint Secretary</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Sujatha N</h2>
              <h4 class="patron-info">Treasurer</h4>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Rajeshwari B S</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Dr. Niranjan K R</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Prof. Saritha A N</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Prof. Surabhi S</h2>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <h1
            class="mt-16 text-4xl md:text-8xl text-gradient hiddenn font-angel_raphsody"
          >
            Student Core Committee
          </h1>
          <div class="flex flex-wrap gap-8 justify-center mt-4 hiddenn">
            <div class="patron-wrapper">
              <h2 class="patron-name">Chandan N B</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Nikhithasri Dara</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Tanmay Rajan</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Vidhya M Hegde</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Nihal B R</h2>
            </div>
            <div class="patron-wrapper">
              <h2 class="patron-name">Niriksha C Bhat</h2>
            </div>
          </div>
        </div>
        <div class="h-20"></div>
      </div>
    </div>
  </div>
</div>
