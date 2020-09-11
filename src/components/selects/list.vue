<template>
  <div
    class="__select_list "
    :class="[
      select_value == value_list ? '_active' : '',
      columns ? '_columns' : ''
    ]"
    @click="select_list_m"
  >
    <div class="__i_list" :class="[center_text ? 'text-center' : '']">
      {{ label_list }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Boolean,
      default: false
    },
    center_text: {
      type: Boolean,
      default: false
    },
    value_list: {
      type: String,
      default: ""
    },
    label_list: {
      type: String,
      default: ""
    },
    select_value: {
      type: String,
      default: null
    }
  },
  methods: {
    select_list_m() {
      this.$emit("selectList", this.value_list);
    }
  }
};
</script>

<style lang="scss">
.__select_list {
  padding: 0.8rem 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #b2aaa0;
  border-radius: 0.3rem;
  color: #313130;
  &._columns {
    flex: 0 0 30%;
    width: 30%;
  }
  &._active {
    background: #e0d7cc;
    border-color: #e0d7cc;
  }
}
</style>
