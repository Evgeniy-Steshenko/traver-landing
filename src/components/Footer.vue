<template>
    <div class="footer">
    <div class="container">
            <div class="head-footer">
                <div class="logo-footer">
                <img src="@/assets/logo.png" alt="">
                <ul>
                    <li v-for="(item, key) in glista" :key="key">{{item}}</li>
                </ul>
                </div>
                <div class="medium-footer">
                <p>Plan and book your perfect trip with 
                expert advice, travel tips destination
                information from us</p>
                <p>©2020 Thousand Sunny. All rights reserved</p>
                <ul>
                    <li v-for="(item, key) in destinations" :key="key">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item, key) in shop" :key="key">{{item}}</li>
                </ul>
                <ul>
                    <li v-for="(item, key) in interest" :key="key">{{item}}</li>
                </ul>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['glista', 'footerDestinations'],
    mounted() {
        console.log(this.glista, this.glista)
    }
 }

 </script>

 <style scoped>
 .footer {
     margin-top: 196px;
     background-color: #f255f4;
     padding: 0;
     margin: 0;
     
 }

.logo-footer {
    display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.logo-footer img {
    width: 41px;
    height: 41px;
}

.logo-footer ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;
    color: #fff;
}

.logo-footer ul li {
    margin-right: 95px;
    font-weight: bold;
    font-size: 19px;
    line-height: 60px;
}

.logo-footer ul li:last-child {
    margin-right: 0;
}

.medium-footer p {
    max-width: 391px;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
}

.medium-footer p:last-child {
    font-size: 17px;
}
 </style>
 
 