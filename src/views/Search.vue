<template>
  <div>
    <div v-if="notLoading">
      <b-container class="p-5">
        <SearchBar />
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
    <div v-else>
      <div class="text-center container p-5">
        <b-spinner
          style="height: 50px; width: 50px"
          label="Loading..."
        ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";

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
      notLoading: false
    };
  },
  methods: {
    getSearch(query) {
      fetch(`${process.env.VUE_APP_ANIME_API}search/${query}`, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.result = jsonData;
          this.notLoading = true;
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
    $route(to) {
      this.query = to.params.query;
      this.getSearch(this.query);
    },
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