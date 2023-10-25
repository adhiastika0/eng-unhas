<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },

  methods: {
    toogleDropdown() {
      let dropdown = document.querySelector('#dropdownButton #dropdown');
      dropdown.classList.toggle('hidden');
    },
    hideDropdown() {
      let dropdown = document.querySelector('#dropdownButton #dropdown');
      dropdown.classList.add('hidden');
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="container min-w-full mx-auto py-2 flex items-center bg-navy">
      <img src="../assets/logo-teknik.png" alt="Teknik Unhas" class="mx-28">
    </div>
    <div
      class="container min-w-full mx-auto bg-red font-Montserrat font-semibold text-sm"
    >
      <div class="flex flex-row justify-center flex-wrap text-white px-10">
        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">News</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden z-60">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">Profile</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden z-50">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">Academic</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">Resources</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">K3</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">Student Affairs</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">Research and Innovation</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">News</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">News</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

        <div
          @click="toogleDropdown()"
          class="relative z-50"
          id="dropdownButton"
        >
          <div class="relative flex flex-row space-y-10">
            <div class="hover:bg-white hover:text-red py-2 px-4">
              <a href="#">News</a>
            </div>
            <div id="dropdown" class="absolute left-[0px] my-2 hidden">
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                News
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
              <div
                class="w-40 py-2 px-5 bg-white border-gray shadow-md text-red cursor-pointer hover:bg-red hover:text-white hover:border-white"
              >
                NEWS
              </div>
            </div>
          </div>
        </div>

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

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>
