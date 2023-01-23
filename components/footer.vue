<template>
  <div id="footer">
    <div class="relative text-center">
      <img
        src="~/assets/image/wake_logo.png"
        class="relative mx-auto w-24"
        id="footer_logo"
        alt=""
      />
      <div class="text-white norsebold text-lg">
        <ul class="inline-flex gap-4">
          <li v-for="item in navigation">
            <a :href="item.href" :key="item.name">{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="py-4">
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-twitter"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-facebook"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-youtube"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-discord"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-instagram"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-tiktok"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-reddit"
          />
        </button>
        <button>
          <font-awesome-icon
            class="text-xl m-2 text-white"
            icon="fa-brands fa-meetup"
          />
        </button>
      </div>
      <div id="footer_line">
        <img
          src="~/assets/image/footer_line.png"
          class="mx-auto w-96 py-4"
          alt=""
        />
      </div>
      <p class="text-gray-300 text-sm gibson pb-8 mx-4">
        @ All Rights Reserved <span class="underline underline-offset-4">Disa Studio</span> 2022 | Site Design by
        <span class="underline underline-offset-4">Disa Software</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "HOME", href: "#", current: true },  
  { name: "NEWS", href: "#carousel", current: false },
  { name: "ABOUT", href: "#explorer", current: true },
  { name: "FAQ", href: "#", current: false },
  { name: "PRESS", href: "https://drive.google.com/drive/folders/1EgPEn32PrCrNI3AFRdhTFw91dLYccJzy?usp=share_link", current: false },
  { name: "CONTACT", href: "mailto:info@thewakegame.com", current: false },
  { name: "BUG TRACKER", href: "#", current: false },
];
</script>
