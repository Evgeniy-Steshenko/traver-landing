<template>
    <header>
      <div class="container">
        <div class="head">
          <img src="@/assets/logo.png" alt="">
          <ul>
            <li v-for="(item, key) in list" :key="key">{{item}}</li>
            <li v-if="isAuth == true"><button @click="outConsole">Login</button></li>
            <li v-if="isAuth == true"><button @click="outConsole">Register</button></li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    props: ['list', 'isAuth'],
    methods: {
        outConsole() {
        console.log(123)
        }
    },
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container  {
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .container {
    max-width: 970px;
  }
}

@media (max-width: 972px){
  .container {
    max-width: 750px;
  }
}

@media (max-width: 767px) {
  .container {  
    margin: 0 25px;
    max-width: none;
  }
}

.head {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.head img {
  width: 41px;
  height: 41px;
}

.head ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  margin: 0;
  padding: 0;
  color: #fff;
}

.head ul li {
  margin-right: 35px;
  color: #b8becd;

}

.head ul li:last-child {
  margin-right: 0;
}

.head ul li:first-child {
  color: #000;
}

.head button {
  padding: 0 46px;
  color: #fff;
  background: #fb8f1d;
  border: 1px solid #fb8f1d;
  outline: none;
  border-radius: 8px;
   font-weight: bold;
    font-size: 16px;
    line-height: 40px;
}

.head button:hover {
  color: #fb8f1d;
  background:#fff;
}


</style>