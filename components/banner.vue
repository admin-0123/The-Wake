<template>
  <div id="banner" class="px-0 sm:px-20 text-white flex items-center">
    <video id="vid" autoplay muted>
      <source
        src="~/assets/image/main_bg_video_compress.mp4"
        type="video/mp4"
      />
    </video>
    
    <div class="text-center">
      <p class="text-primary text-5xl mb-4 sm:text-7xl">BUILD. DEFEAT. EARN</p>
      <p class="text-white-800 text-3xl mb-16 sm:text-4xl">TRY OUR DEMOS NOW!</p>
      <div class="flex">
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg">BE THE WIZARD</p>
          <img
            src="~/assets/image/text_logo1.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button class="primary-button px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD</button>
        </div>
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg">BE THE WIZARD</p>
          <img
            src="~/assets/image/text_logo2.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button class="primary-button px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD</button>
        </div>
      </div>
    </div>
  </div>
</template>

