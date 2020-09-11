<template>
  <div class="__thanks_page">
    <div class="__page_content center-x-y">
      <div class="w-100">
        <img
          src="statics/check_b.png"
          style="width:30vw;max-width:150px;"
          class="mb-3 q-mx-auto block"
        />
        <h6 class="text-center">
          Cotización solicitada con éxito
        </h6>
        <p class="__parr text-center">
          Un agente de ventas se estará comunicando contigo en un plazo no mayor
          a 24 horas
        </p>
        <div class="__group mb-3 mt-4 pb-6">
          <q-btn
            label="Aceptar"
            color="primary"
            class="full-width __button _primary"
            :to="{ name: 'dashboard' }"
            replace
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.__thanks_page {
  .__page_content {
    padding: 0 1rem;
    h6 {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 600;
      color: #292929;
      font-size: 1.5rem;
    }
    .__parr {
      margin-bottom: 2rem;
      color: #292929;
    }
  }
}
</style>
