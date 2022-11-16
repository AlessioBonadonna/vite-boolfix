<template>
    <nav class="bg-black">
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <h1 class="text-danger">BoolFix</h1>
            </div>
            <div>
                <input type="text" name="" id="" class="bg-dark input-text" v-model="store.quary">
                <button @click="$emit('search')">Search</button>
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