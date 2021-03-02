<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" style="justify-content:center;">
    <b-navbar-brand v-on:click="goHome()">
        <span><b>anime</b></span>
    </b-navbar-brand>

  </b-navbar>
</div>
</template>

<script>
export default {
    methods:{
      goHome(){
        if(this.$route.name != "Home"){
        this.$router.push({ name: "Home"});
        }
      }
    }
}
</script>