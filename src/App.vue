<template>
  <div id="app">
    <header-component
    :list="list"
    :isAuth="isAuth">
    </header-component>
    <main-component>
    </main-component>
    <section02-component>
    </section02-component>
    <destinations-component>
    </destinations-component>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'
import MainComponent from './components/Main.vue'
import Section02Component from './components/Section02.vue'
import DestinationsComponent from './components/Destinations.vue'

export default {
  components: {
    HeaderComponent,
    MainComponent,
    Section02Component,
    DestinationsComponent
  },
  data() {
    return {
      list: ['Home', 'Distinations', 'About', 'Partner'],
      isAuth: true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
