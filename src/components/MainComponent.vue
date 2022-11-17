<template>

    <main>


        <CardComponent v-for="(film, index) in store.films" :key="index" class="card" :card="film" />
        <CardComponent v-for="(tvShow, index) in store.tvShows" :key="index" class="card" :card="tvShow" />

        <!-- <div class="container d-flex justify-content-center  aling-items-center ">
            <div class="row">

                <div class="card  col-2 " v-for=" (film) in store.films"
                    v-bind:class="{ flipme: cardOne == 'flipped' }">

                    <div class="card__face card__face--front"
                        @mouseenter="cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start')"
                        @mouseleave="cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start')">
                        <div class="img-cont">
                            <img class="img" :src="store.imagesURL + film.backdrop_path" alt="">
                        </div>
                    </div>

                    <div class=" card__face card__face--back">
                        <div class="kk">
                            <h4>{{ film.title }}</h4>
                            <p>{{ film.original_language }}</p>
                            <p>{{ film.original_title }}</p>
                            <p>{{ film.overview }}</p>
                        </div>
                    </div>
                </div>


            </div>



            <div class="series" v-for="(tvShow, index) in store.tvShows" key="index">
                series

                {{ tvShow.title }}
            </div>
        </div> -->
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
    height: 200px;
    width: 342px;
    background-color: rgb(68, 67, 67);
    margin: 15px;
    padding: 10px;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;


    .card__face {
        position: absolute;


        color: white;
        text-align: center;
        font-weight: bold;

        backface-visibility: hidden;
    }

    .card__face--back {

        transform: rotateY(180deg);

        .kk {
            padding: 4px;
            height: 150px;
            overflow-y: scroll;
        }

    }


}

.flipme {
    transform: rotateY(180deg);
}

.img-cont {
    width: 250px;
    height: 100%;

    img {
        width: 110%;
        height: 80%;
    }

}
</style> 