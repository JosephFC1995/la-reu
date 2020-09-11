<template>
  <div>
    <div class="__li__im">
      <div class="__img">
        <img :src="'statics/' + picture" class="__image" @click="modal = !modal" />
      </div>
    </div>
    <q-dialog v-model="modal">
      <img :src="'statics/' + picture" class="__image modal_picture" />
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false
    };
  },
  props: {
    picture: {
      type: String,
      default: "product.png"
    }
  }
};
</script>

<style lang="scss">
.modal_picture {
  width: 100%;
  height: auto;
}
</style>