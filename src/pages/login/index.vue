<template>
  <div class="__login_page">
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
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="px-3 __form_custom"
          >
            <q-input
              filled
              v-model="email"
              label="Ingresa tu correo"
              lazy-rules
              class="mb-4"
            />

            <q-input
              filled
              :type="isPwd ? 'password' : 'text'"
              v-model="password"
              label="Ingresa tu contraseña"
              lazy-rules
              class="mb-4"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div class="mt-3">
              <q-btn
                label="Enviar"
                type="submit"
                color="primary"
                :to="{ name: 'dashboard' }"
                class="full-width __button _primary"
                replace
              />
            </div>
          </q-form>

          <div class="__text-parr my-3 text-center text-white">
            <router-link :to="{ name: 'forgot-password' }" class="text-white">
              <p class="_link text-weight-bold">¿Te olvidaste tu contraseña?</p>
            </router-link>
            <p>Tambien puedes ingresar con:</p>
          </div>
          <div class="__group_butt row px-3">
            <div class="col-6 pr-1">
              <q-btn
                label="Facebook"
                type="submit"
                color="primary"
                class="w-100 __button _facebook"
              />
            </div>
            <div class="col-6 pl-1">
              <q-btn
                label="Instagram"
                type="submit"
                color="primary"
                class="w-100 __button _instagram"
              />
            </div>
          </div>
          <div class="__text-parr my-3 text-center text-white">
            <p>
              ¿No tienes cuenta?
              <!-- <router-link :to="{name: 'register'}" class="text-white"> -->
              <span class="_link text-weight-bold">Registrate aqui</span>
              <!-- </router-link> -->
            </p>
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
