<template>
  <div>
    <HeaderComponent @search="performSearch(), getseries()" />
    <JumboComponent v-if="!store.quary" />
    <MainComponent v-else />
  </div>
</template>

<script>
import { store } from './data/store'
import axios from 'axios'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import JumboComponent from './components/JumboComponent.vue';

export default {
  components: { HeaderComponent, MainComponent, JumboComponent },
  data() {
    return {
      store
    }

  },
  methods: {


    performSearch() {
      console.log('ciao')
      axios

        .get(`${store.movieURL}?api_key=${store.apiKey}&query=${store.quary}`)
        .then((res) => {

          store.movies = res.data.results;

          console.log(res.data.results);
          store.films = res.data.results;
          console.log(store.films[1]);


        })

    },
    getseries() {
      axios

        .get(`${store.tvURL}?api_key=${store.apiKey}&query=${store.quary}`)
        .then((res) => {

          store.tvURL = res.data.results;

          console.log(res.data.results);
          store.tvShows = res.data.results;
          console.log(store.tvShows[1]);


        })
    },


    created() {
      //chiamata api ad inizio app
      this.performSearch()
    },


  }
}


</script>

<style lang="scss" >
@import './assets/general.scss';
</style>