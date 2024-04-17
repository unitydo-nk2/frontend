<script setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";
const props = defineProps({
  activity: {
    type: Object,
    default: {},
  },
});
</script>
 
<template>
    <div>
        <nuxt-link :to="`/Activities/${activity.activityId}`">
        <div class="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
         style="width: 378px; height: 354px; ">
             <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                 style="width: 378px;">
                 <div>
                     <div class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                         style="width: 378px;">
                         <div class="font-bold">{{ activity.activityName }}</div>
                         <div class="opacity-60 text-sm ">
                             {{ activity.activityBriefDescription }}
                         </div>
                         <div class="opacity-60 text-sm ">
                             {{ dateTimeUtil.getDateTime(activity.activityDate) }}
                         </div>
                     </div>
                 </div>
             </div>
             <img v-if="activity.imagePath == null" 
                alt=""
                 class="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                 src="../public/image/nophoto.png" />
             <img 
                v-else
                 alt=""
                 class="object-cover w-full h-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                 :src="activity.imagePath" />
             
         </div>
        </nuxt-link>
    </div>
</template>

 
<style>

</style>