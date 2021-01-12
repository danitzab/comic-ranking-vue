<template>
  <div v-if="comic">
    <h1 class="text-2xl font-black font-rockSalt">{{ comic.title }}</h1>
    <button
      v-if="currentComicId > 0"
      class="inline border bg-pink-500 border-teal-500 border-solid rounded-full p-1 mr-2 focus:outline-none"
      @click="getComicById(currentComicId - 1)"
    >
      <img src="../assets/icons/chevron-left.svg" alt="chevron-left" />
    </button>
    <img
      class="inline mt-4 h-3/5 img-small"
      :src="comic.img"
      alt="comic.title"
    />
    <button
      v-if="currentComicId !== lastComicId"
      class="inline border bg-pink-500 border-teal-500 border-solid rounded-full p-1 mr-2 focus:outline-none"
      @click="getComicById(currentComicId + 1)"
    >
      <img src="../assets/icons/chevron-right.svg" alt="chevron-right" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Comic",
  props: ["comic", "currentComicId", "getComicById", "lastComicId"]
};
</script>
