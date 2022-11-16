<template>

    <main>
        <div class="container d-flex justify-content-center  aling-items-center ">
            <div class="row">

                <div class="card  col-2 " v-for=" (film) in store.films">


                    <div class="img-cont">
                        <img class="img" :src="store.imagesURL + film.backdrop_path" alt="">
                    </div>
                    <div class=" title">
                        {{ film.title }}
                    </div>
                    <div class="solosulhover d-none">
                        <div>
                            <p>{{ film.original_language }}</p>
                            <p>{{ film.original_title }}</p>
                            <p>{{ film.overview }}</p>
                        </div>
                    </div>
                </div>


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
.card {
    height: 250px;
    width: 300px;
    margin: 15px;

    padding: 10px;


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