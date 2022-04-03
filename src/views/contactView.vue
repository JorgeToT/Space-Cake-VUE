<template>
  <section>
    <h1>Envianos tu pregunta</h1>
    <form action="">
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Correo" />
      <textarea placeholder="Mensaje"></textarea>
      <buttonBlue nameButton="Enviar" />
    </form>
    <div style="width: 100%">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Blvrd%20Toluca%20Metepec%20400%20Nte,%20Coaxustenco,%2052141%20Metepec,%20M%C3%A9x.+(Space%20Cake)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.gps.ie/marine-gps/">navigation gps</a></iframe
      >
    </div>
  </section>
  <footer>
    <info />
  </footer>
</template>

<script>
import info from "@/components/info.vue";
import buttonBlue from "@/components/botones.vue";

export default {
  name: "contactView",
  components: {
    info,
    buttonBlue,
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px;
  margin: 20px 0;
  font-size: 32px;
}
input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
}
textarea {
  width: 100%;
  margin: 10px 0 30px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
}
form {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 30px;
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>