<template>
    <div class="row col-4 mt-4 ">
        <div class="container-img">
            <img :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`" alt="card.title">
        </div>

        <span class="titlefilms">
            <h3>{{ getTitles }}</h3>
        </span>
        <span class="lingua">
            <img :src="Flag" alt="{{flag}}">
        </span>
        <div>
            <span v-for="n in 5" class="fa-star star" :class="(n <= votefx) ? 'fa-solid' : 'fa-regular'"></span>

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

        },
        Flag() {
            let flag = this.card.original_language;
            if (flag == 'en') {
                flag = 'gb';
            } else if (flag == 'ja') {
                flag = 'jp';
            } else if (flag == 'zh') {
                flag = 'cn';
            } else if (flag == 'ko') {
                flag = 'kr';
            } else if (flag == 'cs') {
                flag = 'sk';
            } else if (flag == 'da') {
                flag = 'dk';
            } else if (flag == 'xx') {
                flag = 'mz';
            }
            const flagUp = flag.toUpperCase();
            const urlFlag = `https://www.countryflagicons.com/SHINY/32/${flagUp}.png`
            return urlFlag;
        }
    }

}


</script>

<style lang="scss" scoped>
.container-img {
    img {
        width: 250px;
        height: 200px;
    }
}

.titlefilms {
    font-size: 0.5em;
    ;
}

.star {
    color: yellow
}
</style>