<template>
  <div v-if="remarks.length > 0" class="space-y-3" style="margin-top: 0px;">
    <div class="flex justify-center text-navy font-bold font-Montserrat underline decoration-navy text-[20px] lg:text-[25px]">SAMBUTAN DEKAN</div>
    <div class="container flex flex-col justify-center items-center mx-28 p-7 bg-navy space-x-5 rounded-lg lg:flex-row">
      <div class="px-6">
        <img :src="remarks[0].image" class="w-[200px] pb-3 lg:pb-0 lg:w-[2100px]">
      </div>
      <div class="space-y-4 px-2 lg:px-6">
        <p class="text-[10px] text-white font-Inter text-justify lg:text-[14px]">{{ remarks[0].fill }}</p>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            remarks: []
        }
    },
    async created() {
        try {
            let response = await axios.get('https://directus-npm-test-production.up.railway.app/items/remarks')
            this.remarks = response.data.data
            for (let i = 0; i < this.remarks.length; i++) {
                this.remarks[i].image = `https://directus-npm-test-production.up.railway.app/assets/${this.remarks[i].image}`
            }
        } catch(error) {
            console.error(error)
        }
    }
}
</script>