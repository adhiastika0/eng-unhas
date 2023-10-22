
<template>
  <nav class="navbar">
    <div class="container min-w-full mx-auto py-2 flex items-center bg-navy">
      <img src="../assets/logo-teknik.png" alt="Teknik Unhas" class="mx-28">
    </div>
    <div class="container min-w-full mx-auto bg-red font-Montserrat font-semibold text-sm">
      <ul class="flex flex-row justify-center text-white">
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">News</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Profile</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Academics</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Resources</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">K3</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Student Affairs</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Research and Innovation</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">Partnership</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">QA-RI</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">COT</a></li>
        <li class="hover:bg-white hover:text-red py-2 px-4"><a href="#">DW</a></li>
      </ul>
    </div>
    <div class="container mx-auto relative min-w-full">
      <img src="../assets/jumbotron.png" alt="Faculty of Engineering" class="opacity-80 min-w-full">
      <div class="absolute bg-gray text-white flex justify-start bottom-40 left-28 items-center py-2 px-2 text-3xl font-extrabold font-Montserrat">
        WELCOME TO
      </div>
      <div class="absolute bg-navy text-white flex justify-start bottom-24 left-28 items-center py-2 px-2 text-3xl font-extrabold font-Montserrat">
        FACULTY OF ENGINEERING, HASANUDDIN UNIVERSITY
      </div>
    </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>