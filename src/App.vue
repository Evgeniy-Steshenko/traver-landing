<template>
  <div id="app">
    <header-component
    :list="list"
    :isAuth="isAuth">
    </header-component>
    <div class="main">
      <div class="container">
        <div class="main-container">
          <div class="main-explore">
            <div class="main-header">
              <h1>Explore and Travel</h1>
            </div>
            <h3>Holiday finder</h3>
          </div>
          <div class="main-img">
            <img src="@/assets/main-image.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="info-container">
          <div class="info-image">
            <img src="@/assets/second-image.png" alt="">
          </div>
          <div class="info-text">
            <h1>A new way to explore the world </h1>
            <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
            trip, but now, they can also let Lonely Planet Experiences lead the way</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="directions">
          <div class="directions-paragraph">
            <h1>Featured destinations</h1>
            <a href=""><p>View all</p></a>
          </div>
          <div class="directions-images">
            <img src="@/assets/first-directions.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from './components/Header'
export default {
  components: {
    HeaderComponent
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

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.head-container {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.head-container button {
  font-size: 16px;
  width: 132px;
  padding: 12px 38px;
  border: none;
  outline: none;
  background-color: #FB8F1D;
  border-radius: 4%;
  color: #fff;
  

}

.head-container img {
  width: 41px;
  height: 41px;
}

.head-container ul  {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  align-items: center;
}

.head-container ul li {
  margin-right: 35px;
  color: #B8BECD;
}

.head-container ul li:last-child {
  margin-right: 0;
}

.head-container ul li:first-child {
  color: #000;
}

.main-container {
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
}

.main-container .main-explore h1 {
  font-size: 64px;
  font-weight: bold;
  line-height: 80px;
}

.main-container .main-explore .main-header {
  width: 356px;
  height: 160px;
}

.main-container .main-image img {
  width: 687px;
  height: 654px;
  margin-top: 72px;
}

.info-container {
  display: flex;
  margin-top: 270px;
}

.info-container .info-text {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 102px;
  width: 481px;
  height: 333px;
}

.info-container .info-text h1 {
  font-size: 36px;
  font-weight: bold;
  
}

.info-container .info-text p {
  width: 90%;
  line-height: 26px;
}

.info-container button {
  font-size: 16px;
  width: 164px;
  padding: 12px 38px;
  border: none;
  outline: none;
  background-color: #FB8F1D;
  border-radius: 4%;
}

.directions-paragraph {
  display: flex;
  justify-content: space-between;
  margin-top: 262px;
  align-items: center;
}

.directions-paragraph a, p {
  text-decoration: none;
  color: #FB8F1D;
}

.directions-paragraph h1 {
  font-size: 36px;
line-height: 50px;
}
</style>
