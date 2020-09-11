<template>
  <router-link :to="{ name: name }">
    <div class="__list">
      <div class="__background_picture">
        <img :src="'statics/' + picture" class="__background--image" />
        <div class="__background--opacity --ab"></div>
      </div>
      <div class="__content_title">
        <h1 class="_t">{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "List",
  props: {
    name: {
      type: String,
      default: "/"
    },
    picture: {
      type: String,
      default: "product.png"
    },
    title: {
      type: String,
      default: "Cocktail"
    },
    description: {
      type: String,
      default: "Cocktail"
    }
  }
};
</script>

<style lang="scss">
.__list {
  .__content_title {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 1rem;
    color: #fff;
    h1 {
      margin: 0;
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    p {
      font-weight: 300;
    }
  }
  .__background--image {
    width: 100%;
  }

  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  min-height: 110px;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.52);
  img {
    object-fit: cover;
  }
}
</style>
