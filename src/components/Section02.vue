<template>
    <section>
        <div class="container">
            <div class="info">
                <div class="info-image">
                    <img src="@/assets/second-image.png" alt="">
                </div>
                <div class="info-text">
                    <h1>A new way to explore the world</h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                    trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <button>Learn more</button>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 270px;
    align-items: center;
}

.info-text {
    margin-left: 102px;
}

.info-text h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
}

.info-text p {
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
    color: #7d7987;
}

.info-text button {
    padding: 12px 37px;
    background: #fb8f1d;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    font-weight: 600;
}
</style>