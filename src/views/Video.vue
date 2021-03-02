<template>
  <div>
    <br />
    <h6 style="font-size:10px;">try reloading if the video doesn't start... (・_・;)</h6>
    <br />
    <video :src="src" controls autoplay type="video/mp4"></video>
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
    };
  },
  methods: {
    getEpisode(id) {
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