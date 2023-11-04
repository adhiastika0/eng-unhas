<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },

  data() {
    return {
      dropdownItems: [
        {
          label: 'News',
        },
        {
          label: 'Profile',
          items: [
            'News',
            'History',
            'Vision, Mission and Objectives',
            'Management',
          ],
        },
        {
          label: 'Academics',
          items: [
            'Departements',
            'Master Program',
            'Doctoral Program',
            'Professional Program',
            'Acreditation',
          ],
        },
        {
          label: 'Resources',
          items: [
            'Professor',
            'Administration',
            'Campus Facilities',
            'Library',
          ],
        },
        {
          label: 'K3',
          items: [
            'K3 Profile',
            'Organization Structure of K3',
            'K3 FT-UH',
            'Files',
          ],
        },
        {
          label: 'Student Affairs',
          items: [
            'Student Dormitory',
            'Student Character',
            'Student Achievment',
            'Inbound and Outbond',
          ],
        },
        {
          label: 'Research and Innovation',
          items: [
            'List of LBE Research',
            'Innovate Products',
            'Intelectuals Rights',
          ],
        },
        {
          label: 'Partnership',
          items: ['National Collab', 'International Collab'],
        },
        {
          label: 'QA-RI',
          items: [
            'QA-RI Profile',
            'Documents',
            'Internal Academic',
            'Accreditation',
          ],
        },
        {
          label: 'COT',
          items: ['COT Web', 'COT Journals', 'COT Newsletter', 'U-I-G Collab'],
        },
        {
          label: 'Dharma Wanita',
          items: ['Main Page', 'Profile', 'Structure', 'Work Plan'],
        },
        // Tambahkan item dropdown lainnya jika diperlukan
      ],
    };
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

<template>
  <nav class="">
    <div class="container min-w-full py-2 bg-navy">
      <div class="container mx-auto">
        <img
          src="../assets/logo-teknik.png"
          alt="Teknik Unhas"
          class="mx-auto lg:mx-28"
        />
      </div>
    </div>
    <div
      class="container relative min-w-full bg-red font-Montserrat font-semibold text-sm"
    >
      <div class="flex flex-row justify-center flex-wrap text-white px-10">
        <!-- Loop untuk membuat dropdown -->
        <div
          v-for="(item, index) in dropdownItems"
          :key="index"
          class="relative z-50"
        >
          <div
            @mouseover="toggleDropdown(index)"
            @mouseout="addDropdown(index)"
            class="hover:bg-white hover:text-red"
          >
            <div class="py-2 px-4">
              <a href="#">{{ item.label }}</a>
            </div>

            <div class="absolute">
              <div :id="'dropdown' + index" class="absolute hidden">
                <div
                  @click="toggleDropdown(index)"
                  v-for="(dropdownItem, dropdownIndex) in item.items"
                  :key="dropdownIndex"
                  class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
                >
                  <a href=""> {{ dropdownItem }} </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Akhir loop dropdown -->
      </div>
    </div>
    <div class="container mx-auto relative min-w-full z-0">
      <img
        src="../assets/jumbotron.png"
        alt="Faculty of Engineering"
        class="opacity-80 object-cover min-w-full max-h-[500px] z-0"
      />
      <div class="absolute mx-auto left-0 right-0 max-w-7xl">
        <div
          class="absolute bg-gray text-white py-2 px-2 mx-auto sm:left-28 sm:text-md sm:bottom-32 lg:text-3xl lg:bottom-36 font-extrabold font-Montserrat"
        >
          WELCOME TO
        </div>
        <div
          class="absolute bg-navy text-white py-2 px-2 sm:left-28 sm:text-md sm:bottom-20 lg:text-3xl font-extrabold font-Montserrat"
        >
          FACULTY OF ENGINEERING, HASANUDDIN UNIVERSITY
        </div>
      </div>
    </div>
  </nav>
</template>
