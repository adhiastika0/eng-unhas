<template>
  <nav class="">
    <div class="container min-w-full py-2 bg-navy">
      <div class="container mx-auto">
        <img
          src="./assets/logo-teknik.png"
          alt="Teknik Unhas"
          class="mx-auto"
        />
      </div>
    </div>
    <div
      class="container min-w-full mx-auto bg-red font-Montserrat font-semibold text-sm"
    >
      <div class="flex flex-row justify-center flex-wrap text-white px-10">
        <!-- Loop untuk membuat dropdown -->
        <div
          v-for="(item, index) in navbarItems"
          :key="index"
          class="relative z-50"
          id="dropdownButton"
        >
          <div
            @mouseover="toggleDropdown(index)"
            @mouseout="addDropdown(index)"
            class="hover:bg-white hover:text-red"
          >
            <div class="py-2 px-4">
              <router-link :to="'/'">{{ item.title }}</router-link>
            </div>

            <div class="absolute">
              <div :id="'dropdown' + index" class="absolute hidden">
                <div
                  @click="toggleDropdown(index)"
                  v-for="(dropdownItem, dropdownIndex) in item.children"
                  :key="dropdownIndex"
                  class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
                >
                  <router-link :to="'/pages/' + dropdownItem.slug">{{
                    dropdownItem.title
                  }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto relative min-w-full z-0">
      <img
        src="./assets/jumbotron.png"
        alt="Faculty of Engineering"
        class="opacity-80 object-cover min-w-full max-h-[500px] z-0"
      />
      <div class="absolute mx-auto left-0 right-0 max-w-7xl">
        <div
          class="absolute bg-gray text-white py-2 px-2 mx-auto sm:left-28 sm:text-md sm:bottom-32 lg:text-3xl lg:bottom-36 font-extrabold font-Montserrat"
        >
          SELAMAT DATANG DI
        </div>
        <div
          class="absolute bg-navy text-white py-2 px-2 sm:left-28 sm:text-md sm:bottom-20 lg:text-3xl font-extrabold font-Montserrat"
        >
          FAKULTAS TEKNIK, UNIVERSITAS HASANUDDIN
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
  
</template>


<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    // Menggunakan ref untuk membuat navbarItems sebagai variabel reaktif
    const navbarItems = ref([]);

    const getNavbar = async () => {
      try {
        const response = await fetch(
          'https://directus-npm-test-production.up.railway.app/items/navigation?filter[id]=main&fields=*,items.*,items.children.*,items.children.page.*'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        // Check if the 'data' property exists in the response
        if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
          const data = responseData.data;

          // Mengubah nilai navbarItems dengan nilai yang baru
          navbarItems.value = data.flatMap((data) =>
            data.items.map((child) => ({
              title: child.title, // Menambahkan id dari child
              children: child.children.map((subChild) => ({
                title: subChild.title,
                slug: subChild.page ? subChild.page.slug : null, // Menambahkan slug jika page ada
              })),
            }))
          );

          console.log(navbarItems.value);

          // Mengembalikan navbarItems sebagai variabel yang dapat diakses di komponen lain
          return { navbarItems };
        } else {
          console.error('Invalid API response:', responseData);
          // Handle this case according to your requirements
          return { navbarItems: [] };
        }
      } catch (error) {
        console.error('Fetch error:', error);
        // Handle the error gracefully (e.g., show a message to the user)
        throw error; // Re-throw the error to handle it at the component level if needed
      }
    };

    onMounted(async () => {
      // Panggil getNavbar untuk menginisialisasi navbarItems saat komponen di-mount
      await getNavbar();
    });

    // Mengembalikan navbarItems sebagai variabel yang dapat diakses di tampilan atau komponen lain
    return { navbarItems };
  },

  methods: {
    toggleDropdown(index) {
      let dropdown = document.querySelector(`#dropdown${index}`);
      dropdown.classList.toggle('hidden');
    },

    addDropdown(index) {
      let dropdown = document.querySelector(`#dropdown${index}`);
      dropdown.classList.add('hidden');
    },
  },
};
</script>

