<template>
  <div id="carousel" class="py-16">
    <div class="title text-center">
      <p class="text-5xl gibsonbold">Who are you? God or Human...</p>
      <img
        src="~/assets/image/section_line.png"
        alt="Line"
        class="m-auto my-2"
      />
      <div class="flex justify-center gibson">
        <p class="text-md text-gray-800 mx-4 w-4/5 sm:w-3/5">In the land of gods, the bravest heroes are called to defend the realms from the forces of darkness. Join <span class="gibsonbold">THE WAKE</span> and become a hero of Norse mythology as you flight alongside legendary figures and explore the vast world of the Nine Realms.</p>
      </div>
    </div>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/slider_1.jpg" />
        <p class="absolute top-0 left-0 bg-red-600 rounded text-white py-2 px-6">December</p>
        <button class="absolute bottom-10 right-5 bg-red-600 hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "~/assets/css/slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
