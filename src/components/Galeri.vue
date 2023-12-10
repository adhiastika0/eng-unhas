<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from 'vue';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'Galeri',
  props: {
    msg: String,
  },
  setup() {
    const galeri = ref([]);
    const modules = [Navigation, Pagination, Mousewheel, Keyboard];

    const getGaleri = async () => {
      try {
        const response = await fetch(
          'https://directus-npm-test-production.up.railway.app/items/block_columns/d87e71df-149f-4fcb-839e-ad876598c370'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Check if the 'data' property exists in the response
        if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
          const data = responseData.data;

          // Assuming 'gallery_items' is an array of gallery items IDs
          const galleryItems = data.rows;

          // Fetch gallery item details using the IDs
          const galleryData = await Promise.all(
            galleryItems.map(async (itemId) => {
              const itemResponse = await fetch(
                `https://directus-npm-test-production.up.railway.app/items/block_columns_rows/${itemId}`
              );
              if (!itemResponse.ok) {
                throw new Error(`HTTP error! Status: ${itemResponse.status}`);
              }

              const itemData = await itemResponse.json();

              // Assuming 'data' is an object with properties 'title' and 'image'
              return {
                title: itemData.data.title,
                image: itemData.data.image
              };
            })
          );

          return galleryData;
        } else {
          console.error('Invalid API response:', responseData);
          // Handle this case according to your requirements
          return [];
        }
      } catch (error) {
        console.error('Fetch error:', error);
        // Handle the error gracefully (e.g., show a message to the user)
        throw error; // Re-throw the error to handle it at the component level if needed
      }
    };

    onMounted(async () => {
      try {
        const data = await getGaleri();
        console.log('API Response:', data);
        galeri.value = data;
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error gracefully (e.g., show a message to the user)
      }
    });

    return {
      Agenda,
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style scoped>
.swiper-button-prev {
  background-color: navy !important;
}
</style>

<template v-slot="swiper-button-next">
  <div class="mx-28 xl:mx-auto">
    <p
      class="text-navy flex mx-auto justify-center text-3xl font-Montserrat font-bold underline pb-5"
    >
      GALERI
    </p>
    <div>
      <Swiper
        v-if="galeri && galeri.length > 0"
        class="max-w-7xl"
        :rewind="true"
        :navigation="false"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :mousewheel="true"
        :keyboard="true"
        :pagination="{ clickable: true }"
        :modules="modules"
        :slidesPerView="3"
        :spaceBetween="40"
        :grabCursor="true"
        :scrollBar="{ clickable: true }"
      >
        <SwiperSlide
          class="h-full w-full mb-10"
          v-for="content in galeri"
          :key="content.image"
        >
          <img
            class="rounded-t-lg mx-auto object-fill h-[100px] w-full lg:h-[250px]"
            :src="`http://directus-npm-test-production.up.railway.app/assets/${content.image}`"
            alt="Agenda Photo"
          />
          <h1
            class="bg-navy py-2 px-5 mx-auto h-15 text-white text-[10px] lg:py-5 lg:h-32 lg:text-[15px] rounded-b-lg"
          >
            {{ content.title }}
          </h1>
        </SwiperSlide>
      </Swiper>
      <div v-else>
        <p>No data available.</p>
      </div>
    </div>
  </div>
</template>
