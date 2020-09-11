<template>
  <div class="__dashboard_page">
    <div class="__page_content px-3 pt-3">
      <navavatar />
      <div class="__list_d mt-4">
        <list
          v-for="(list, index) in lists"
          :key="index"
          :picture="list.img"
          :title="list.title"
          :description="list.description"
          :name="list.name"
        />
      </div>
      <div class="__text_parr">
        <h4>
          ¿Estas pensando
          <br />organizar una reu?
        </h4>
      </div>
      <div class="__group mb-3">
        <q-btn
          label="Cotiza con nosotros"
          color="primary"
          class="full-width __button _primary"
          :to="{name: 'cotizacion'}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import navavatar from "components/header/nav-avatar.vue";
import list from "components/lists/list.vue";
export default {
  data() {
    return {
      lists: [
        {
          img: "product.png",
          title: "Cocktail",
          description: "Tragos o bebidas personalizadas",
          name: "services-cocktail"
        },
        {
          img: "product.png",
          title: "Servicio de Cheff",
          description: "Comida con gustos personalizados",
          name: "services-chef"
        },
        {
          img: "product.png",
          title: "Servicio de DJ",
          description: "El estilo de música ideal para tu evento",
          name: "services-dj"
        },
        {
          img: "product.png",
          title: "Servicio de Limpieza",
          description: "No te preocupes de la labor post fiesta",
          name: "services-limpieza"
        }
      ]
    };
  },
  components: {
    navavatar,
    list
  },
  methods: {
    generateKey() {
      var length = 10,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  }
};
</script>

<style lang="scss">
.__text_parr {
  color: #292929;
  text-align: center;
  h4 {
    margin: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>