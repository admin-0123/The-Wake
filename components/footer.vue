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
            <NuxtLink :to="item.href" :key="item.name">{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="py-4">
        <a href="https://twitter.com/Twakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-twitter" />
            </button>
          </a>

          <a href="https://t.me/thewakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-telegram" />
            </button>
          </a>

          <a href="http://discord.gg/nwtq7AZjsy" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-discord" />
            </button>
          </a>

          <a href="https://www.linkedin.com/company/thewakegame/" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-linkedin-in" />
            </button>
          </a>

          <a href="http://youtube.com/@thewake1649" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-youtube" />
            </button>
          </a>

          <a href="http://twitch.tv/thewakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-xl m-2 text-white" icon="fa-brands fa-twitch" />
            </button>
          </a>

        <!-- <button>
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
        </button> -->
      </div>
      <div id="footer_line">
        <img
          src="~/assets/image/footer_line.png"
          class="mx-auto w-96 py-4"
          alt=""
        />
      </div>
      <p class="text-gray-300 text-sm gibson pb-8 mx-4">
        @ All Rights Reserved 
        <a href="https://www.disasoftware.com" target="_blank"> <span class="underline underline-offset-4">Disa Studio</span></a> 
        2022 | Site Design by
        <a href="https://www.disasoftware.com" target="_blank"><span class="underline underline-offset-4">Disa Software</span></a>
      </p>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "HOME", href: "/", current: true },  
  { name: "NEWS", href: "#carousel", current: false },
  { name: "ABOUT", href: "#explorer", current: true },
  { name: "FAQ", href: "/faq", current: false },
  { name: "PRESS", href: "https://drive.google.com/drive/folders/1EgPEn32PrCrNI3AFRdhTFw91dLYccJzy?usp=share_link", current: false },
  { name: "CONTACT", href: "mailto:info@thewakegame.com", current: false },
  { name: "BUG TRACKER", href: "#", current: false },
];
</script>
