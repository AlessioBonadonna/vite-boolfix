<template>
    <div>

        <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="card.title">
        <span class="titlefilms">
            <h3>{{ getTitles }}</h3>
        </span>
        <span class="lingua">
            <p>{{ card.original_language }}</p>
        </span>
        <div>
            <span v-for="n in 5" class="fa-star" :class="(n <= votefx) ? 'fa-solid' : 'fa-regular'"></span>

        </div>


    </div>
</template>

<script>

export default {
    name: "CardComponent",
    props: {
        card: Object
    },
    data() {
        return {

        }
    },
    computed: {
        //
        getTitles() {
            return this.card.title ? this.card.title : this.card.name;
        },
        originalTitle() {
            return this.card.original_title ? this.card.original_title : this.card.original_name;
        },
        votefx() {
            return Math.ceil(this.card.vote_average / 2);

        }

    }

}
</script>

<style lang="scss" scoped>
img {
    height: 50px;
    ;
}
</style>