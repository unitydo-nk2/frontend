<script setup>
const props = defineProps({
  activities: {
    type: Array,
    default: [],
  }
})
</script>

<template>
  <div>
    <!-- Card slider -->
    <section class="px-12">
      <div class="max-w-lg mx-auto relative ">
        <input id="article-01" type="radio" name="slider" class="sr-only peer/01" />
        <input id="article-02" type="radio" name="slider" class="sr-only peer/02" checked />
        <input id="article-03" type="radio" name="slider" class="sr-only peer/03" />
        <input id="article-04" type="radio" name="slider" class="sr-only peer/04" />
        <input v-for="(_, index) in activities.slice(0, 1)" :key="index" :id="'article-' + (index + 1).toString().padStart(2, '0')"
          type="radio" name="slider" class="sr-only" :class="'sr-only peer/' + (index + 1)" :checked="index === 0" />

          <div v-for="(activity, index) in activities" :key="index" class="
                    absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                    peer-focus-visible:[&_article]:ring
                    peer-focus-visible:[&_article]:ring-indigo-300
                    peer-checked:[&_article]:relative
                    peer-checked:[&_article]:z-50
                    peer-checked:[&_article]:translate-x-0
                    peer-checked:[&_article]:scale-100
                    peer-checked:[&_article]:[&>label]:pointer-events-none
                    peer-checked:[&(index + 1)]:-translate-x-{{ index * 20 }}
                    peer-checked:[&(index + 1)]:scale-[{{ 100 - index * 16.25 }}%]
                    peer-checked:[&(index + 1)]:z-{{ 50 - index * 10 }}
                    peer-checked:[&(index + 1)]:opacity-{{ index === 0 ? 100 : 0 }}
                ">
          <label :for="'article-' + (index + 1).toString().padStart(2, '0')" class="absolute inset-0"><span class="sr-only">Focus on the big </span></label>
          <article class="bg-white p-4 rounded-lg shadow-lg">
            <header class="mb-2">
              <img class="inline-flex rounded-md shadow mb-2 object-cover" src="https://via.placeholder.com/400x250" :alt="'Image ' + (index + 1)" />
              <p>{{ activity.category }}</p>
              <h1 class="text-2xl font-bold text-slate-900">{{ activity.title }}</h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 ">
              <p>{{ activity.date }}</p>
            </div>
            <footer class="text-right">
              <a class="text-sm font-medium text-indigo-500 hover:underline" href="#0">Read more</a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>