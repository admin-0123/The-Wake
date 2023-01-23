<template>
  <div id="community">
    <div class="grid grid-cols-1 sm:grid-cols-2 py-24">
      <div class="mx-8 sm:ml-48" id="community-left">
        <p class="text-4xl sm:text-6xl tracking-widest my-2 gibsonbold">
          COMMUNITY
        </p>
        <p class="my-2 text-sm sm:text-lg text-gray-700 gibson">
          The Wake community is an essential part of the game's development and growth. Join the conversation and
          connect with other players by following us on social media, joining our Discord server, or subscribing to our
          newsletter for the latest updates and news.
        </p>
        <div class="flex my-2">
          <a href="https://twitter.com/Twakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-twitter" />
            </button>
          </a>

          <a href="https://t.me/thewakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-telegram" />
            </button>
          </a>

          <a href="http://discord.gg/nwtq7AZjsy" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-discord" />
            </button>
          </a>

          <a href="https://www.linkedin.com/company/thewakegame/" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-linkedin-in" />
            </button>
          </a>

          <a href="http://youtube.com/@thewake1649" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-youtube" />
            </button>
          </a>

          <a href="http://twitch.tv/thewakegame" target="_blank">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-twitch" />
            </button>
          </a>
          <!-- <a href="#">
            <button>
              <font-awesome-icon class="text-2xl m-2" icon="fa-brands fa-medium" />
            </button>
          </a> -->
        </div>
        <p class="text-2xl sm:text-4xl mt-8 gibsonbold">THE WAKE WHITELIST</p>
        <p class="my-2 text-lg text-gray-700 gibson">
          Joining the "Whitelist" gives players a chance to be a part of the development process of the game, giving
          feedback and suggestions which will be considered by the development team before the official launch.
        </p>
        <div class="my-2">
          <input type="text" class="primary-button-white text-md pl-6 gibson pr-8 sm:pr-32 py-2 text-left"
            placeholder=" e.g yourname@example.com">
        </div>
        <div class="my-2 sm:flex items-center gap-x-4">
          <button class="primary-button-white gibsonbold text-lg px-8 py-2 mb-2 sm:mb-0">
            SIGN UP
          </button>
          <div class="relative flex items-start my-2 sm:my-0">
            <div class="flex h-5 items-center">
              <input id="red-checkbox" type="checkbox"
                class="w-6 h-6 text-red-600 bg-black-100 border-gray-300 rounded" />
            </div>
            <div class="ml-3 text-sm">
              <label class="font-medium text-gray-700">I agree to the Privacy Policy</label>
            </div>
          </div>
        </div>
        <p class="text-2xl sm:text-4xl mt-8 gibsonbold">NEWSLETTER</p>
        <p class="my-2 text-lg text-gray-700 gibson">
          Great way to stay informed about the latest news, events and updates of The Wake, it will also give you the
          chance to participate in exclusive events and promotions.
        </p>
        <div class="my-2">
          <input type="text" class="primary-button-white text-md pl-6 gibson pr-8 sm:pr-32 py-2 text-left"
            placeholder=" e.g yourname@example.com">
        </div>
        <div class="my-2 sm:flex items-center gap-x-4">
          <button class="primary-button-white gibsonbold text-lg px-8 py-2 mb-2 sm:mb-0">
            SIGN UP
          </button>
          <div class="relative flex items-start my-2 sm:my-0">
            <div class="flex h-5 items-center">
              <input id="red-checkbox" type="checkbox"
                class="w-6 h-6 text-red-600 bg-black-100 border-gray-300 rounded" />
            </div>
            <div class="ml-3 text-sm">
              <label class="font-medium text-gray-700">I agree to the Privacy Policy</label>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2">
        <img src="~/assets/image/sec_4_item.png" class="w-full h-full" alt="Community Icons" />
      </div>
    </div>
  </div>
</template>
