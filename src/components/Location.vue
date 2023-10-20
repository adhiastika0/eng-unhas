<template>
  <div class="hello">
    <div class="bg-navy h-[450px] flex mx-[100px] p-[20px]">
      <div class="ml-[30px]">
        <img class="h-20 w-auto mt-100" src="https://cot.unhas.ac.id/public/homepage/images/img/unhas.png">
        <input class="text-black mb-[10px] mt-[10px] w-[400px] h-[35px] pl-5" type="text" placeholder="Search">
        <div class="relative">
          <button @click="show = !show" class="flex items-center p-2 text-navy bg-white text-left w-[400px] h-[35px]">
            <span class="w-500 whitespace-no-wrap">Faculty Of Engineering</span>
            <svg class="w-5 h-5 text-navy dark:text-navy ml-[170px]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </button>
          <div v-show="show" class="py-2 mt-2 bg-white rounded-0 shadow-xlw-44 ml-0 text-left" @mouseenter="isDropdownHovered = true" @mouseleave="isDropdownHovered = false" style="">
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> Main Bridge</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> CSA Library</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> CSA Theater Library</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> CSA Library Show Case</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> Center of Technology (CoT)</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black  hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)"> CoT Ground Floor</router-link>
      </div>
      </div>
    </div>
    <img class="position-absolute ml-[10px] p-[60px]" src="https://selatan.herald.id/wp-content/uploads/sites/10/2022/03/FT-Unhas.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    show: false,
    isHovered: false,
    isHoveredOnDropdown: false,
    isHoveredOnMainBridge: false
  };
},
methods: {
  setHoveredOnDropdown(value) {
      this.isHoveredOnDropdown = value;
  },
  setHoveredOnMainBridge(value) {
    this.isHoveredOnMainBridge = value;
    this.isHoveredOnDropdown = false;
  }
}
}
</script>
