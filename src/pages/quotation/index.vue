<template>
  <div class="__cotizacion_page">
    <div class="__page_content px-3 pt-3">
      <nava :total="total" :hidden_total="finish_step" />
      <div class="__init" v-show="!next_continues">
        <div class="__page_content">
          <div class="__content_services">
            <h5 class="_title__">
              Ingresa los datos de tú próxima reu
            </h5>
            <p class="__parr_d">
              Completa los requerimientos para solicitar una cotización
            </p>
          </div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="__form_custom _alter"
          >
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
              @click="show_modal_location = true"
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
                @click="close_modal"
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
      <div v-show="next_continues">
        <!-- STEP -->
        <div v-show="!finish_step">
          <div class="__content_services">
            <h5 class="_title__">
              Cotización
            </h5>
          </div>
          <div class="__step_">
            <div class="__icons_step">
              <div
                class="__group_icons"
                v-for="(item, index) in icon_step"
                :key="index"
                @click="step_number = index"
              >
                <div
                  class="__ico_item"
                  :class="[step_number == index ? '_active' : '']"
                >
                  <img :src="'statics/' + item.ico" alt="" />
                  <span class="__title">
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
            <div class="__content_step">
              <p class="__parr_d" v-show="step_number != 3">
                Completa los requerimientos para solicitar una cotización
              </p>
              <p class="__parr_d" v-show="step_number == 3">
                Elige el horario de limpieza que desees
              </p>
              <!-- Step 0 -->
              <div class="__step_page" data-step="0" v-show="step_number == 0">
                <selectList
                  v-for="(list, i) in cocktail_list"
                  :key="i"
                  @selectList="selectListCocktail"
                  :value_list="list.value"
                  :label_list="list.title"
                  :select_value="select_cocktail"
                />
                <div class="__form_custom _alter __bac_empty">
                  <div class="__input_group">
                    <span class="__label">Algún comentario adicional</span>
                    <q-input
                      filled
                      v-model="comentary_cocktail"
                      placeholder="Ingresar comentario"
                      lazy-rules
                      class="mb-2"
                    />
                  </div>
                </div>
                <q-btn
                  label="Continuar"
                  color="primary"
                  class="full-width __button _primary mt-4"
                  @click="step_number = 1"
                />
                <q-btn
                  label="Omitir este servicio"
                  color="primary"
                  class="full-width __button _transparent mt-3"
                  @click="step_number = 1"
                />
              </div>
              <!-- Step 1 -->
              <div class="__step_page" data-step="1" v-show="step_number == 1">
                <selectList
                  v-for="(list, i) in chef_list"
                  :key="i"
                  @selectList="selectListChef"
                  :value_list="list.value"
                  :label_list="list.title"
                  :select_value="select_chef"
                />
                <div class="__form_custom _alter __bac_empty">
                  <div class="__input_group">
                    <span class="__label">Algún comentario adicional</span>
                    <q-input
                      filled
                      v-model="comentary_chef"
                      placeholder="Ingresar comentario"
                      lazy-rules
                      class="mb-2"
                    />
                  </div>
                </div>
                <q-btn
                  label="Continuar"
                  color="primary"
                  class="full-width __button _primary mt-4"
                  @click="step_number = 2"
                />
                <q-btn
                  label="Omitir este servicio"
                  color="primary"
                  class="full-width __button _transparent mt-3"
                  @click="step_number = 2"
                />
              </div>
              <!-- Step 2 -->
              <div class="__step_page" data-step="1" v-show="step_number == 2">
                <selectList
                  v-for="(list, i) in dj_list"
                  :key="i"
                  @selectList="selectListDJ"
                  :value_list="list.value"
                  :label_list="list.title"
                  :select_value="select_chef"
                />
                <div class="__form_custom _alter __bac_empty">
                  <div class="__input_group">
                    <span class="__label">Algún comentario adicional</span>
                    <q-slider
                      v-model="horas_dj"
                      :min="3"
                      :max="6"
                      label-always
                      class="mt-4"
                      color="#282828"
                    />
                  </div>
                </div>
                <q-btn
                  label="Continuar"
                  color="primary"
                  class="full-width __button _primary mt-4"
                  @click="step_number = 3"
                />
                <q-btn
                  label="Omitir este servicio"
                  color="primary"
                  class="full-width __button _transparent mt-3"
                  @click="step_number = 3"
                />
              </div>
              <!-- Step 3 -->
              <div class="__step_page" data-step="1" v-show="step_number == 3">
                <div class="flex justify-between">
                  <selectList
                    :columns="true"
                    :center_text="true"
                    v-for="(list, i) in horario_limpieza_list"
                    :key="i"
                    @selectList="selectHorarioLimpieza"
                    :value_list="list.value"
                    :label_list="list.title"
                    :select_value="select_horario_limpieza"
                  />
                </div>
                <span class="__label mb-3">Algún comentario adicional</span>
                <div class="flex justify-between">
                  <selectList
                    :columns="true"
                    :center_text="true"
                    v-for="(list, i) in tipo_propiedad_list"
                    :key="i"
                    @selectList="selectPropiedad"
                    :value_list="list.value"
                    :label_list="list.title"
                    :select_value="select_tipo_propiedad"
                  />
                </div>

                <div class="__form_custom _alter __bac_empty">
                  <div class="__input_group">
                    <span class="__label">Algún comentario adicional</span>
                    <q-input
                      filled
                      v-model="comentary_limpieza"
                      placeholder="Ingresar comentario"
                      lazy-rules
                      class="mb-2"
                    />
                  </div>
                </div>

                <q-btn
                  label="Continuar"
                  color="primary"
                  class="full-width __button _primary mt-3"
                  @click="finish_step = true"
                />
                <q-btn
                  label="Omitir este servicio"
                  color="primary"
                  class="full-width __button _transparent mt-3"
                  @click="finish_step = true"
                />
              </div>
            </div>
            <!-- Resumen -->
          </div>
        </div>
        <div class="__resumen" v-show="finish_step">
          <div class="__content">
            <h6>
              Resumen de la cotización
            </h6>
            <span class="_valor_total">
              Valor total: S/ <span> {{ total }}</span>
            </span>

            <p class="mb-0 __item">
              <span class="_bold">
                Dirección:
              </span>
              {{ location }}
            </p>
            <p class="mb-0 __item">
              <span class="_bold">
                Personas:
              </span>
              {{ range }} personas
            </p>
            <p class="mb-0 __item">
              <span class="_bold">
                Fecha:
              </span>
              {{ date }}
            </p>

            <p class="mb-0 __item mt-4">
              <span class="_bold">
                Cocktails
              </span>
            </p>
            <p class="mb-0 __item">
              {{
                select_cocktail
                  ? select_cocktail
                  : "No se ha seleccionado un cocktail"
              }}
            </p>
            <p class="mb-0 __item text-italic">
              {{
                comentary_cocktail ? comentary_cocktail : "No hay comentarios"
              }}
            </p>
            <p class="mb-0 __item mt-4">
              <span class="_bold">
                Chef
              </span>
            </p>
            <p class="mb-0 __item">
              {{ select_chef ? select_chef : "No se ha seleccionado un chef" }}
            </p>
            <p class="mb-0 __item text-italic">
              {{ comentary_chef ? comentary_chef : "No hay comentarios" }}
            </p>
            <p class="mb-0 __item mt-4">
              <span class="_bold">
                DJ
              </span>
            </p>
            <p class="mb-0 __item">
              {{ select_dj ? select_dj : "N/A" }} /
              {{ horas_dj ? horas_dj : "0" }}
            </p>

            <p class="mb-0 __item mt-4">
              <span class="_bold">
                Limpieza
              </span>
            </p>
            <p class="mb-0 __item">
              A las
              {{ select_horario_limpieza ? select_horario_limpieza : "0:00" }} /
              {{ select_tipo_propiedad ? select_tipo_propiedad : "N/A" }}
            </p>
            <p class="mb-0 __item text-italic">
              {{
                comentary_limpieza ? comentary_limpieza : "No hay comentarios"
              }}
            </p>
            <div class="__group mb-3 mt-4 pb-6">
              <q-btn
                label="Solicitar cotización"
                color="primary"
                class="full-width __button _primary"
                :to="{ name: 'thanks' }"
                replace
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nava from "components/header/nav-cotizacion.vue";
import selectList from "components/selects/list.vue";

export default {
  data() {
    return {
      total: "500.00",
      next_continues: false,
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
      },
      finish_step: true,
      step_number: 0,
      select_cocktail: "",
      select_chef: "",
      select_dj: "",
      select_horario_limpieza: "",
      comentary_cocktail: "",
      comentary_chef: "",
      select_tipo_propiedad: "",
      horas_dj: 3,
      comentary_limpieza: "",
      icon_step: [
        {
          ico: "cocktail.png",
          title: "Cocktail"
        },
        {
          ico: "chef.png",
          title: "Chef"
        },
        {
          ico: "dj.png",
          title: "DJ"
        },
        {
          ico: "limpieza.png",
          title: "Limpieza"
        }
      ],
      cocktail_list: [
        { value: "pisco sour", title: "Pisco Sour" },
        { value: "chilcanos", title: "Chilcanos" },
        { value: "targos con whiskye", title: "Tragos con whiskye" },
        { value: "cervezas", title: "Cervezas" }
      ],
      chef_list: [
        { value: "comida argentina", title: "Comida Argentina (Parrilla)" },
        { value: "comida peruana", title: "Comida Peruana" },
        { value: "comida espaniola", title: "Comida Española" },
        { value: "comida italiana", title: "Comida Italiana" }
      ],
      dj_list: [
        { value: "pachanga", title: "Pachanga" },
        { value: "electro", title: "Electro" },
        { value: "rock", title: "Rock" },
        { value: "salsa", title: "Salsa" }
      ],
      horario_limpieza_list: [
        { value: "8_00_a_m", title: "8:00 am" },
        { value: "9_00_a_m", title: "9:00 am" },
        { value: "10_00_a_m", title: "10:00 am" },
        { value: "11_00_a_m", title: "11:00 am" },
        { value: "12_00_a_m", title: "12:00 am" },
        { value: "1_00_p_m", title: "1:00 pm" }
      ],
      tipo_propiedad_list: [
        { value: "local", title: "Local" },
        { value: "casa", title: "Casa" },
        { value: "depa", title: "Depa" }
      ]
    };
  },
  methods: {
    close_modal() {
      this.show_modal_location = !this.show_modal_location;
      this.next_continues = !this.next_continues;
      this.finish_step = !this.finish_step;
    },
    selectListCocktail($event) {
      this.select_cocktail = $event;
    },
    selectListChef($event) {
      this.select_chef = $event;
    },
    selectListDJ($event) {
      this.select_dj = $event;
    },
    selectHorarioLimpieza($event) {
      this.select_horario_limpieza = $event;
    },
    selectPropiedad($event) {
      this.select_tipo_propiedad = $event;
    }
  },
  components: {
    nava,
    selectList
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
.__step_ {
  .__step_page {
    padding-bottom: 2rem;
  }
  .__icons_step {
    display: flex;
    justify-content: space-between;
    .__group_icons {
      margin: 0 8px;
      min-width: 58px;
      .__ico_item {
        opacity: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &._active {
          opacity: 1;
        }
        img {
          height: 25px;
        }
      }
    }
  }
  .__content_step {
    margin-top: 1.5rem;
  }
}
.__resumen {
  .__content {
    h6 {
      margin: 0;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    ._valor_total {
      font-size: 16px;
      display: block;
      margin-bottom: 1rem;
      span {
        font-weight: 600;
      }
    }
    .__item {
      ._bold {
        font-weight: 600;
      }
    }
  }
}
</style>
