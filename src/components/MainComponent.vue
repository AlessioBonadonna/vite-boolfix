<template>

    <main>
        <div class="container-fluid">
            <div class="films" v-for="(film) in store.films">
                {{ film.title }}

                <FilmCard />
            </div>
            <div class="series">
                <Series />
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import FilmCard from './FilmCard.vue';
import Series from './Series.vue'

export default {
    data() {
        return {
            store
        };
    },
    components: { FilmCard }
}


</script>

<style lang="scss" scoped>

</style> 