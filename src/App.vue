<template>
  <div id="app">
    <NavBar/>
    <transition :duration="{ enter: 0, leave: 1000 }" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from './components/NavBar'
export default {
  name: 'App',
  data () {
    return {
      leave: false,
    }
  },
  components:{
    'NavBar':NavBar
  }
}


</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  #app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
</style>
