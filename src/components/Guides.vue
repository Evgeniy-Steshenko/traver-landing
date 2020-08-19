<template>
    <div class="container">
        <div class="guides">
            <div class="guides-text">
                <h1>Guides by Thousand Sunny</h1>
                <p>Packed with tips and advice from our on-the-ground experts, our city guides app 
                (iOS and Android) is the ultimate resource before and during a trip.</p>
                <button>Download</button>
            </div>
            <div class="guides-image">
                <img src="@/assets/Guides.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.guides {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 173px;
    align-items: center;
}

.guides-text {
    max-width: 450px;
    
}

.guides-text h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 50px;
}

.guides-text p {
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
    color: #7D7987;
}

.guides-text button {
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    background-color: #FB8F1D;
    outline: none;
    color: #fff;
    border: 1px solid #FB8F1D;
    border-radius: 8px;
    padding: 0 43px;
}

.guides-text button:hover {
    background: #fff;
    color: #FB8F1D;
}
</style>
