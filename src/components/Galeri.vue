<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref } from "vue";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'Galeri',
  props: {
    msg: String
  },
  setup() {
    const Agenda = ref([
        {
          desc: "Hasanuddin University Graduation Period IV Phase II",
          img: "https://s3-alpha-sig.figma.com/img/2a81/3f0b/884ec2b2c7566e91a2d24070e482c4c2?Expires=1698624000&Signature=gxC2It~Cr30M77ijcQHPyOZXqwlAMa9~ovsRMg~Nq~CpHfZQIEhz~6lD0E~F8ggwLvZ1LvXSX-Xu5ScSiqnNnZ0NlzkVwa2a-9IBTDNOrKnHbvPzh1vZ3SdI~8XFPO1QvvJOhqf2tQaYosx1I2g7P90LmlhxRkN3-qSqZu6u4r7sQEyDqscKOeGyFy6vo9MndGBkm7bIvVWM4uN2aHLWsirYQSYzYkE2a8U2nKlZskWGv26q90~CBj9N0UUhvZ649w1GVAV8-QMt1ezIKHD-42Fcp7-5GOm19Tm1j5WGkmnUtjto3DDxeqfAokJqXlhxu95jAtbzX5sjiZelHUYewA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

        },
        {
          desc: "Digital Transformation of Mail Management (mBerkas)",
          img: "https://s3-alpha-sig.figma.com/img/3d51/25b8/9d77007fe42a9afe3f05570d1b0e7a52?Expires=1698624000&Signature=p03L5D5HXlw5FlCh0mXOp9mJ2VOabl93qJOj4ciFIhErUKfTNWMydU9c7yostc9fb40y-dzOGYAaV8oH09Sn2tsf8rSCY2Imj06pixoDcfGqTXqNELP5y6Bea09BujLb90T4~pKWPuLuizXuPFPbd0Kr3HnKD3rOnk8v2rraWoMDPNXcCbgKtiJwiRFnWIoWzr5myca~U4iipp117n4DCli5CEw9X5rtMUD-Zy6GlbTm7iFUNWVjfZV~nbg5Z5YNwtrVYxFT4~IJcx9WfPGWB6Ep5unMe2tOpbNusQkMmcOB~oCcJwfKq52zZ9e6l7ftU0n1GOORk53mcxOsixhudg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

        },
        {
          desc: "Internal Coordination Meeting Faculty of Engineering",
          img: "https://s3-alpha-sig.figma.com/img/5c00/4d10/6d56ae1d4622bd219aa4b5ad5af9bb9b?Expires=1698624000&Signature=BTCS1RyIcbCp-ZttVfiEK-2GuZTSpKZBuojioogF7muHo17sUQ8ncqqGJL7BiflfY65Yt~DfzSJRaMGdjpWjpJLafkFKrWJ0QfCYBsjQswn9UewJOKGzZrfXLLK56LnKCdwgTroEyNmvUxfvJPAIr8lAnVCxJp4n6Jy~UsoZIytBW8cjQEoWWSBTy2G-rBJ4v0rFamX4GAELuwNIKTfaldsYPeenc09tsBct~1Y4nXSHAGx2EOjISDlWoSEfOsTn30m2faqTZTpZ779B3WtILwYvEZCIYhWiMItNVp02cHP2MHmyNAT1Y4ekRTHXYDuPuk0CCBLHZYlBslJFZ87O4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

        },
        {
          desc: "Hasanuddin University Faculty of Engineering Working Meeting",
          img: "https://s3-alpha-sig.figma.com/img/2667/cfe2/0e2b9cea83346505f5b35449e66b7d39?Expires=1698624000&Signature=AZwi63iWxYKh5GGWsLlp7SYVQjzP~a0mLyTNaa6u1hmX1ETOvgOcu5kIqNPtb9CsBA6-sOIlYaKlYYh3YTWDRvbapvlkBhLkYrQ5FDqh-8tS0q4IKbV4lqomaKctHTxw2cNWg9Wd90qkq49uVJz9EGBksAU0Tqm9MyRecz0gyO4BFmy811a6k5abzQAwBwx1sm0Nlk~CbncUeXL28mhUUkL17OceZKHL0zwLRCgG40rQMrJceap3Ewb2gcGFfDX22Dtk6TTjvoI-CkMy2PJ9WpkkS02P35dM2sAHupxopSnok3yY4GAkFQWkC6y85xnOaZK~oQKj06QLGpJ~s0mF3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          desc: "Cooperation Agreement with External Parties",
          img: "https://s3-alpha-sig.figma.com/img/78de/511d/2aefae428d76979f07ba30c916242c5e?Expires=1698624000&Signature=i1AWtzfU1sG2sqK5BkDT6aC4N8Y0LE1T0r38y9X-TRtuebLmC1Fa0PkGz18789ncuCBHFz9YVX0JowBwWWPpqukuoukx8GnUYrWbAElVcCQYeN00R4WKj1P~AAINleQslnrTWDxNwf3klDYzBf3WmNSlh-rHOnrkdgCEy7i8TN8VvTB0KKo9YiFjlym5ZHbYq7BABos4OT4ArYNYQuA-TyebSVHimdrjPjhMvgjt5-E9MPxVRRkRJR6ZwCXth-gXJ1bBYcXbVj1glmmUpXGwMkGxSNYRRtkVzfPxvoKnq0fyXY1vcPmJHqTUxjQHh9LzvjWhphzSsia1VqFAZcw-Fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }
      ])

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
    <Swiper
      class="max-w-7xl"
      :rewind="true"
      :navigation="true"
      :mousewheel="true"
      :keyboard="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules" 
      :slidesPerView= 3
      :spaceBetween=40
      :grabCursor="true"
      :scrollBar="{
        clickable: true,
      }"
      :autoplay="{
        delay:5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      >
        <SwiperSlide class="h-full w-full mb-10" v-for="content in Agenda" :key="content.desc">
          <img class="rounded-t-lg mx-auto object-fill h-[300px]" :src=content.img alt="Agenda Photo">
          <h1 class="bg-navy py-5 px-5 mx-auto h-32 text-white text-xl rounded-b-lg">{{ content.desc }}</h1>
        </SwiperSlide>
      </Swiper>
    </div>
</template>