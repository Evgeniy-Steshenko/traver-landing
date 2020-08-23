<template>
    <div class="container">
        <div class="testimonials-head">
            <h1>Testimonials</h1>
        </div>
        <div class="testimonials">
            <div class="testimonials-text">
                <div class="testimonials-star">
                </div>
                
                <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, 
                dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                <div class="testimonials-text-down">
                <h4>Edward Newgate</h4>
                <p>Founder Circle</p>
                </div>
            </div>
            <div class="testimonials-img">
            <img src="@/assets/Testimonials-photo.png" alt="">
            <div class="img-choice">
                <div class="prev icon disable">
                <i class="el-icon-arrow-left"></i>
                </div>
                <div class="next icon">
                <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.testimonials-head {
    margin-top: 248px;
    margin-left: 6%;
}
.testimonials {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-right: 10%;
    margin-left: 5%;

}

.testimonials-text {
    max-width: 450px;
}
.testimonials-text p {
    font-size: 24px;
    line-height: 36px;
}

.testimonials-text h4 {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 0;
}

.testimonials-text p:last-child {
    font-size: 18px;
    line-height: 48px;
    margin-top: 0;
}

.testimonials-img {
    position: relative;
    max-width: 417px;
    max-height: 523px;
}
.testimonials-img .img-choice {
    position: absolute;
    background-color: #fff;
    max-width: 37%;
    max-height: 27%;
    bottom: 0;
    right: 0;
    border-top-left-radius: 8px;
}

.img-choice {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 130px;
    height: 60px;
}

.img-choice .icon {
    display: flex;
    width: 40px;
    height: 40px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    color: #000;
    border-radius: 100%;
}

.img-choice .icon:hover {
  cursor: pointer;

}

.img-choice .icon i {
    font-weight: bold;
}

.img-choice .icon:last-child {
    margin-left: 20px
}

.img-choice .disable {
    border-color: #a7a7a7;
    color: #a7a7a7;
}

.img-choice .disable:hover {
  cursor: default;
}

</style>