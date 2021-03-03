<template>
  <div>
    <div v-if="notLoading">
      <b-container class="p-5">
        <b-row>
          <b-col cols="12">
            <h1>{{ Anime.title }}</h1>
            <h6>{{ Anime.firstAired }}</h6>
          </b-col>
        </b-row>
        <hr />
        <b-row style="padding: 10px; justify-content: center">
          <b-col cols="4" style="padding: 25px; margin: 5px">
            <img
              :src="Anime.img"
              alt="Title"
              style="border: 5px black solid; padding: 5px; border-radius: 5px"
            />
          </b-col>
          <b-col cols="6" style="padding: 25px; margin: 5px; text-align: left">
            {{ Anime.synopsis }}
          </b-col>
        </b-row>
        <hr />
        <b-row style="justify-content: center">
          <b-col
            cols="1"
            class="ep"
            v-for="(episode, index) in Anime.episodes"
            :key="episode.id"
            v-on:click="
              {
                {
                  getEpisode(episode.id);
                }
              }
            "
          >
            <b>{{ index + 1 }}</b>
          </b-col>
        </b-row>
        <hr />
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
export default {
  props: {
    AnimeName: String,
  },
  data() {
    return {
      Anime: Object,
      notLoading: false,
    };
  },
  components: {},
  methods: {
    getAnimeData(AnimeName) {
      fetch(`${process.env.VUE_APP_ANIME_API}anime/${AnimeName}`, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.Anime = jsonData;
          this.notLoading = true;
        });
    },
    getEpisode(id) {
      this.$router.push({ name: "video", params: { id: id } });
    },
  },
  mounted: function () {
    this.getAnimeData(this.AnimeName);
  },
};
</script>

<style scoped>
.ep {
  border: 2.5px black solid;
  margin: 5px;
  border-radius: 10px;
  font-size: 24px;
  color: black;
  transition: 0.2s;
}
.ep:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
