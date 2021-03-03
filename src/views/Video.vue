<template>
  <div>
    <div v-if="notLoading">
      <br />
      <h6 style="font-size: 10px">
        try reloading if the video doesn't start... (・_・;)
      </h6>
      <br />
      <video :src="src" controls autoplay type="video/mp4"></video>
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
const api = require("@dlwlrma00/animefreak2");
export default {
  props: {
    id: String,
  },
  data() {
    return {
      src: String,
      notLoading : false
    };
  },
  methods: {
    getEpisode(id) {
      fetch(`${process.env.VUE_APP_ANIME_API}episode/${id}`, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          this.src = jsonData[0].mp4;
          this.notLoading = true;
        });

      api
        .animeVideoHandler(id)
        .then((episodeSource) => {
          this.src = episodeSource[0].mp4;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted: function () {
    this.getEpisode(this.id);
  },
};
</script>