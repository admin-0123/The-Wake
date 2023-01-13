<template>
  <div id="banner" class="px-0 sm:px-20 text-white flex items-center">
    <video id="vid" autoplay muted>
      <source
        src="~/assets/image/main_bg_video_compress.mp4"
        type="video/mp4"
      />
    </video>
    
    <div class="text-center">
      <p class="text-primary text-5xl mb-4 sm:text-7xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">BUILD. DEFEAT. EARN</p>
      <p class="text-white-400 text-5xl mb-16 sm:text-5xl tracking-widest norse tracking-[.1em]">TRY OUR DEMOS NOW!</p>
      <div class="flex">
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg text-[28px] tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">BE THE WIZARD</p>
          <img
            src="~/assets/image/text_logo1.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button class="primary-button text-sm sm:text-2xl tracking-widest px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD</button>
        </div>
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg  text-[28px] tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">BE THE WIZARD</p>
          <img
            src="~/assets/image/text_logo2.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button class="primary-button text-sm sm:text-2xl tracking-widest px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD</button>
        </div>
      </div>
    </div>
  </div>
</template>

