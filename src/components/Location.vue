<template>
  <div class="hello">
    <div class="bg-navy" style="height: 450px; display: flex; margin: 0 100px;">
      <div style="padding: 20px; margin-left: 60px;">
        <img class="h-20 w-auto mt-100" src="https://cot.unhas.ac.id/public/homepage/images/img/unhas.png" alt="">
        <input class="text-black" type="text" placeholder="Search" style="margin-bottom: 10px; margin-top: 10px; width: 400px; height: 35px; padding-left: 20px;">
        <div class="relative">
          <button @click="show = !show" class="flex items-center p-2 text-navy bg-white rounded-md" style = "border-radius: 0; text-align: left; width: 400px; height: 35px;">
            <span class="mr-4 w-500" style="white-space: nowrap; overflow: hidden;">Faculty Of Engineering</span>
            <svg class="w-5 h-5 text-navy dark:text-navy" viewBox="0 0 20 20" fill="currentColor" style="margin-left: 170px;">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </button>
          <div v-show="show" class="py-2 mt-2 bg-white rounded-md shadow-xlw-44 ml-40" @mouseenter="isDropdownHovered = true" @mouseleave="isDropdownHovered = false" style="border-radius: 0; margin-left: 0px;">
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> Main Bridge</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> CSA Library</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> CSA Theater Library</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> CSA Library Show Case</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> Center of Technology (CoT)</router-link>
            <router-link to="/" class="block px-4 py-2 text-sm text-black  hover:bg-red hover:text-white transition-opacity duration-300 ease-in-out" @mouseenter="setHoveredOnDropdown(true)" @mouseleave="setHoveredOnDropdown(false)" style="text-align: left;"> CoT Ground Floor</router-link>
      </div>
      </div>
    </div>
    <img class="position-absolute" src="https://selatan.herald.id/wp-content/uploads/sites/10/2022/03/FT-Unhas.jpg" alt="" style="margin-left: 90px; padding: 60px;">
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

<style scoped>
.absolute {
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
