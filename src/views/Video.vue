<template>
  <div>
    <div v-if="notLoading">
      <br />
      <h6 style="font-size: 10px">
        try reloading if the video doesn't start... (・_・;)
        <button @click="re">reload</button>
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
export default {
  props: {
    id: String,
  },
  data() {
    return {
      src: String,
      notLoading: false,
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
          this.src = jsonData[0].mp4;
          console.log(this.src);
          this.notLoading = true;
        });
    },
    re(){
        this.getEpisode(this.id);
    }
  },
  mounted: function () {
    this.getEpisode(this.id);
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.getEpisode(this.id);
    },
  },
};
</script>