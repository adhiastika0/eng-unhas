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
      class="container min-w-full mx-auto bg-red font-Montserrat font-semibold text-sm"
    >
      <ul class="flex flex-row justify-center flex-wrap text-white px-10">
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">News</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Profile</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Academics</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Resources</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">K3</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Student Affairs</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Research and Innovation</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">Partnership</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">QA-RI</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">COT</a>
        </li>
        <li class="hover:bg-white hover:text-red py-2 px-4">
          <a href="#">DW</a>
        </li>
      </ul>
    </div>
    <div class="container mx-auto relative min-w-full">
      <img
        src="../assets/jumbotron.png"
        alt="Faculty of Engineering"
        class="opacity-80 object-cover min-w-full max-h-[500px]"
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
