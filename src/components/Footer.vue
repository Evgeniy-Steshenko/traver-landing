<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="head-footer">
                    <div class="head-left-footer">
                    <img src="@/assets/logo.png" alt="">
                    <p>Plan and book your perfect trip with 
                    expert advice, travel tips destination
                    information from us</p>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                    </div>
                    <div class="head-right-footer">
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
              <div class="down-footer">
                  <a href=""><img src="@/assets/twitter.png" alt=""></a>
                  <a href=""><img src="@/assets/facebook.png" alt=""></a>
                  <a href=""><img src="@/assets/instagram.png" alt=""></a>
                 <a href=""><img src="@/assets/in.png" alt=""></a>
                  <a href=""><img src="@/assets/youtube.png" alt=""></a>
              </div>
            </div>
        </div>
    </div>
    </footer>
</template>


<script>
export default {
    props: ['destinations', 'shop', 'interest'],
    mounted() {
        console.log(this.glista, this.glista)
    }
 }

 </script>

 <style scoped>

 footer {
     margin-top: 196px;
     background-color: #F9F9FB;
     padding: 0;
     margin: 0;
 }

footer ul li:hover {
  cursor: pointer;
}

.head-footer {
    padding-top: 78px;
    display: flex;
    justify-content: space-between;
    color: #848484;
    font-weight: 300;
    font-size: 18px;
    align-items: center;
 }

.head-left-footer {
    width: 391px;
}

.head-left-footer p {
    line-height: 28px;
    margin: 0;
    margin: 26px 0;
    width: 320px;
}

.head-left-footer p:last-child {
    font-size: 17px;
    margin: 0;
    margin-top: 29px;
    width: 391px;
}

.head-right-footer {
    display: flex;
}

.head-right-footer ul {
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;
}

.head-right-footer ul li {
    line-height: 32px;
    margin-right: 75px;
}

.head-right-footer ul li:first-child {
    font-weight: bold;
    font-size: 19px;
    line-height: 60px;
    color: #000;
}

.head-right-footer ul:first-child{
    margin-right: 35px;

}

.head-right-footer ul li:last-child {
    margin: 0;
}

.down-footer {
    border-top: 2px solid #C4C4C4;
    margin-top: 81px;
    display: flex;
    justify-content: center;
}

.down-footer a {
    margin: 32px 35px;
}

.down-footer img:last-child {
    margin-right: 0;
}

</style>
 
 