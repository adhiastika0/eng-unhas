<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { onMounted, ref } from 'vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

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
        const response = await fetch('http://localhost:8055/items/galery');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Check if the 'data' property exists in the response
        if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
          const data = responseData.data;

          // Assuming 'data' is an array of objects with properties 'title' and 'image'
          const mappedData = data.map((item) => ({
            title: item.title,
            image: item.image,
          }));

          return mappedData;
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
      galeri,
      modules,
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
.swiper-button-prev {
  background-color: navy !important;
}
</style>

<template>
  <div class="mx-28">
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
            :src="`http://localhost:8055/assets/${content.image}`"
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
