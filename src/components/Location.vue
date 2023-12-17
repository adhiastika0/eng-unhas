<script>
import axios from 'axios';

export default {
  data() {
    return {
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

  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div v-if="apiData && apiData.data">
      <div v-for="item in apiData.data" :key="item.id">
        <div v-html="item.raw_html" class="w-[1300px] h-[400px] mx-auto"></div>
    </div>
  </div>
</template>