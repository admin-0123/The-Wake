<style>
.bepartner {
  background-color: black;
  position: relative;  
  text-align: center;
}
.bepartner::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: -3px;
    background-image: url(/_nuxt/assets/image/line-white.png);
    background-repeat: no-repeat;
}
.bepartner::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: calc(-100% + 10px);
    left: 0px;
    background-image: url(/_nuxt/assets/image/line-white.png);
    background-repeat: no-repeat;
}

</style>

<template>
  <div id="partners">
    <div class="bepartner grid grid-cols-3 py-5">
      <div class="hidden sm:block sm:col-span-1">
        <img src="~/assets/image/partners/career_wake_symbol.png" class="h-full m-auto" alt="Section 3 Item" />
      </div>
     <div class="col-span-3 sm:col-span-1 sm:flex justify-center items-center">
        <p class="text-xl text-white gibsonbold ">BE PART OF THIS JOURNEY</p>
        <a href="mailto:info@thewakegame.com">
          <button class="primary-button ml-4 px-6 py-2 gibsonsemibold mt-5 sm:mt-0">
            <span>CAREER</span>
          </button>
        </a>
        <!-- <div class="grid grid-cols-1 sm:gird-cols-6">
          <img src="~/assets/image/advertise/sector3_1.png" alt="Section 3 Item" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-10 gap-x-4 gap-y-0">
          <div class="col-span-1 sm:col-span-7">
            <div class="w-full">
              <img src="~/assets/image/advertise/sector3_1.png" alt="Section 3 Item" />
            </div>
        </div> -->

     </div>
     <div class="hidden sm:block sm:col-span-1">
       <img src="~/assets/image/partners/career_wake_symbol.png" class="h-full m-auto -scale-x-100" alt="Section 3 Item" />
     </div>
    </div>
    <div class="text-center py-8">
      <p class="text-gray-800 gibson px-4 sm:px-64 py-8">
        Where we showcase our valuable partners who have supported us in the development and promotion of <span
          class="gibsonbold">The Wake.</span>
        These partners have helped us to create a better gaming experience for our players

      </p>
      <img src="~/assets/image/partners/logo.png" class="px-2 sm:px-24" alt="">
      <p class="text-gray-800 gibson px-2 sm:px-36 my-8">
        Organizations or individuals who are interested in partnering with us to support the development and promotion
        of <span class="gibsonbold">The Wake.</span> As a partner, you will have access to exclusive resources and opportunities to promote your brand.
      </p>
      <a href="mailto:info@thewakegame.com" class="primary-button-white text-lg gibsonbold px-8 py-3 mb-20">BECOME A PARTNER</a>
    </div>
  </div>
</template>
