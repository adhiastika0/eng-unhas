<template>
    <div v-if="news.length > 0" class="space-y-5 mx-28 flex flex-col">
        <div class="flex flex-col lg:space-x-5 lg:flex-row">
            <div class="flex flex-col basis-2/3 space-y-3">
                <div class="bg-navy font-Montserrat text-white font-medium text-center rounded text-xl py-2 lg:text-3xl">BERITA</div>
                <div class="rounded-sm relative">
                    <img :src="news[0].image" class="rounded-md w-full">
                    <div class="flex flex-col">
                        <div class="bg-navy absolute flex items-center space-x-2 rounded px-2 mb-1 left-6 bottom-[83px] lg:bottom-28">
                            <img src="../assets/calendar2.png" class="w-[12px]">
                            <p class="text-white font-Inter font-normal text-[8px] lg:text-xs">{{ formatDate(news[0].created_on) }}</p>
                            <p class="text-white font-extrabold text-[10px] lg:text-[14px]">|</p>
                            <img src="../assets/admin2.png" class="w-[12px]">
                            <p class="text-white font-Inter font-normal text-[8px] lg:text-xs">{{ news[0].created_by.name }}</p>
                        </div>
                        <span class="absolute left-6 right-24 bottom-4">
                            <p class="font-Inter font-bold text-white text-justify text-shadow-sm shadow-black text-[11px] lg:text-[16px]">{{ news[0].title }}</p>
                        </span>
                        <button class="absolute right-2 bottom-3">
                            <img src="../assets/selengkapnya.png" class="w-16 lg:w-[150px]">
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="informations.length > 0" class="flex flex-col basis-1/3 mt-5 ml-0 lg:mt-0 lg:space-y-3">
                <div class="bg-navy font-Montserrat text-white font-medium text-center rounded text-xl py-2 lg:text-3xl">INFORMASI</div>
                <div class="border-2 border-navy rounded-sm space-y-4 p-2 grid mt-3 lg:space-y-6 lg:p-5 lg:justify-items-center">
                    <div class="space-y-1 lg:space-y-2">
                        <p class="text-black font-Inter text-left font-light text-[12px] lg:text-sm">{{ informations[0].title }}</p>
                        <div class="flex items-center space-x-1 lg:space-x-2">
                            <div>
                                <img src="../assets/calendar.png" class="w-[8px] lg:w-[14px]">
                            </div>
                            <div>
                                <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-xs">{{ formatDate(informations[0].created_on) }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-1 lg:space-y-2">
                        <p class="text-black font-Inter text-left font-light text-[12px] lg:text-sm">{{ informations[1].title }}</p>
                        <div class="flex items-center space-x-1 lg:space-x-2">
                            <div>
                                <img src="../assets/calendar.png" class="w-[8px] lg:w-[14px]">
                            </div>
                            <div>
                                <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-xs">{{ formatDate(informations[1].created_on) }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-1 lg:space-y-2">
                        <p class="text-black font-Inter text-left font-light text-[12px] lg:text-sm">{{ informations[2].title }}</p>
                        <div class="flex items-center space-x-1 lg:space-x-2">
                            <div>
                                <img src="../assets/calendar.png" class="w-[8px] lg:w-[14px]">
                            </div>
                            <div>
                                <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-xs">{{ formatDate(informations[2].created_on) }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-1 lg:space-y-2">
                        <p class="text-black font-Inter text-left font-light text-[12px] lg:text-sm">{{ informations[3].title }}</p>
                        <div class="flex items-center space-x-2">
                            <div>
                                <img src="../assets/calendar.png" class="w-[8px] lg:w-[14px]">
                            </div>
                            <div>
                                <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-xs">{{ formatDate(informations[3].created_on) }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-[10px] place-self-center">
                        <button class="border-2 border-red hover:bg-red basis-1/3 w-40 flex justify-center place-self-center">
                            <p class="text-red hover:text-white font-Inter font-semibold text-[10px] lg:text-[14px]">SEMUA INFORMASI</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <div class="space-y-1 w-48 lg:w-60">
                <div>
                    <img :src="news[1].image" class="w-full">
                </div>
                <div class="flex items-center space-x-1">
                    <div>
                        <img src="../assets/calendar.png" class="w-[9px] lg:w-[12px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-[11px]">{{ formatDate(news[1].created_on) }}</p>
                    </div>
                    <div>
                        <p class="text-black font-extrabold text-[10px] lg:text-[12px]">|</p>
                    </div>
                    <div>
                        <img src="../assets/admin.png" class="w-[13px] lg:w-[18px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[8px] lg:text-[11px]">{{ news[1].created_by.name }}</p>
                    </div>
                </div>
                <div>
                    <p class="font-Inter text-black text-xs lg:text-md">{{ news[1].title }}</p>
                </div>
                <button>
                    <img src="../assets/selengkapnya.png" class="w-[60px] lg:w-[125px]">
                </button>
            </div>
            <div class="space-y-1 w-48 lg:w-60">
                <div>
                    <img :src="news[2].image" class="w-full">
                </div>
                <div class="flex items-center space-x-1">
                    <div>
                        <img src="../assets/calendar.png" class="w-[9px] lg:w-[12px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[6px] lg:text-[11px]">{{ formatDate(news[2].created_on) }}</p>
                    </div>
                    <div>
                        <p class="text-black font-extrabold text-[10px] lg:text-[12px]">|</p>
                    </div>
                    <div>
                        <img src="../assets/admin.png" class="w-[13px] lg:w-[18px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[7px] lg:text-[11px]">{{ news[2].created_by.name }}</p>
                    </div>
                </div>
                <div>
                    <p class="font-Inter text-black text-xs lg:text-md">{{ news[2].title }}</p>
                </div>
                <button>
                    <img src="../assets/selengkapnya.png" class="w-[60px] lg:w-[125px]">
                </button>
            </div>
            <div class="space-y-1 w-48 lg:w-60">
                <div>
                    <img :src="news[3].image" class="w-full">
                </div>
                <div class="flex items-center space-x-1">
                    <div>
                        <img src="../assets/calendar.png" class="w-[9px] lg:w-[12px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[6px] lg:text-[11px]">{{ formatDate(news[3].created_on) }}</p>
                    </div>
                    <div>
                        <p class="text-black font-extrabold text-[10px] lg:text-[12px]">|</p>
                    </div>
                    <div>
                        <img src="../assets/admin.png" class="w-[13px] lg:w-[18px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[7px] lg:text-[11px]">{{ news[3].created_by.name }}</p>
                    </div>
                </div>
                <div>
                    <p class="font-Inter text-black text-xs lg:text-md">{{ news[3].title }}</p>
                </div>
                <button>
                    <img src="../assets/selengkapnya.png" class="w-[60px] lg:w-[125px]">
                </button>
            </div>
            <div class="space-y-1 w-48 lg:w-60">
                <div>
                    <img :src="news[4].image" class="w-full">
                </div>
                <div class="flex items-center space-x-1">
                    <div>
                        <img src="../assets/calendar.png" class="w-[9px] lg:w-[12px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[6px] lg:text-[11px]">{{ formatDate(news[4].created_on) }}</p>
                    </div>
                    <div>
                        <p class="text-black font-extrabold text-[10px] lg:text-[12px]">|</p>
                    </div>
                    <div>
                        <img src="../assets/admin.png" class="w-[13px] lg:w-[18px]">
                    </div>
                    <div>
                        <p class="text-gray2 font-Inter font-extralight text-[7px] lg:text-[11px]">{{ news[4].created_by.name }}</p>
                    </div>
                </div>
                <div>
                    <p class="font-Inter text-black text-xs lg:text-md">{{ news[4].title }}</p>
                </div>
                <button>
                    <img src="../assets/selengkapnya.png" class="w-[60px] lg:w-[125px]">
                </button>
            </div>
        </div>
        <div class="place-self-center">
            <button class="border-2 border-red hover:bg-red basis-1/3 flex justify-center w-36 lg:w-44 lg:mt-8">
                <p class="text-red hover:text-white font-Inter font-semibold text-xs lg:text-sm">LIHAT BERITA LAINNYA</p>
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export default {
    data() {
        return {
            news: [],
            informations: []
        }
    },
    async created() {
        try {
            let response = await axios.get('https://directus-npm-test-production.up.railway.app/items/news?fields=*,created_by.name')
            this.news = response.data.data
            for (let i = 0; i < this.news.length; i++) {
                this.news[i].image = `https://directus-npm-test-production.up.railway.app/assets/${this.news[i].image}`
            }
            response = await axios.get('https://directus-npm-test-production.up.railway.app/items/informations')
            this.informations = response.data.data
        } catch(error) {
            console.error(error)
        }
    },
    methods: {
        formatDate(date) {
            return format(new Date(date), 'd MMMM yyyy', { locale: id })
        }
    }
}
</script>