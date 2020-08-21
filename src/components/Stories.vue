<template>
        <div class="stories">
    <div class="container">
            <div class="stories-head">
                <h1>Trending stories</h1>
                <p>View all</p>
            </div>
            <div class="stories-all">
                <div class="storie-1">
                    <img src="@/assets/stories-image1.png" alt="">
                        <h5>The many benefits of taking a healing holiday</h5>
                        <p>‘Helaing holidays’ are on the rise 
                        tohelp maximise your health and happines...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie-2">
                    <img src="@/assets/stories-image2.png" alt="">
                        <h5>The best Kyoto restaurant to try Japanese food</h5>
                        <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                        to visit...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie-3">
                    <img src="@/assets/stories-image3.png" alt="">
                        <h5>Skip Chichen Itza and head to this remote Yucatan</h5>
                        <p>It’s remote and challenging to get, but braving the jungle and exploring
                        these ruins without the...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie-4">
                    <img src="@/assets/stories-image4.png" alt="">
                        <h5>Surf’s up at these beginner spots around the world</h5>
                        <p>If learning to surf has in on your to-do list for a while, the good news
                        is: it’s never too late...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.stories-all {
    display: flex;
}

.stories-all .storie-1 img {
    width: 261px;
    max-height: 230px;
  
}

.stories-all .storie-2 img {
    width: 261px;
    height: 230px;
}



.stories-all .storie-3 img {
    width: 261px;
    height: 332px;
}

.stories-all .storie-4 img {
    width: 261px;
    max-height: 332px;
}

.bottom-text {
    top: 90%;
}

.bottom-text h5 {
    font-weight: bold;
    font-size: 19px;
    line-height: 30px;
}

.bottom-text p {
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    max-width: 250px;
}

.more p {
    top: 190%;
    color: #FB8F1D;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
}
</style>