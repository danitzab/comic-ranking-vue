<template>
  <div class="grid grid-cols-1 text-center">
    <img
      v-if="isLoading"
      src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif"
      alt="loading"
    />
    <div v-else>
      <Comic
        :currentComicId="currentComicId"
        :lastComicId="lastComicId"
        :getComicById="getComicById"
        :comic="comic"
      />
      <div class="mt-4">
        <StartRating :rating="rating" :saveRating="saveRating" />
      </div>
    </div>
  </div>
</template>

<script>
import Comic from "./Comic";
import StartRating from "./StartRating";
import * as Service from "../services/Service";

const LOCAL_STORAGE_KEY = "ratings";

export default {
  name: "ComicRating",
  components: {
    Comic,
    StartRating
  },
  data() {
    return {
      comic: null,
      lastComicId: 0,
      currentComicId: 0,
      rating: 0,
      isLoading: false
    };
  },
  mounted() {
    this.getlastComic();
  },
  methods: {
    getlastComic() {
      this.isLoading = true;
      Service.getLastComic()
        .then(response => {
          this.isLoading = false;
          this.comic = response.data;
          this.lastComicId = response.data.num;
          this.currentComicId = response.data.num;
          const ratingObj = this.getRatingObject();
          this.rating = ratingObj[`comic_${response.data.num}`];
        })
        .catch(err => console.log(err));
    },
    getComicById(id) {
      this.isLoading = true;
      Service.getComicById(id)
        .then(response => {
          this.isLoading = false;
          this.comic = response.data;
          this.currentComicId = response.data.num;
          const ratingObj = this.getRatingObject();
          this.rating = ratingObj[`comic_${response.data.num}`];
        })
        .catch(err => console.log(err));
    },
    saveRating(value) {
      this.rating = value;
      const ratingObj = this.getRatingObject();

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({
          ...ratingObj,
          [`comic_${this.currentComicId}`]: value
        })
      );
    },
    getRatingObject() {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
  }
};
</script>
