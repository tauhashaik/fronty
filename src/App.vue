<template>

  <div>
    <navbar/>
   <router-view/>
   <footerComp/>
   <!-- <videoPlayer/> -->
   <!-- <spinner/> -->
  </div>
    
   <body>
  </body>
</template>

<script>
  import navbar from './components/navbar.vue';
  import footerComp from './components/footerComp.vue';
  // import videoPlayer from './components/videoPlayer.vue';
  // import spinner from '../src/components/spinner.vue'

  export default{

    components:{
      navbar,
      footerComp,
      // videoPlayer
      // spinner
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
