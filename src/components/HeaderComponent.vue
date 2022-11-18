<template>
    <nav class="bg-black p-1">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="p-1 d-flex">
                <img class="logo" src="../../public/img/BOOLFLIX.png" alt="logo">
                <div class="list-category">
                    <ul class="d-flex list-unstyled  ms-5">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Serie Tv</a>
                        </li>
                        <li>
                            <a href="#">films</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <input @keyup="$emit('search')" type="text" name="" id="" class="bg-dark input-text text-white"
                    placeholder="Cerca" v-model="store.quary">


            </div>
        </div>


    </nav>
</template>

<script>
import { store } from '../data/store'
import axios from 'axios'



export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 200px;
}


li {
    margin-right: 10px;

    a {
        color: white;
        text-decoration: none;
    }
}
</style>