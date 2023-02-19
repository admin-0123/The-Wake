<template>
  <Disclosure as="nav" id="header" class="fixed w-full z-10 bg-black" v-slot="{ open }">
    <div class="mx-1 sm:px-6 lg:px-8 p-1">
      <div class="relative flex items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="~/assets/image/logo.png"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="~/assets/image/logo.png"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'border-solid border-b-2 border-red-800 rounded-none text-white'
                    : 'text-gray-300 hover:border-solid hover:border-b-2 hover:border-red-800 rounded-none hover:text-white',
                  'px-3 py-2 rounded-md text-md font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
        <div
          class="hidden sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <a
            href="https://twitter.com/Twakegame" target="_blank" class="rounded-full bg-black p-2 text-gray-200 hover:text-white"
          >
            <font-awesome-icon class="text-xl" icon="fa-brands fa-twitter" />
          </a>

          <a            
            href="http://discord.gg/nwtq7AZjsy" target="_blank" class="rounded-full bg-black p-2 text-gray-200 hover:text-white"
          >
            <font-awesome-icon class="text-xl" icon="fa-brands fa-discord" />
          </a>

          <a            
            href="https://t.me/thewakegame" target="_blank" class="rounded-full bg-black p-2 text-gray-200 hover:text-white"
          >
            <font-awesome-icon class="text-xl" icon="fa-brands fa-telegram" />
          </a>

          <a
            href="http://youtube.com/@thewake1649" target="_blank" class="rounded-full bg-black p-2 text-gray-200 hover:text-white"
          >
            <font-awesome-icon class="text-xl" icon="fa-brands fa-youtube" />
          </a>

          <!-- Profile dropdown -->
          <!-- class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" -->
          
          <a href="https://forms.gle/8681121m532JfkKe8" class="primary-button ml-4 px-4 py-2">
            <span>BECOME AN AMBASSADOR</span>
          </a>
          <a href="https://forms.gle/ZwULaMBdFi6RCWQN9" target="_blank" class="primary-button ml-4 px-4 py-2">
            <span>UPCOMING TOURNAMENT</span>
          </a>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
      <div class="flex mx-2">
        <button
          type="button"
          class="rounded-full bg-black p-2 px-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl" />
        </button>

        <button
          type="button"
          class="rounded-full bg-black p-2 px-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl" />
        </button>

        <button
          type="button"
          class="rounded-full bg-black p-2 px-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <font-awesome-icon icon="fa-brands fa-youtube" class="text-2xl" />
        </button>

        <button
          type="button"
          class="rounded-full bg-black p-2 px-4 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <font-awesome-icon icon="fa-brands fa-discord" class="text-2xl" />
        </button>
      </div>

      <!-- Profile dropdown -->
      <div class="flex pt-4 pb-8">
        <button type="button" class="primary-button ml-4 px-4 py-1">
          <span>BECOME AMBASSADOR</span>
        </button>

        <button type="button" class="primary-button ml-4 px-4 py-1">
          <span>REGISTER THE TOURNAMENT</span>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "NEWS", href: "#carousel", current: false },
  { name: "ABOUT", href: "#explorer", current: false },
  { name: "EXPLORE", href: "#advertise", current: false },
  { name: "TEAM", href: "#team", current: false },
  { name: "PARTNERS", href: "#partners", current: false },
];
</script>


