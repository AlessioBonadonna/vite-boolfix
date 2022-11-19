<template>

    <main class="p-4">
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

        };
    },
    components: { CardComponent }
}


</script>

<style lang="scss" scoped>
main {
    background-color: rgb(32, 32, 32);
    color: white;
    height: 100%;
}


.scroll {
    margin-bottom: 50px;

    overflow: auto;
    display: flex;
}

.scroll::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    overflow: overlay
}

.scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 20px black;
    background: rgb(83, 83, 83);
    border-radius: 10px;
    overflow: overlay
}

.scroll::-webkit-scrollbar-thumb {

    background: rgba(113, 25, 25, 0.589);
    border-radius: 10px;
}

.scroll::-webkit-scrollbar-thumb:hover {
    background: rgb(189, 46, 48);
}


.fixedbars {
    padding-top: 20px;
    padding-bottom: 50px;

}

h2 {
    margin: 0;
}
</style> 