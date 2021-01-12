<template>
  <div class="flex justify-center ">
    <button
      type="button"
      v-for="(i, index) in 5"
      :key="index"
      class="focus:outline-none"
      :class="{ 'mr-1': i < 5 }"
      @click="saveRating(i)"
    >
      <svg
        class="block h-8 w-8"
        :class="[rating >= i ? 'text-pink-500' : 'text-gray-300']"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: ["rating", "saveRating"]
};
</script>
