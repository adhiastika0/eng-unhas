<template>
  <div class="bg-navy text-white mx-auto p-8 min-w-full">
    <div>
      <h1 class="text-2xl font-bold underline text-center my-4">
        {{ pageTitle }}
      </h1>
    </div>
    <div
      class="flex flex-col items-center gap-x-5 md:flex-row mx-auto p-10 max-w-7xl"
    >
      <div class="mx-auto">
        <img
          :src="pageImage"
          alt="Dharma Wanita"
          class="flex object-cover w-[1000px] h-64 rounded-lg justify-center"
        />
      </div>
      <div class="mt-0 mb-10">
        <div class="mt-4 mx-auto">
          <p class="text-1xl text-justify">
            {{ pageContent }}
          </p>
        </div>
        <div class="mt-4 relative">
          <button
            class="rounded-full border-4 border-sky-800 h-8 w-40 absolute inset-y-0 left-0 bg-white text-navy px-3"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
      pageImage: '',
      pageContent: '',
      buttonText: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Fetch data from the API
        const response = await fetch(
          'https://directus-npm-test-production.up.railway.app/items/block_hero/81127ead-a612-4655-bc0e-38db5b448ed2'
        );
        const data = await response.json();

        // Update data properties
        this.pageTitle = this.removeHtmlTags(data.data.headline);
        this.pageImage = this.getImageUrl(data.data.image);
        this.pageContent = this.removeHtmlTags(data.data.content);
        this.buttonText = data.data.buttons[0].label;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getImageUrl(imageId) {
      return `https://directus-npm-test-production.up.railway.app/assets/${imageId}`;
    },
    sanitizeHtml(html) {
      // Sanitize HTML content if needed
      // Implement a sanitization library or custom logic here
      return html;
    },
    removeHtmlTags(html) {
      // Remove HTML tags from the given HTML string
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    },
  },
};
</script>
