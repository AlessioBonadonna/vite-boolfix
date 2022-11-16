
<template>
    <div class="card" v-for="(film) in store.films">
        <div>
            <img :src="film.poster_path" :alt="film.name">
        </div>


    </div>
</template>

<script>
import { store } from '../data/store'

export default {

}
</script>

<style lang="scss" scoped>

</style>