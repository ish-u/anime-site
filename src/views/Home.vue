<template>
  <div>
    <b-container
      class="p-5"
      style="height:inherit"
    >
    <SearchBar/>
    </b-container>
    <div>
      <span style="font-size:200px;">(◕‿◕)	</span>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
export default {
  name: "Home",
  components:{
    SearchBar,
  }
}
</script>

<style scoped>
#form{
  margin: 10%;
}
</style>