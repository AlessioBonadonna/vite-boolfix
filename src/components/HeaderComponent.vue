<template>
    <nav class="bg-black">
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <h1 class="text-danger">BoolFix</h1>
            </div>
            <div>
                <input @keyup="$emit('search')" type="text" name="" id="" class="bg-dark input-text text-white"
                    v-model="store.quary">


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

</style>