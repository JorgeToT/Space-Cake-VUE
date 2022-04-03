<template>
  <div>
    <img :src="img" alt="" />
    <span>{{ decoration }}</span>
    <span>{{ precio }}</span>
    <buttonBlue nameButton="Añadir al carrito" />
  </div>
</template>

<script>
import buttonBlue from "@/components/botones.vue";

export default {
  name: "decoration",
  components: {
    buttonBlue,
  },
  props: {
    img: String,
    decoration: String,
    precio: String,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  margin: 20px auto;
  padding: 20px 20px;
  border-radius: 10%;
}
span {
  font-size: 20px;
}
div span:nth-child(3) {
  margin: 15px;
}
div img {
  width: 85%;
}
div:hover {
  box-shadow: inset 0px 0px 100px -100px rgba(0, 0, 0, 0.5);
  transform: scale(105%);
}
@media (max-width: 450px) {
  div,
  span {
    margin: 0;
  }
}
</style>