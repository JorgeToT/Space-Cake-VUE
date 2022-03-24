<template>
  <nav>
    <router-link to="/">
      <img alt="Vue logo" src="./assets/logo.png"
    /></router-link>
    <div>
      <router-link to="/"><buttonBlue nameButton="Home" /></router-link>
      <router-link to="/pastelesView"
        ><buttonBlue nameButton="Pasteles"
      /></router-link>
      <router-link to="/decoracionesView"
        ><buttonBlue nameButton="Decoraciones"
      /></router-link>
      <router-link to="/adminView"
        ><buttonBlue nameButton="Admin"
      /></router-link>
    </div>
    <router-link to="/cartView"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-shopping-cart"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" /></svg
    ></router-link>
  </nav>
  <router-view />
</template>

<script>
import buttonBlue from "@/components/botones.vue";

export default {
  name: "App",
  components: {
    buttonBlue,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
}

img {
  width: 140px;
  margin: 10px 20px;
  border-radius: 70%;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: rgb(0, 0, 0);
}
nav div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: rgb(0, 0, 0);
}

nav a {
  padding: 0 20px;
  margin: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active button {
  height: 50px;
}
</style>