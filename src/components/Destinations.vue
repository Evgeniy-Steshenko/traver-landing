<template>
    <section>
        <div class="container">
            <div class="destinations">
                <div class="destinations-text">
                    <h1>Featured destinations</h1>
                    <p>View all</p>
                </div>
                <div class="destinations-images">
                    <div class="destinations-image1">
                        <div class="bottom-text">
                            <h4>Raja Ampat</h4>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="destinations-image2">
                        <div class="bottom-text">
                            <h4>Raja Ampat</h4>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="destinations-image3">
                        <div class="bottom-text">
                            <h4>Raja Ampat</h4>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="destinations-image4">
                        <div class="bottom-text">
                            <h4>Raja Ampat</h4>
                            <p>Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>

.destinations {
    display: flex;
    justify-content: space-between;
    margin-top: 262px;
    flex-direction: column;
}

.destinations-text {
    display: flex;
    justify-content: space-between;
}

.destinations-text p {
    color: #fb8f1d;
}

.destinations-images {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.destinations-images .destinations-image1 {
    background-image: url(../assets/first-directions.png);
    position: relative;
    width: 260px;
    height: 325px;
    
}

.destinations-images .destinations-image2 {
    background-image: url(../assets/second-directions.png);
    position: relative;
    width: 260px;
    height: 330px;

    
}

.destinations-images .destinations-image3 {
    background-image: url(../assets/second-directions.png);
    position: relative;
    width: 260px;
    height: 330px;
}

.destinations-images .destinations-image4 {
    background-image: url(../assets/second-directions.png);
    position: relative;
    width: 260px;
    height: 330px;

}

.destinations-images .bottom-text {
    position: absolute;
    text-align: left;
    top: 260px;
    left: 5px;
}

.destinations-images .bottom-text h4 {
    padding: 0;
    margin: 0;
    margin-top: 22px;
}
.destinations-images .bottom-text h4 {
    padding: 0;
    margin: 0;
    margin-top: 22px;
}

.destinations-images .bottom-text p {
    padding: 0;
    margin: 0;
    margin-top: 10px;
}
</style>