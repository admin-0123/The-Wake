<template>
  <div id="banner" class="px-0 pb-12 sm:pb-auto sm:px-20 text-white flex items-end sm:items-center">
    <video id="vid" autoplay muted loop>
      <source
        src="~/assets/image/main_bg_video_compress.mp4"
        type="video/mp4"
      />
    </video>
    
    <div class="text-center mb-8 sm:mb-0">
      <p class="text-primary text-5xl mb-4 sm:text-7xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">BUILD.DEFEAT.OWN</p>
      <p class="text-white-400 text-5xl mb-16 sm:text-5xl tracking-widest norse tracking-[.1em]">TRY OUR DEMOS NOW!</p>
      <div class="flex">
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg text-[28px] tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">FEEL THE AXE</p>
          <img
            src="~/assets/image/text_logo1.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button onclick="window.open('https://drive.google.com/file/d/1-wI4KxI8AKYnj-b7h6CWHL04HuGOsERV/view?usp=sharing')"
            class="primary-button text-sm sm:text-2xl tracking-widest px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD</button>
        </div>
        <div class="mx-6 banner-item-group">
          <p class="py-2 text-lg  text-[28px] tracking-widest drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">FEEL THE MAGIC</p>
          <img
            src="~/assets/image/text_logo2.png"
            class="banner-item"
            alt="pre-alpha"
          />
          <button onclick="window.open('https://drive.google.com/file/d/1jxeiL5PgiGPhDgEH01FnAlGB7XR71BSk/view?usp=sharing')"
            class="primary-button text-sm sm:text-2xl tracking-widest px-10 py-1 mt-3 sm:px-20 sm:py-3">DOWNLOAD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

