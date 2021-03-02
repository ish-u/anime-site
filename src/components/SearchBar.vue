<template>
  <div>
    <b-form @submit.prevent="search" id="form">
        <b-input-group>
          <b-form-input
            v-model="q"
            placeholder="Search..."
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="info" type="submit"
              ><b-icon icon="search"></b-icon
            ></b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form>
  </div>
</template>

<script>
export default {
   data() {
    return {
      q: "",
    };
  },
  methods: {
    search() {
      if(this.$route.name != "search")
      {
        this.$router.push({ name: "search", params: { query: this.q } });
      }
      else{
        this.$router.replace({ name: "search", params: { query: this.q } });
      }
    },
  },
}
</script>