<template>
  <div class="__page_content px-3 pt-3">
    <nava />
    <div class="__content_services">
      <h5 class="_title_services">Servicio de chef</h5>
      <p class="__parr_d">
        El servicio de cocktail cubre las bebidas y tragos que desees para la cantidad que definas en la cotización.
        <br />Ellos ya lo disfrutaron:
      </p>
    </div>
    <div class="__list_galery">
      <listitem v-for="(item, index) in 8" :key="index" />
    </div>
    <div class="__list_galery">
      <listitem v-for="(item, index) in 8" :key="index" />
    </div>
    <div class="__group mb-3">
      <q-btn
        label="Cotiza con nosotros"
        color="primary"
        class="full-width __button _primary"
        :to="{name: 'cotizacion-service'}"
      />
    </div>
  </div>
</template>

<script>
import nava from "components/header/nav.vue";
import listitem from "components/galery/item.vue";

export default {
  components: {
    nava,
    listitem
  }
};
</script>

<style lang="scss">
.__content_services {
  color: #282828;
  ._title_services {
    line-height: 1;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .__parr_d {
    font-weight: 300;
  }
}
.__list_galery {
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 0.5rem;
  .__li__im {
    margin-right: 1rem;
    height: 160px;
    width: 200px;
    overflow: hidden;
    flex: 0 0 160px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    .__img {
      height: 100%;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>