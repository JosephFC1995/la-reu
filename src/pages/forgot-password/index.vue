<template>
  <div class="__forgot_password_page">
    <div class="__background_picture">
      <img src="~assets/background-image.png" class="__background--image" />
      <div class="__background--opacity"></div>
    </div>
    <div class="__page_content center-x-y">
      <div class="w-100">
        <img
          src="~assets/la-reu-logo.png"
          style="width:30vw;max-width:150px;"
          class="mb-3 q-mx-auto block"
        />
        <div class="__form_content">
          <q-form @submit="onSubmit" @reset="onReset" class="px-3 __form_custom">
            <q-input filled v-model="email" label="Ingresa tu correo" lazy-rules class="mb-4" />

            <div class="mt-3">
              <q-btn
                label="Recuperar contraseña"
                type="submit"
                color="primary"
                class="full-width __button _primary"
              />
            </div>
          </q-form>

          <div class="__text-parr my-3 text-center text-white">
            <router-link :to="{name: 'login'}" class="text-white">
              <p class="_link text-weight-bold">Ya recordaste tu cuenta</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "~assets/la-reu-logo.png",
      email: null,
      password: null,
      isPwd: true,
      accept: false
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "check",
        message: "Submitted"
      });
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>

<style lang="scss">
body {
  .__form_content {
    padding: 0 1rem;
  }
}
</style>