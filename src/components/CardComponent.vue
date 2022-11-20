<template>
    <div class="cards " @mouseover="show = true" @mouseleave="show = false">
        <div class="container-img ">
            <img :src="`https://image.tmdb.org/t/p/w342${card.backdrop_path}`" alt="card.title">
        </div>
        <div class="description">
            <div class="titlefilms col-12">
                <h3>{{ getTitles }}</h3>
            </div>
            <div :class="{ 'col-5': show }">
                <TransitionGroup name="fade">
                    <span v-show="show" v-for="n in 5" class="fa-star star"
                        :class="(n <= votefx) ? 'fa-solid' : 'fa-regular'" :key="n"></span>
                </TransitionGroup>
                <Transition>
                    <span class="lingua">
                        <img :src="Flag" alt="{{flag}}">
                    </span>
                </Transition>
                <Transition name='fade' v-for="(el, a) in store.listGender">
                    <div class="subtitle" v-show="show" v-if="card.genre_ids.includes(el.id)">
                        {{ el.name }}
                    </div>
                </Transition>

                <div>
                </div>

            </div>
            <Transition name="fade">
                <div class="info col-8" v-show="show">
                    {{ card.overview }}
                </div>
            </Transition>
        </div>






    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: "CardComponent",
    props: {
        card: Object,

    },
    data() {
        return {
            store,
            show: false,
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
.cards {
    flex-shrink: 0;
    background-color: #000;
    margin: 0 0.6rem;
    position: relative;
    transition: 0.5s;
    z-index: 50;

    &:hover {
        transform: scale(1.1);
        transform-origin: top left;
        z-index: 100;

        .description {
            height: 100%;

        }
    }

    .container-img {
        width: 445px;
        height: 250px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .description {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(0, 0, 0, 1) 40%);
        color: white;
        display: flex;
        flex-wrap: wrap;
        transition: 0.5s;
        padding-left: 0.5rem;
        padding-bottom: 0.5rem;

        .titlefilms {
            padding: 0 0.1rem 0.3rem;
            font-size: 2rem;
            font-weight: bold;
        }

        .subtitle {
            padding: 0 0.1rem 0.3rem;
        }

        .info {
            padding: 0 0.5rem 0.5rem;
            overflow: auto;
            height: 100%;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }


}
</style>