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
    <guides-component>
    </guides-component>
    <testimonials-component>
    </testimonials-component>
    <stories-component>
    </stories-component>
    <footer-component
    :destinations="footerDestinations"
    :shop="footerShop"
    :interest="footerInterest">
    </footer-component>
  </div>
</template>


<script>

import HeaderComponent from './components/Header.vue'
import MainComponent from './components/Main.vue'
import Section02Component from './components/Section02.vue'
import DestinationsComponent from './components/Destinations.vue'
import GuidesComponent from './components/Guides.vue'
import TestimonialsComponent from './components/Testimonials.vue'
import StoriesComponent from './components/Stories.vue'
import FooterComponent from './components/Footer.vue'

export default {
  components: {
    HeaderComponent,
    MainComponent,
    Section02Component,
    DestinationsComponent,
    GuidesComponent,
    TestimonialsComponent,
    StoriesComponent,
    FooterComponent
  },
  data() {
    return {
      list: ['Home', 'Distinations', 'About', 'Partner'],
      isAuth: true,
      footerDestinations: ['Destinations', 'Africa','Antarctica', 'Asia', 'Europe', 'America'],
      footerShop: ['Shop', 'Destination Guides', 'Pictorial & Gifts', 'Special Offers', 'Delivery Times','FAQs'],
      footerInterest: ['Iterests', 'Adventure Travel','Art And Culture', 'Wildlife And Nature', 'Family Holidays', 'Food And Drink']
      
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
* {
  box-sizing: border-box;
}

i {
  font-weight: bold;
}

button:hover {
  cursor: pointer;
}
</style>
