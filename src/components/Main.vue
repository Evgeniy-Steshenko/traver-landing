<template>
    <section>
        <div class="container">
            <div class="main">
                <div class="main-explore">
                    <h1>Explore and Travel</h1>
                    <p>Holiday finder</p>
                </div>
               
                <div class="main-image">
                    <img src="@/assets/main-image.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.main {
    display: flex;
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
}

.main-explore  h1 {
    font-size: 64px;
    line-height: 80px;
    font-weight: bold;
}

.main-explore p {
    font-size: 22px;
    line-height: 27px;
    font-weight: 600;
}

.main .main-image img {
    width: 100%;
    height: 100%;
}


</style>