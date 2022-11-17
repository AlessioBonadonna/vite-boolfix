<template>

    <main class="">
        <div class="container">
            <h2 class="d-block">films</h2>
        </div>

        <div class="container d-flex  scroll">

            <CardComponent v-for="(film, index) in store.films" :key="index" class="card me-5 p-2 " :card="film" />
        </div>
        <div class="container">
            <h2 class="d-block">series</h2>
        </div>
        <div class=" container d-flex scroll">
            <CardComponent v-for="(tvShow, index) in store.tvShows" :key="index" class="card" :card="tvShow" />
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

.card {
    background-color: rgb(68, 67, 67);
    height: 400px;
    width: 300px
}

.scroll {
    margin-bottom: 50px;

    overflow: auto;
    display: flex;
}
</style> 