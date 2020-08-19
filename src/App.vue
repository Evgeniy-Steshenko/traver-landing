<template>
  <div id="app">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
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
    <guides-component>
    </guides-component>
    <testimonials-component>
    </testimonials-component>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'
import MainComponent from './components/Main.vue'
import Section02Component from './components/Section02.vue'
import DestinationsComponent from './components/Destinations.vue'
import GuidesComponent from './components/Guides.vue'
import TestimonialsComponent from './components/Testimonials.vue'

export default {
  components: {
    HeaderComponent,
    MainComponent,
    Section02Component,
    DestinationsComponent,
    GuidesComponent,
    TestimonialsComponent
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
