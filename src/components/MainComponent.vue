<template>

    <main class="pt-5">
        <div class="container">
            <h2 class="d-block"> Film</h2>
        </div>

        <div class="container d-flex align-items-start  scroll fixedbars">

            <CardComponent v-for="(film, index) in store.films" :key="index" :card="film" />
        </div>
        <div class="container">
            <h2 class="d-block"> Serie TV</h2>
        </div>
        <div class=" container d-flex align-items-start scroll fixedbars">
            <CardComponent v-for="(tvShow, index) in store.tvShows" :key="index" :card="tvShow" />
        </div>





    </main>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import CardComponent from './CardComponent.vue';


export default {
    data() {
        return {
            store,
            cardOne: "start",
        };
    },
    components: { CardComponent }
}


</script>

<style lang="scss" scoped>
main {
    background-color: rgb(68, 67, 67);
    color: white;
    height: 100%;
}


.scroll {
    margin-bottom: 50px;

    overflow: auto;
    display: flex;
}

.fixedbars {
    padding-top: 20px;
    padding-bottom: 50px;

}
</style> 