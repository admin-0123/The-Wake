<template>
  <div id="advertise">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-0 py-20">
      <div class="col-span-1 sm:col-span-2 invisible sm:visible mx-8 pl-24">
        <div class="image-wrapper -rotate-3">
          <img src="~/assets/image/section_3_item.jpg" alt="Section 3 Item" />
        </div>
      </div>
      <div class="col-span-1 sm:col-span-1 mx-10 sm:mx-0" id="advertise-right">
        <p class="text-5xl sm:text-7xl text-white gibsonbold">EXPLORER</p>
        <p class="text-gray-300 my-4 gibson">
          There are nine realms in The Wake: Niflheim, Muspelheim, Asgard,
          Midgard, Jotunheim, Vanaheim, Alfheim, Svatalfheim, Helheim. The nine
          worlds in Norse mythology are held in branches and roots of the world
          tree Ygg-drasil. These realms are the home of different kinds of
          beings, and include Asgard, the home of the Gods and Goddesses, and
          Jotunheim, home of the giants.
        </p>
        <div class="flex">
          <button class="primary-button px-6 py-1 mx-2">
            <font-awesome-icon icon="fa-solid fa-caret-left" class="text-3xl" />
          </button>
          <button class="primary-button px-6 py-1 mx-2">
            <font-awesome-icon icon="fa-solid fa-caret-right" class="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
