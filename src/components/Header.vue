<template>
    <header>
      <div class="container">
        <div class="head-container">
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