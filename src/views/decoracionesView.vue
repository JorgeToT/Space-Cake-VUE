<template>
  <h1>Decoraciones</h1>
  <section>
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbcero-00814555972262545.png"
      decoration="Vela número 0"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbuno-012648187863011.png"
      decoration="Vela número 1"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbdos-0795576026567992.png"
      decoration="Vela número 2"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbtres-0517870075776181.png"
      decoration="Vela número 3"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbcuatro-00735871130943238.png"
      decoration="Vela número 4"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbcinco-00679737706985202.png"
      decoration="Vela número 5"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbseis-0987644503818659.png"
      decoration="Vela número 6"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbsiete-0954998136011417.png"
      decoration="Vela número 7"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbocho-00457542231519493.png"
      decoration="Vela número 8"
      precio="$15.00"
    />
    <decoration
      img="https://file.adomicil.io/esperanza.tr3sco.net/_files/images/product/thumbnueve-0267728109037377.png"
      decoration="Vela número 9"
      precio="$15.00"
    />
  </section>
  <footer>
    <info />
  </footer>
</template>

<script>
import info from "@/components/info.vue";
import decoration from "@/components/decoration.vue";

export default {
  name: "pastelesView",
  components: {
    info,
    decoration,
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