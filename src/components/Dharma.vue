<template>
  <div class=" bg-navy text-white mx-auto  p-8">
    <div>
      <h6 class="font-bold underline">DHARMA WANITA</h6>
    </div>
    <div class="px-14 py-8 flex gap-1 justify-around  mx-auto">
      <div class="container mx-auto py-2 flex items-center ">
        <img src="../assets/dharma.png" alt="Dharma Wanita" class="w-100 h-64 rounded-lg">
      </div>
      <div class="justify-items-start gap-y-8 mt-9">
        <div>
          <p CLASS="text-left text-1xl">Dharma Wanita Association of the Faculty of Engineering, Hasanuddin University, chaired by Mrs. Muralia Isran Ramli, actively carries out various activities such as Ramadan charity, social gatherings on ships, BKMT and DPW Unhas activities.</p>
        </div>
        <div class="relative mt-4">
          <button class=" rounded-full border-4 border-sky-800 h-8 w-28 absolute inset-y-0 left-0  bg-white text-navy px-3  ">Read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
