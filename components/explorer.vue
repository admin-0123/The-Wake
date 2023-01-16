<template>
  <div id="explorer">
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:pt-16">
      <div class="explorer-left text-center sm:text-left mx-5 sm:ml-48">
      <div class="flex justify-center sm:justify-start">
        <div class="image-wrapper_temp w-11/12 sm:w-10/12">          
          <video autoplay muted class="image-wrapper_temp w-full">       
            <source
              src="~/assets/image/ambassador_framless.mp4"
              type="video/mp4"
              class="w-full"
              alt="Explorer item"
            />
        </video>
        </div>
      </div>

        <p class="text-2xl mt-[30px] mb-[20px] gibsonbold">Ready to jump in Norse Myth</p>
        <p class="text-gray-800 gibson">
          He was aware that he had opened his eyes in a state of obscurity.
          Neither the surroundings nor the people were familiar to him. He
          couldn`t remember anything about himself of his past. The thick fog
          and freezing cold screamed Niflheim, but he unconsciously struggled to
          lift his trembling body. Countless adventures and 9 realms to learn
          about himself and his story; his adventure to discover began from the
          very first moment he opened his eyes...
        </p>
        <button class="primary-button-white tracking-widest text-2xl px-20 py-4 my-4">Explorer</button>
      </div>
      <div class="explorer-right">
        <img
          src="~/assets/image/avatar.png"
          class="w-full"
          alt="Explorer avatar"
        />
      </div>
    </div>
  </div>
</template>
