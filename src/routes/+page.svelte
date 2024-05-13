<script>
  import App from "$lib/components/App.svelte";
  import Menu from "$lib/icons/Menu.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar-wrapper");
      navbar.style.top = `${window.scrollY}px`;
    });
  });
</script>

<div id="navbar-wrapper" class="z-20">
  <nav
    class="flex justify-around items-center bg-black text-white bg-opacity-70 h-20 md:h-28 backdrop-blur"
    id="navbar"
  >
    <div
      class="relative font-angel_raphsody text-5xl lg:text-7xl my-8 text-transparent bg-gradient-to-b from-amber-400 to-amber-800 bg-clip-text"
      id="nav-logo-text"
    >
      Utsav
    </div>
    <div id="nav-link-wrapper">
      <div class="flex gap-4" id="nav-links">
        <button
          on:click={(e) => {
            document.querySelector("#intro-text-utsav").scrollIntoView({
              behavior: "smooth",
            });
          }}
          class="link">HOME</button
        >
        <button
          on:click={(e) => {
            document
              .querySelector("#events")
              .scrollIntoView({ behavior: "smooth" });
          }}
          class="link">EVENTS</button
        >
        <button
          on:click={(e) => {
            document
              .querySelector("#theme")
              .scrollIntoView({ behavior: "smooth" });
          }}
          class="link">THEME</button
        >
        <button
          on:click={(e) => {
            document
              .querySelector("#about")
              .scrollIntoView({ behavior: "smooth" });
          }}
          class="link">ABOUT</button
        >
        <button
          on:click={(e) => {
            document
              .querySelector("#contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
          class="link">CONTACT US</button
        >
      </div>
      <button
        class="visible md:hidden text-2xl font-voyage_bold text-yellow-400"
        on:click={() => {
          document.querySelector("#responsive-nav-links").style.display;
          if (
            document.querySelector("#responsive-nav-links").style.display ==
            "block"
          ) {
            document.querySelector("#responsive-nav-links").style.display =
              "none";
          } else {
            document.querySelector("#responsive-nav-links").style.display =
              "block";
          }
        }}
      >
        <Menu />
      </button>
    </div>
  </nav>
  <div id="responsive-nav-links" class="hidden">
    <div
      class="flex text-xl flex-col justify-around items-center bg-black text-white bg-opacity-70 py-4 backdrop-blur gap-2"
    >
      <hr class="respo-hr" />
      <button
        on:click={(e) => {
          document.querySelector("#intro-text-utsav").scrollIntoView({
            behavior: "smooth",
          });
        }}
        class="link-resp">HOME</button
      >
      <hr class="respo-hr" />
      <button
        on:click={(e) => {
          document
            .querySelector("#events")
            .scrollIntoView({ behavior: "smooth" });
        }}
        class="link-resp">EVENTS</button
      >
      <hr class="respo-hr" />
      <button
        on:click={(e) => {
          document
            .querySelector("#theme")
            .scrollIntoView({ behavior: "smooth" });
        }}
        class="link-resp">THEME</button
      >
      <hr class="respo-hr" />
      <button
        on:click={(e) => {
          document
            .querySelector("#about")
            .scrollIntoView({ behavior: "smooth" });
        }}
        class="link-resp">ABOUT</button
      >
      <hr class="respo-hr" />
      <button
        on:click={(e) => {
          document
            .querySelector("#contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        class="link-resp">CONTACT US</button
      >
    </div>
  </div>
</div>

<div>
  <App />
</div>

<style>
</style>
