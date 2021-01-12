<template>
  <div id="app">
    <Header />
    <div class="container-app container mx-auto px-4 mt-10 text-center">
      <ComicRating />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComicRating from "./components/ComicRating";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    ComicRating
  }
};
</script>

<style scoped>
.container-app {
  min-height: calc(100vh - 352px);
}
</style>
