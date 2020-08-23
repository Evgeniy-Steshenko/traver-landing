<template>
        <div class="stories">
    <div class="container">
            <div class="stories-head">
                <h1>Trending stories</h1>
                <p>View all
                <i class="el-icon-arrow-right"></i>
                </p>
            </div>
            <div class="stories-all">
                <div class="storie">
                    <div class="storie-image"><img src="@/assets/stories-image1.png" alt=""></div>
                        <h5>The many benefits of taking a healing holiday</h5>
                        <p>‘Helaing holidays’ are on the rise 
                        tohelp maximise your health and happines...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie">
                    <div class="storie-image"><img src="@/assets/stories-image2.png" alt=""></div>
                        <h5>The best Kyoto restaurant to try Japanese food</h5>
                        <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                        to visit...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie">
                    <div class="storie-image"><img src="@/assets/stories-image3.png" alt=""></div>
                        <h5>Skip Chichen Itza and head to this remote Yucatan</h5>
                        <p>It’s remote and challenging to get, but braving the jungle and exploring
                        these ruins without the...</p>
                    <div class="more">
                        <p>Read more</p>
                    </div>
                </div>
                <div class="storie">
                    <div class="storie-image"><img src="@/assets/stories-image4.png" alt=""></div>
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

.stories-head {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 213px;
}

.stories-head p, i {
    color: #FB8F1D;
    font-weight: 600;
    font-size: 17px;
    line-height: 60px;
}

.stories-head p,i:hover{
  cursor: pointer;
}

.stories-all {
    display: flex;
    justify-content: space-between;
    height: 684px;
}

.stories-all .storie {
    width: 261px;
    height: 100%;
}
.stories-all .storie img {
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.more {
    color: #FB8F1D;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    margin: 0;
    margin-top: 23px;
}

.more p:hover{
  cursor: pointer;
}

.storie h5 {
    font-weight: bold;
    font-size: 19px;
    line-height: 30px;
}

.storie p {
    font-size: 15px;
    line-height: 26px;
}

.storie-image {
    width: 261px;
    height: 230px;
}
</style>