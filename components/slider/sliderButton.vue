<template>

  <button
    v-if="type === 'next'"
    class="primary-button px-6 py-1 mx-2"
    id="swiper-next"
    @click="swiper.slideNext(1000, true)"
  >
    <font-awesome-icon icon="fa-solid fa-caret-right" class="text-3xl" />
  </button>
  <button
    v-if="type === 'prev'"
    class="primary-button px-6 py-1 mx-2"
    id="swiper-prev"
    @click="swiper.slidePrev(1000, true)"
  >
    <font-awesome-icon icon="fa-solid fa-caret-left" class="text-3xl" />
  </button>
</template>


<script>
  import { useSwiper } from 'swiper/vue';

  export default {
    props: {
      type: String,
    },

    setup() {
      const swiper = useSwiper();

      return {
        swiper
      };
    },
  };
</script>
