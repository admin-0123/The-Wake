<template>
  <div id="carousel" class="py-10 sm:py-16">
    <div class="title text-center">
      <p class="text-5xl gibsonbold">Who are you? God or Human...</p>
      <img
        src="~/assets/image/section_line.png"
        alt="Line"
        class="m-auto my-2  mb-[42px]"
      />
      <div class="flex justify-center gibson">
        <p class="text-md text-gray-800 mx-4 w-4/5 sm:w-3/5 ">In the land of gods, the bravest heroes are called to defend the realms from the forces of darkness. Join <span class="gibsonbold">THE WAKE</span> and become a hero of Norse mythology as you flight alongside legendary figures and explore the vast world of the Nine Realms.</p>
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
        <img src="~/assets/image/slider/card1.jpg" />        
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/card2.jpg" />        
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/card3.jpg" />        
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/card4.jpg" />        
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/card5.jpg" />        
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/image/slider/card6.jpg" />
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
      </swiper-slide> 
      <swiper-slide>
        <img src="~/assets/image/slider/card7.jpg" />
        <!-- <button class="absolute bottom-10 right-5 bg-[#ff0209] hover:bg-red-700 rounded text-white py-2 px-6 bottom-0.5 right-0.5">More <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="px-1" /></button> -->
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
  data(){
    return {
      sliders: [],
      config: useRuntimeConfig(),
    }
  },
  methods: {
    async fetch () {
      try {
        const config = useRuntimeConfig()
        const response = await fetch( config.public.API_ENDPOINT + '/slider?populate=media')
        .catch((err) => {
          console.log(err)
          return;
        })
        this.sliders = await response.json();
        console.log("sliders", this.sliders.data.attributes.media.data)
        this.sliders = this.sliders.data.attributes.media.data;
      }
      catch (err) {
        console.log(err)
        return;
      }
      return;
  },
  getImageUrl(url) {
      return this.config.public.BACKEND_ENDPOINT + url;
    }
  },
  
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  created() {
    this.fetch();
  }
};
</script>