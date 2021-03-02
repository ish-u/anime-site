<template>
  <div>
    <b-container class="p-5">
      <SearchBar/>
      <hr />
      <b-row style="justify-content: center">
        <b-col
          v-on:click="
            {
              {
                getAnime(anime.id);
              }
            }
          "
          class="box"
          v-for="anime in result"
          :key="anime.id"
          cols="3"
        >
          <b>{{ anime.title }}</b>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
const api = require("@dlwlrma00/animefreak2");

export default {
  props: {
    query: String,
  },
  components: {
    SearchBar,
  },
  data() {
    return {
      result: [],
    };
  },
  methods: {
    getSearch(query) {
      api
        .search(query)
        .then((r) => {
          this.result = r;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAnime(id) {
      this.$router.push({ name: "anime", params: { AnimeName: id } });
    },
    search() {
      this.$router.push({ name: "search", params: { query: this.q } });
    },
  },
  watch: {
      $route(to){
        this.query = to.params.query;
        this.getSearch(this.query);
      }
  },
  mounted: function () {
    this.getSearch(this.query);
  },
};
</script>


<style scoped>
.box {
  padding: 2.5%;
  margin: 2.5%;
  border: 2px black solid;
  border-radius: 10px;
  transition: 0.2s;
}
.box:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>