<template>
    <h1 class="text-center mt-5">Inizia Subito la ricerca del tuo film o serie preferita</h1>
    <div class="jumbo-relative"></div>
    <div class="jumbo-assolute">
        <img class="logo-img" src="../../public/img/BOOLFLIX.png" alt="boolflix">

    </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-img {
    width: 1000px;
    position: absolute;
    animation: moveImage 10s linear infinite;
    left: -350px;
}

@keyframes moveImage {
    100% {
        transform: translateX(calc(100vw + 350px));
    }
}

p {
    left: 500px
}

.jumbo-assolute {
    position: absolute;
    top: 250px;
    left: 230px;


}

.jumbo-relative {
    position: relative;


}
</style>