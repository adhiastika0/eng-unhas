<template>
  <div class="slug">
    <div class="bg-navy text-white text-xl py-5 px-5">Halaman : {{ $route.params.slugParam }}</div>
    <div v-for="(item, index) in pageItems" :key="index" class="py-5 px-5">
      <div>{{ item.items.headline }}</div>
      <div v-html="item.items.content"></div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

export default {
  setup() {
    const pageItems = ref([]);
    const router = useRouter();
    const route = useRoute();

    const getPages = async () => {
      try {
        const response = await fetch(
          `https://directus-npm-test-production.up.railway.app/items/pages?filter[slug]=${route.params.slugParam}&fields[]=data&fields[]=blocks.item&fields[]=blocks.item.content&fields[]=blocks.item.headline`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        // Check if the 'data' property exists in the response
        if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
          const data = responseData.data;

          // Mengubah nilai pages dengan nilai yang baru
          pageItems.value = data.flatMap((data) =>
            data.blocks.map((block) => ({
              items: block.item,
            }))
          );

          console.log(pageItems.value);

          // Mengembalikan pageItems sebagai variabel yang dapat diakses di komponen lain
          return { pageItems };
        } else {
          console.error('Invalid API response:', responseData);
          // Handle this case according to your requirements
          return { pageItems: [] };
        }
      } catch (error) {
        console.error('Fetch error:', error);
        // Handle the error gracefully (e.g., show a message to the user)
        throw error; // Re-throw the error to handle it at the component level if needed
      }
    };
    onMounted(async () => {
      // Panggil getPages untuk menginisialisasi pageItems saat komponen di-mount
      await getPages();
    });

    watch(
      () => route.params.slugParam,
      async (newSlug, oldSlug) => {
        // Jika nilai slug berubah, panggil getPages dan refresh halaman
        if (newSlug !== oldSlug) {
          await getPages();
        }
      }
    );

    return {
      router,
      pageItems,
    };
  },
};
</script>
