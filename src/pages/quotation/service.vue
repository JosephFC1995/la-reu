<template>
  <div class="__cotizacion_page">
    <div class="__page_content px-3 pt-3">
      <nava />
      <div class="__content_services">
        <h5 class="_title__">
          Ingresa los datos de tú próxima reu
        </h5>
        <p class="__parr_d">
          Completa los requerimientos para solicitar una cotización
        </p>
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="__form_custom _alter">
        <div class="__input_group">
          <span class="__label">Define cantidad de personas</span>
          <q-slider
            v-model="range"
            :min="15"
            :max="50"
            label-always
            class="mt-4"
            color="#282828"
          />
        </div>
        <div class="__input_group">
          <span class="__label">Selecciona la fecha</span>
          <q-input
            filled
            v-model="date"
            placeholder="Ingresa tu correo"
            mask="date"
            :rules="['date']"
            lazy-rules
            class="mb-2"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="date"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="__input_group">
          <span class="__label">Dejanos algún comentario adicional</span>
          <q-input
            filled
            v-model="comentary"
            placeholder="Cocktails o bebidas que prefieres"
            lazy-rules
            class="mb-2"
          />
        </div>
      </q-form>
      <div class="__group mb-3 mt-4 pb-6">
        <q-btn
          label="Continuar"
          color="primary"
          class="full-width __button _primary"
          :to="{ name: 'dashboard' }"
          replace
        />
      </div>
    </div>
    <div class="__button_floating">
      <div class="__content_" @click="show_modal_location = true">
        <h1 class="__title_p">Elige una dirección</h1>
        <div class="__parr">
          <q-icon name="location_on" class="cursor-pointer" />
          <p class="__">{{ location }}</p>
        </div>
      </div>
    </div>
    <q-dialog
      v-model="show_modal_location"
      full-height
      full-width
      :maximized="true"
    >
      <q-card class="column full-height" style="width: 300px">
        <q-card-section class="__header">
          <nava @click_back="show_modal_location = !show_modal_location" />
        </q-card-section>
        <GmapMap
          class="__map"
          ref="mapRef"
          :center="map"
          :zoom="zoom_map"
          style="width: 100%; height: 500px"
          :options="options_map"
          @center_changed="resetCenterChange"
        >
          <div class="__ico_maker">
            <img src="statics/maker.png" class="__maker" />
          </div>
          <!-- <maker :lat="select_location.lat" :lng="select_location.lng" /> -->
        </GmapMap>
        <div class="button__map">
          <q-btn
            label="Seleccionar dirección"
            color="primary"
            class="full-width __button _primary"
            @click="show_modal_location = !show_modal_location"
          />
        </div>

        <div class="__button_floating">
          <div class="__content_" @click="show_modal_location = true">
            <div class="__parr">
              <q-icon name="location_on" class="cursor-pointer" />
              <p class="__">{{ location }}</p>
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import nava from "components/header/nav-modal.vue";

export default {
  data() {
    return {
      map: { lat: -12.0643129, lng: -77.0352405 },
      zoom_map: 16,
      show_modal_location: false,
      location: "Añadir desde ubicación actual",
      select_location: { lat: -12.0643129, lng: -77.0352405 },
      comentary: "",
      range: 15,
      date: "2019/02/01",
      options_map: {
        disableDefaultUI: true
      }
    };
  },
  methods: {
    click_map($event) {
      let lat = $event.latLng.lat();
      let lng = $event.latLng.lng();
      this.select_location = { lat: lat, lng: lng };
    },
    resetCenterChange($event) {
      let lat = $event.lat();
      let lng = $event.lng();
      this.select_location = { lat: lat, lng: lng };
    },
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "check",
        message: "Submitted"
      });
    },

    onReset() {}
  },
  components: {
    nava
  }
};
</script>

<style lang="scss">
.__button_floating {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
  border-radius: 20px 20px 0 0 !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14) !important;
  .__content_ {
    padding: 1rem;
    h1 {
      font-size: 1.2rem;
      line-height: 1;
      color: #0076ff;
      font-weight: 600;
    }
    .__parr {
      p {
        padding: 0 !important;
        margin: 0 !important;
      }
      i {
        font-size: 18px;
        margin-right: 5px;
      }
      color: #444444;
      font-size: 1rem;
      font-weight: 300;
      display: flex;
    }
  }
}

.__cotizacion_page {
  .__form_content {
    padding: 0 1rem;
  }
  color: #282828;
  ._title__ {
    line-height: 1;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.7rem;
    line-height: 1.5;
  }
  .__parr_d {
    font-weight: 300;
  }
}
</style>
