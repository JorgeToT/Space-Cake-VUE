<template>
  <section>
    <div class="home"></div>
  </section>
</template>

<script>
import buttonBlue from "@/components/botones.vue";

export default {
  name: "home",
  components: {
    buttonBlue,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 57vh;
  color: white;
  background-image: url("../assets/home.png");
  background-size: cover;
  background-position: center;
}
div {
  animation: yourAnimation 3s ease 0s infinite normal none;
}
section {
  background-color: black;
}

@keyframes yourAnimation {
  0% {
    transform: translate(0, 0px);
  }
  25% {
    transform: translate(0, 10px);
  }
  50% {
    transform: translate(0, -10px);
  }
  75% {
    transform: translate(0, 0px);
  }
}
</style>