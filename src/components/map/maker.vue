<template>
  <GmapMarker
    ref="marker"
    :position="google && new google.maps.LatLng(lat, lng)"
    :clickable="true"
    :draggable="true"
    @click="click_maker"
  />
</template>
<script>
import { gmapApi } from "vue2-google-maps";

export default {
  methods: {
    click_maker($event) {
      console.log($event.latLng.lat());
    }
  },
  props: {
    lat: {
      type: Number,
      default: null
    },
    lng: {
      type: Number,
      default: null
    }
  },
  computed: {
    google: gmapApi
  },
  created() {}
};
</script>
