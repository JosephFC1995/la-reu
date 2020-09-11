<template>
  <div class="__perfil_page">
    <div class="__page_content px-3 pt-3">
      <navavatar />
      <div class="__list_menus mt-4">
        <ul class="__menu">
          <li class="_item">
            <span>
              Mis direcciones
            </span>
          </li>
          <li class="_item">
            <span>
              Datos personales
            </span>
          </li>
          <li class="_item">
            <span>
              Mis cotizaciones
            </span>
          </li>
        </ul>
      </div>
      <q-btn
        label="Cerrar sesión"
        color="primary"
        class="full-width __button _transparent mt-3"
        :to="{ name: 'login' }"
      />
    </div>
  </div>
</template>

<script>
import navavatar from "components/header/nav-avatar-perfil.vue";

export default {
  components: {
    navavatar
  }
};
</script>

<style lang="scss">
.__menu {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  ._item {
    color: #292929;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
}
</style>
