<template>
  <div v-if="apiData && apiData.data">
      <div v-for="item in apiData.data" :key="item.id">
        <div v-html="item.raw_html" class="w-[1300px] h-[400px] m-auto"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      show: false,
      isHovered: false,
      isHoveredOnDropdown: false,
      isHoveredOnMainBridge: false,
      apiData: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://directus-npm-test-production.up.railway.app/items/block_html');
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setHoveredOnDropdown(value) {
      this.isHoveredOnDropdown = value;
    },
    setHoveredOnMainBridge(value) {
      this.isHoveredOnMainBridge = value;
      this.isHoveredOnDropdown = false;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>