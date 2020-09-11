<template>
  <div class="__nav_ cotizacion">
    <div class="__content-avatar">
      <q-icon name="arrow_back" v-go-back.single />
    </div>
    <div class="cart __total">
      <p class="mb-0" v-show="!hidden_total">
        Valor total: S/ <span> {{ total }}</span>
      </p>
      <!-- <div class="__ico relative-position">
        <q-icon name="shopping_cart" />
        <q-badge color="red" floating align="bottom">4</q-badge>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAvatar",
  props: {
    hidden_total: {
      type: Boolean,
      default: true
    },
    total: {
      type: String,
      default: "0"
    },
    name: {
      type: String,
      default: "/"
    }
  },
  methods: {
    emit_click() {
      this.$emit("click_back");
    }
  }
};
</script>

<style lang="scss">
.__nav_ {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .__content-avatar {
    display: flex;
    .avatar__picture {
      width: 40px;
      height: 40px;
      margin-right: 0.5rem;
    }
    .__text_user {
      color: #282828;
      font-size: 22px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .top {
        font-size: 12px;
        font-weight: 400;
        line-height: 1;
      }
      .bottom {
        line-height: 1;
        margin-top: 4px;
      }
    }
  }
  .cart {
    &.__total {
      font-size: 17px;
      p {
        span {
          font-weight: 600;
        }
      }
    }
    i {
      color: #303030;
    }
    .q-badge {
      vertical-align: bottom;
      bottom: 0;
      top: auto;
      font-size: 9px;
      border-radius: 50%;
      padding: 3px;
      height: 15px;
      display: flex;
      justify-content: center;
      width: 15px;
    }
  }
}
</style>
