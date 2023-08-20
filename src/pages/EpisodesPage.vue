<template>
    <div class="container">
       <div class="episode" v-for="episode in episodes" :key="episode.id">
            <h1>{{ episode.name }}</h1>
        </div> 
    </div>
</template>

<script>
export default {
    beforeMount() {
        this.$store.dispatch('fetchEpisodes')
    },
    computed: {
        episodes() {
            return this.$store.getters['getEpisodes']
        },
    }
}
</script>

<style scoped>
 *{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
 }

 .episode {
    border: 1px black solid;
    min-width: 40%;
    min-height: 50px;
    margin: 5px;
 }


</style>