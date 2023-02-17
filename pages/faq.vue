<template>
  <FaqHeader />
  <section class="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
  <!-- <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/faqs/gradient.svg" alt=""> -->
  <div class="relative container px-4 mx-auto">
    <div class="md:max-w-4xl mx-auto">
      <!-- <p class="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p> -->
      <!-- <h2 class="mb-16 text-2xl md:text-4xl xl:text-6xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2> -->
      <div class="mb-11 flex flex-wrap -m-1">

        <div class="faq-game-content w-full p-1">
            <a href="#" @click.prevent="active_group = active_group === 0 ? -1 : 0">
              <div class="pt-2 px-8 bg-white bg-opacity-60 border-b-2 shadow-10xl faq_group_border">
                <div class="flex flex-wrap justify-between">
                  <div class="flex-1 p-2">
                    <h3 class="mb-4 text-lg font-semibold leading-normal">Game</h3>
                  </div>
                  <div class="w-auto p-2">
                    <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="pt-12" v-show="active_group === 0">
              <div class="w-full">
                <div class="w-full p-1" v-for="item, key in game_faq_content">
                  <a href="#" @click.prevent="active_game = active_game === key ? -1 : key">
                    <div class="mx-4 lg:mx-24 pt-2 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 faq_item_border rounded-2xl shadow-10xl">
                      <div class="flex flex-wrap justify-between">
                        <div class="flex-1 p-2">
                          <h3 class="mb-4 text-lg font-semibold leading-normal">{{ item.question }}</h3>
                          <transition name="collapse">
                            <div v-show="active_game === key">
                              <p class="text-gray-600 font-medium">
                              {{ item.answer }}
                            </p>
                            </div>  
                            
                          </transition>
                        </div>
                        <div class="w-auto p-2">
                          <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#9f0d08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <div class="faq-tech-content w-full p-1">
            <a href="#" @click.prevent="active_group = active_group === 1 ? -1 : 1">
              <div class="pt-2 px-8 bg-white bg-opacity-60 border-b-2 shadow-10xl faq_group_border">
                <div class="flex flex-wrap justify-between">
                  <div class="flex-1 p-2">
                    <h3 class="mb-4 text-lg font-semibold leading-normal">Technology</h3>
                  </div>
                  <div class="w-auto p-2">
                    <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="pt-12" v-show="active_group === 1">
              <div class="w-full">
                <div class="w-full p-1" v-for="item, key in tech_faq_content">
                  <a href="#" @click.prevent="active_tech = active_tech === key ? -1 : key">
                    <div class="mx-4 lg:mx-24 pt-2 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 faq_item_border rounded-2xl shadow-10xl">
                      <div class="flex flex-wrap justify-between">
                        <div class="flex-1 p-2">
                          <h3 class="mb-4 text-lg font-semibold leading-normal">{{ item.question }}</h3>
                          <transition name="collapse"><p class="text-gray-600 font-medium" v-show="active_tech === key">{{ item.answer }}</p></transition>
                        </div>
                        <div class="w-auto p-2">
                          <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#9f0d08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <div class="faq-multi-content w-full p-1">
            <a href="#" @click.prevent="active_group = active_group === 2 ? -1 : 2">
              <div class="pt-2 px-8 bg-white bg-opacity-60 border-b-2 shadow-10xl faq_group_border">
                <div class="flex flex-wrap justify-between">
                  <div class="flex-1 p-2">
                    <h3 class="mb-4 text-lg font-semibold leading-normal">Multiplayer</h3>
                  </div>
                  <div class="w-auto p-2">
                    <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="pt-12" v-show="active_group === 2">
              <div class="w-full">
                <div class="w-full p-1" v-for="item, key in multi_faq_content">
                  <a href="#" @click.prevent="active_multi = active_multi === key ? -1 : key">
                    <div class="mx-4 lg:mx-24 pt-2 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 faq_item_border rounded-2xl shadow-10xl">
                      <div class="flex flex-wrap justify-between">
                        <div class="flex-1 p-2">
                          <h3 class="mb-4 text-lg font-semibold leading-normal">{{ item.question }}</h3>
                          <transition name="collapse"><p class="text-gray-600 font-medium" v-show="active_multi === key">{{ item.answer }}</p></transition>
                        </div>
                        <div class="w-auto p-2">
                          <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#9f0d08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>

        <div class="faq-disa-content w-full p-1">
            <a href="#" @click.prevent="active_group = active_group === 3 ? -1 : 3">
              <div class="pt-2 px-8 bg-white bg-opacity-60 border-b-2 shadow-10xl faq_group_border">
                <div class="flex flex-wrap justify-between">
                  <div class="flex-1 p-2">
                    <h3 class="mb-4 text-lg font-semibold leading-normal">Disa Studios</h3>
                  </div>
                  <div class="w-auto p-2">
                    <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="pt-12" v-show="active_group === 3">
              <div class="w-full">
                <div class="w-full p-1" v-for="item, key in disa_faq_content">
                  <a href="#" @click.prevent="active_disa = active_disa === key ? -1 : key">
                    <div class="mx-4 lg:mx-24 pt-2 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 faq_item_border rounded-2xl shadow-10xl">
                      <div class="flex flex-wrap justify-between">
                        <div class="flex-1 p-2">
                          <h3 class="mb-4 text-lg font-semibold leading-normal">{{ item.question }}</h3>
                          <transition name="collapse"><p class="text-gray-600 font-medium" v-show="active_disa === key">{{ item.answer }}</p></transition>
                        </div>
                        <div class="w-auto p-2">
                          <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#9f0d08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </div>

      </div>
      <p class="text-gray-600 text-center font-medium">
        <span>Still have any questions?</span>
        <a class="font-semibold text-indigo-600 hover:text-indigo-700 px-2" href="#">Contact us</a>
      </p>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">

const active_game = ref(-1);
const active_tech = ref(-1);
const active_multi = ref(-1);
const active_disa = ref(-1);
const active_group = ref(-1);

const group_faq_content = [
  {
    title: 'Game',
  },
  {
    title: 'Technology'
  },
  {
    title: 'Multiplayer'
  },
  {
    title: 'Disa Studios'
  }
]

const game_faq_content = [
  { 
    question: 'What is The Wake all about?',
    answer: 'The Wake is a MMORPG game featuring the Norse mythology. With its unique environment design, 9 maps, different types of classes, adventurous quests, dangerous dungeons, and gods awaiting reckoning, The Wake is the gateway to the Metaverse universe.'
  },
  { 
    question: 'What is the story line of The Wake?',
    answer: 'Join the army led by our main character Avya and get ready to fight gods and other creatures of the Norse mythology.Satisfy Avya`s hunger for revenge with quests and dungeons.'
  },
  { 
    question: 'Is The Wake Open-world?',
    answer: 'Yes, The Wake 9 realms spread across 90m2. It is a live open-world for you to discover!'
  },
  { 
    question: 'What engine are you building on?',
    answer: 'The game is built using Unity.'
  },
  { 
    question: 'The visuals of The Wake?',
    answer: 'From inception, we have been aiming for AA quality both for in-game systems and graphics.We chose aesthetic and realistic modeling for character designs. For the map designs, we used mat dark palettes and warm color palettes.'
  },
  { 
    question: 'What about balance of The Wake?',
    answer: 'The balance of skills and classes is very important for the game and we are always working on it. It will all materialize after the closed beta.The balance of skills and classes is very important for the game and we are always working on it. It will all materialize after the closed beta.'
  },
  { 
    question: 'What about the quality of visuals of Multiplayer Modes (Tournament modes)?',
    answer: 'As you know, we have developed tournament modes exclusively for our community, and we have seen that most of the players who play the modes do not have powerful computers. For this reason, we reduced the graphics quality in tournament modes. Don`t let this fool you! The Wake global game will be released in AA quality.'
  },
  { 
    question: 'On Which Platforms is The Wake available?',
    answer: 'We have developed The Wake for Windows and Linux. We will make our debut for PC gamers, but don`t worry! We will make our mobile debut a few months after the global launch. It is important for us to be cross-platform!'
  },
  { 
    question: 'Does The Wake Support Gamepad?',
    answer: 'Yeah! You can use your controllers in The Wake.'
  },
  { 
    question: 'Can I customize my items? Such a weapons etc.',
    answer: 'Customizable items may vary, but every item can be upgraded in The Wake. Upgrading your ax will give it both extra stat and different look. There are many options in the game to change the appearance, shape and shine of your items. Each customization may require different requirements.'
  },
  { 
    question: 'Can I customize the appearance of my character?',
    answer: 'Players can use different options when creating their characters: height, weight, eye color, hair style... we are even working on integrating a AI/ avatar facial recognition features so that your characters can look just like you!It is possible to reach more in-game options later in the game, and for this, you will have to increase your level and participate in in-game activities.'
  },
  { 
    question: 'How many in-game activities are there in The Wake?',
    answer: 'There are currently 5 main in-game activities planned. These are: quests, dungeons, castle wars, land wars and pvp arena.'
  },
  { 
    question: 'What about rest of The Wake?',
    answer: 'Apart from the 5 main activities, The Wake universe comprises many adventures and tons of side activities. You can choose a profession and become a profesional, develop your items in the crafting system and become a trader, travel realm to realm, chase gods, participate in daily and weekly activities, and enjoy the social aspect of The Wake with your friends.'
  },
  { 
    question: 'Is there a guild or party system in The Wake?',
    answer: 'Of course! Imagine a guild formed by 24 friends! That he appeared in castle war and land war... The whole server can talk to your guild. The party system, on the other hand, was designed so that you can play the game with your friends, explore and grow together. With parties with a limit of 8 people, you can team up with your friends and continue your development faster. Party limit in dungeons is 4-6 players.'
  },
  { 
    question: 'What is the starting level and max level?',
    answer: 'All players start at level 1. The maximum level is 60 for now. This level can be increased in the future.'
  },
  { 
    question: 'Everybody is talking about The Wake`s skill system?',
    answer: 'Hehe! We`ve worked hard on our skill system in the last few months. First of all, more than 250 skills are waiting for you. But the best part of this system is that we can provide thousands of combinations even in a single skill. In addition, this system is not a system that repeats itself where nothing changes. We have developed it both visually and in a way that affects the game. There are millions of combination options in the total skill tree in The Wake. You can already check out the build wars on TheWakeWikis...'
  },
  { 
    question: 'What is the Crafting system?',
    answer: 'In The Wake, there are 6 clothing slots and 1 weapon slot that the player can wear. Outfits, weapons and other items can all be upgraded up to +12. Upgraded items allow you to gain extra stats. In the crafting system, we want players to take risks to get unique items. Success rate is different for each +(for instance: to go from +3 to +4, the success rate is 20% ....). There are two different options if the player is unsuccessful in crafting: the first possibility results in the complete destruction of the item, the second possibility results in the item`s current + being reset and the item will be without +.'
  },
  { 
    question: 'What about Quest designs and variety?',
    answer: 'We have designed more than 400 special quests for The Wake. Quests are unique and never repeated. They are divided into Main quests and Side quests and they will allow you to discover and understand the storyline of the game. Mechanically, The Wake offers you variety. '
  },
  { 
    question: 'Are Dungeons important?',
    answer: 'Absolutely! They are one of the most important dynamics of the game. We put a lot of care and consideration into the designs and themes of the dungeons. There are 80+ dungeons in the game. Different missions and a hard-to-kill boss are waiting for you in each dungeon. Will you join these Dungeons with your friends or dare to go there alone?'
  },
  { 
    question: 'What is Castle war?',
    answer: 'Castle wars are battles to take control of castles located in various places in each universe. In castle wars, you must determine your strategy with your team limited to 6 players and fight in a specific area. At the end of the determined time, the team that collects the most war points takes control of the castle in this system. The captured castle is locked until the next war and provides various advantages and returns. These wins and rewards are distributed equally to the players of the winning team after the castle war is over. Additionally, the name and flag of the winning team are displayed on the map.'
  },
  { 
    question: 'What is Land War?',
    answer: 'It is the battleroyale mode where teams of 24 players can fight. It is organized on a weekly and monthly basis. The winning team takes control and wins various prizes.'
  },
  { 
    question: 'Can we really ride a magical tiger?',
    answer: 'Yeah! There are 5 companions in The Wake. The pets are accessible based on your level and the development of your character. Companions are divided into groups: rideable and supportive. To access and unlock these awesome creatures, you must do the activities in the game and complete the requirements.'
  },
  { 
    question: ' Is there a PVP Arena too?',
    answer: 'What do you think! Are you ready for a battle with rival players to feel the exciting feeling of victory! PVP arenas will be open at certain times of the day and are accessible on a limited basis. Apart from that, in some regions of the realms, players of different races can fight continuously.'
  },
  { 
    question: 'How many class or race nations are there in The Wake?',
    answer: 'When you enter the game, there are 4 race selections. Races simply represent the blood you belong to. After the race selection, the class selection screen welcomes you. Currently, there are 6 class selections and each class has its own characteristics. It is not possible to make changes after the race and class selection is made! So decide carefully.'
  },
  { 
    question: 'What roles do Gods play in The Wake?',
    answer: 'Some gods will support you in this war, but most of them are waiting for you to kill you. As a feature of the game, 52 gods will appear at random points in the realms. A notification is sent to everyone when the god spawns. Each god has a different spawn point and players have to rush to these areas as quickly as they can, find and kill the god. Remember the gods are much stronger than a single character but a whole group of players will be looking for them! So join forces! Special items and collectibles are to be collected after defeating a god. '
  },
]

const tech_faq_content = [
  {
    question: 'Is there a native Token in The Wake?',
    answer: 'No! At The Wake, we keep the long-term success of our game at the core of everything we do. We always focus on what we can control and have decided not to have a native token.'
  },
  {
    question: 'So, what is inside The Wake?',
    answer: 'All items within The Wake are NFT based so that we provide the players with ownership, traceability and transparency of all in game activities. Rewards will be issued with stablecoins. '
  },
  {
    question: 'How easy is it to start playing? As a web2 player, how can I join the game?',
    answer: 'Very easy! We have designed a smooth in-game onboarding process and have teamed up with innovative projects to make the signin/ login as frictionless as possible. You do not need to have experience with digital wallets and cryptocurrencies to start playing! '
  },
  {
    question: 'What is the NFT utility?',
    answer: 'Every NFT offered for sale or gained within the game is designed for in-game purposes. We call it utility! You will need and use every NFT at some point in the game. Because that`s how we set it up :) Every NFT in The Wake is valuable.'
  },
  {
    question: 'Could it be NFT inflation?',
    answer: 'We took all the precautions! Each NFT item has different variations. In addition, we have developed a crafting system and burning mechanism that will protect NFTs prices and ratings.'
  },
  {
    question: 'How to earn NFT?',
    answer: 'All in-game systems and side activities can give you NFT rewards as well as stablecoins rewards.'
  },
  {
    question: 'What can we buy from The Wake Marketplace?',
    answer: 'Cosmetic NFTs and Lootboxes are available. In addition, Premium and Season pass can be purchased. Some progress items and activity entry coupons will be available in the marketplace from time to time.'
  },
  {
    question: 'How does the rewards system work?',
    answer: 'The Wake reward mechanism is quite generous, but your earnings are directly correlated to your character`s development and the time you spend in the game.'
  },
  {
    question: 'There is any requirements for playing The Wake?',
    answer: 'No way! It`s not fair to charge an entry fee for players or have NFT requirements. The first 4 realms are open to all and all in-game activities are free to play. If you like the game, you can invest in The Wake when you want to develop your character further and activate more content.'
  },
  {
    question: 'Are there any limits on in-game activities?',
    answer: 'Yeah! There is a daily limit on some of the in-game activities to balance the game and the earnings. It is not possible to exceed this daily limit by paying a fee! You need to find more in-game activities and some NFTs to increase the limits. Limits may increase depending on player level and success.'
  },
  {
    question: 'Can I overcome any obstacle by paying money?',
    answer: ' No way! All in-game systems have been created as a result of long testing sessions and trials. The time you spend in-game is the most important metric. By paying money, you can only get rare rewards faster or enter high-level activities. But money alone is not enough, activities will require you to have played the game for a certain period of time, to have gained access to certain type of NFTs.'
  },
  {
    question: 'Where can I sell my NFTs?',
    answer: 'The Wake is a game with its own ecosystem and you can initially sell your NFTs on The Wake Marketplace.'
  },
  {
    question: 'Can I lend my NFT to my friend?',
    answer: 'No.'
  },
  {
    question: 'How many degrees of NFT rarity are there?',
    answer: 'There are 6 different degrees of rarity. - Godwill - Yggpow - Legendary - Rare - Un-Common - common'
  },
  {
    question: 'Can I upgrade my NFTs to a higher rarity?',
    answer: 'Yes, it is possible! If you spend 4-6 NFTs of the same rarity and cover the progress fee, you can get a higher rarity NFT. Remember, every upgrade has a chance of failure.'
  },
  {
    question: 'Is there a solution for players who are only financially minded?',
    answer: 'The entire architecture of the game is geared towards playing the game. In other words, all players, financially motivated or not, will do the same in-game activities. '
  },
]

const multi_faq_content = [
  {
    question: 'Is there any in-game communication in The Wake?',
    answer: 'Yes! We support Global and in-server chat. You can use different software for voice conversation, like discord or teamspeak.'
  },
  {
    question: 'How many servers will be in The Wake?',
    answer: 'Feedbacks after the Closed Beta launch will give us an indication in the number of servers, but 3-5 servers from different regions are sufficient to start with.'
  },
  {
    question: 'How many players can play at the same time?',
    answer: 'The number of players cap is decided according to how many people the in-game activities are set for and whether it is sufficient or not. The maximum number of players in The Wake will be 1000-2500 per server to start with.'
  },
  {
    question: 'How will the new players keep up with the seasoned players?',
    answer: 'Depending on the number of players, new servers will be opened on a regular basis. The player can continue his development on the new server or keep developing on the old servers. The new server may be better suited for new players in terms of competition.'
  },
]

const disa_faq_content = [
  {
    question: 'Who are you guys?',
    answer: 'We are a company managed from Turkey but employs talents globally. All team members are hardcore gamers who combined 30+ years of experience in web2 gaming and startups. We are game developers with experience from God of Wars, Eve Online, The Witch Wild Hunt, GTA V, Silk Road Online, Anthem ...  '
  },
  {
    question: 'What is your mission? ',
    answer: 'We keep the fun at the core of everything we do. We are a gaming startup leveraging the blockchain technology to re-align the incentives between the gamers and the game developers. '
  },
  {
    question: 'What is your AI strategy? ',
    answer: 'We are always considering how to best integrate new technology and innovation into our game. For instance, we are currently working on integrating generative AI technology into the scripts writing or even integrating an AI/ Avatar technology so that you can generate play with a character that looks just like you … in the Norse mythology! '
  },
]
  
</script>

<style>
.collapse-enter-active,
.collapse-leave-active {
  transition: opacity 0.1s ease-in;
}

.collapse-enter-from {
  opacity: 0;
}

.collapse-leave-to {
  opacity: 0;
}
</style>
