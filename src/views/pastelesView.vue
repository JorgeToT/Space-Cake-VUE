<template>
  <h1>Pasteles</h1>
  <section>
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/imagen-8-0683851078005438.png"
      sabor="Crepe Cake Conejitos"
      precio="$360"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/opera-0257306277406079.png"
      sabor="Pastel Ópera"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumb3-0503600571539067.jpg"
      sabor="Cookies and Cream"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/pastel-irlandes-0784238148380182.png"
      sabor="Pastel Irlandes"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbmalteadacherrymoka2-0781650975244889.png"
      sabor="Malteada Cherry Moca"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/arcoiris-0794771494713971.jpg"
      sabor="Pastel de Arcoiris"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/4chocolateec-028136450996686.png"
      sabor="Pastel 4 Leches"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/limonchello-0631554125636608.jpg"
      sabor="Pastel Limonchello"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/e-commers3-0129622215465467.png"
      sabor="Pastel Da Vinci"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/e-commers2-0865092043236407.png"
      sabor="Pastel Van Gogh"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/diablo-0227500077908626.jpg"
      sabor="Pastel Diablo"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/azucena-00866644871824721.jpg"
      sabor="Pastel Azucena"
      precio="$330"
    />
    <cake
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/aromadecafe-0191518594600036.jpg"
      sabor="Pastel Aroma de Café"
      precio="$330"
    />
  </section>
  <footer>
    <info />
  </footer>
</template>

<script>
import cake from "@/components/cakes.vue";
import info from "@/components/info.vue";

export default {
  name: "pastelesView",
  components: {
    cake,
    info,
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  margin: 0 18%;
}
h1 {
  background-color: black;
  color: white;
  padding: 20px;
  margin: 20px 0;
}
footer {
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 50px;
}
@media (max-width: 450px) {
  section {
    margin: 0;
  }
}
</style>