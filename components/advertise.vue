<template>
  <div id="advertise">
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :speed="600" :parallax="true" :pagination="{
  clickable: true,
}" :loop="true" :modules="modules" class="mySwiper_1">
      <div slot="container-start" class="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_1.png" alt="Section 3 Item" />
            </div>
          </div>
          <div class="col-span-1 sm:col-span-3 mx-10 mt-0 sm:-mt-20 sm:mx-0 pr-0 sm:pr-12" id="advertise-right">
            <p class="text-4xl sm:text-6xl text-white gibsonbold">EXPLORE</p>
            <p class="text-gray-300 mt-4 mb-12 gibson">
              You can explore nine realms in The Wake: Niflheim, Muspelheim, Asgard, Midgard, Jotunheim, Vanaheim,
              Alfheim, Svartalfheim, Helheim.
              The nine worlds, featuring the Norse mythology, are set in the branches and roots of the world tree -
              Yggdrasil. The realms are home to different kinds of beings, including Asgard, the home of the Gods and
              Goddesses and Jotunheim, home of the giants.
            </p>
            <div class="flex">
              <slider-button type="prev"></slider-button>
              <slider-button type="next"></slider-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_2.png" alt="Section 3 Item" />
            </div>
          </div>
          <div class="col-span-1 sm:col-span-3 mx-10 mt-0 sm:-mt-20 sm:mx-0 pr-0 sm:pr-12" id="advertise-right">
            <p class="text-4xl sm:text-6xl text-white gibsonbold">BUILD</p>
            <p class="text-gray-300 mt-4 mb-12 gibson">
              Across all maps, you can enhance your skills and strengthen your characters. You can accumulate rank
              points and display your strenghth in PvP arenas.
              You can participate in castle and land battles and dominate certain areas, and obtain the best rewards by
              overcoming tough challenges that await in quests and dungeons.
              We are constantly improving the depth of The Wake to give you a supreme gaming experience with hundreds of
              in-game activities.
            </p>
            <div class="flex">
              <slider-button type="prev"></slider-button>
              <slider-button type="next"></slider-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_3.png" alt="Section 3 Item" />
            </div>
          </div>
          <div class="col-span-1 sm:col-span-3 mx-10 mt-0 sm:-mt-20 sm:mx-0 pr-0 sm:pr-12" id="advertise-right">
            <p class="text-4xl sm:text-6xl text-white gibsonbold">DEFEAT</p>
            <p class="text-gray-300 mt-4 mb-12 gibson">
              Get ready for war! 52 gods and more than 300 mythical creatures await you in the world of The Wake. Beat
              them and get stronger! You can go on these adventures alone or with friends. Be careful - the norse gods
              are waiting for you... as well as your enemies...
            </p>
            <div class="flex">
              <slider-button type="prev"></slider-button>
              <slider-button type="next"></slider-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_4.png" alt="Section 3 Item" />
            </div>
          </div>
          <div class="col-span-1 sm:col-span-3 mx-10 mt-0 sm:-mt-20 sm:mx-0 pr-0 sm:pr-12" id="advertise-right">
            <p class="text-4xl sm:text-6xl text-white gibsonbold">OWN</p>
            <p class="text-gray-300 mt-4 mb-12 gibson">
              Yes... You own every item in The Wake. All items, special skills and more are leveraging the NFT
              technology in The Wake Universe. Characters you create and everything you earn can be accumulated or sold.
              Unlimited power and freedom are given to the players!
            </p>
            <div class="flex">
              <slider-button type="prev"></slider-button>
              <slider-button type="next"></slider-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_5.png" alt="Section 3 Item" />
            </div>
          </div>
          <div class="col-span-1 sm:col-span-3 mx-10 mt-0 sm:-mt-20 sm:mx-0 pr-0 sm:pr-12" id="advertise-right">
            <p class="text-4xl sm:text-6xl text-white gibsonbold">COOPERATE</p>
            <p class="text-gray-300 mt-4 mb-12 gibson">
              players can form and join guilds, where they can work together to conquer the toughest challenges in the
              game. Guilds can also participate in large-scale battles and events that can impact the game's world.
              teamwork is essential for success in The Wake.
            </p>
            <div class="flex">
              <slider-button type="prev"></slider-button>
              <slider-button type="next"></slider-button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "~/assets/css/slider.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import SliderButton from "./slider/sliderButton.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SliderButton,
  },
  setup() {
    return {
      modules: [Parallax, Navigation, Pagination],
    };
  },
};
</script>
