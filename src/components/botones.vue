<template>
  <button>
    <span>{{ nameButton }}</span>
    <div class="liquid"></div>
  </button>
</template>


<script>
export default {
  name: "buttonBlue",
  props: {
    nameButton: String,
  },
};
</script>

<style scoped>
button {
  position: relative;
  padding: 12px 36px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  width: 250px;
}

button span {
  position: relative;
  color: #fff;
  font-family: Arial;
  letter-spacing: 8px;
  z-index: 1;
}

button .liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: 200px;
  background: #4973ff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

button .liquid::after,
button .liquid::before {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #fff;
}

button .liquid::before {
  border-radius: 45%;
  background: rgba(20, 20, 20, 1);
  animation: animate 5s linear infinite;
}

button .liquid::after {
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 10s linear infinite;
}

button:hover .liquid {
  top: -120px;
}

button:hover {
  transform: scale(115%);
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>