<template>
  <div class="__nav_header">
    <div class="__content-avatar">
      <router-link :to="{ name: 'perfil' }">
        <img src="~assets/avatar.png" class="avatar__picture" />
      </router-link>

      <div class="__text_user">
        <span class="top block">Hola,</span>
        <span class="bottom block">Renzo Castillo</span>
      </div>
    </div>
    <div class="cart">
      <div class="__ico relative-position">
        <q-icon name="shopping_cart" />
        <q-badge color="red" floating align="bottom">4</q-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAvatar"
};
</script>

<style lang="scss">
.__nav_header {
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
    i {
      color: #303030;
      font-size: 1.6rem;
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
