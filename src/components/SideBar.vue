<template>
    <div class="column">
        <h2>Episodes:</h2>
        <div class="episode-wrapper">
            <div v-for="episode in data" :key="episode.id">
                <div><h3>{{ episode.episode }}</h3></div>
                <div><h4>Episode name: {{ episode.name }}</h4></div>
                <div><h4>Air date: {{ episode.air_date }}</h4></div>
            </div>
        </div>
    </div>
</template>

<script>
import {fetchData} from '@/services/fetchData.js'

export default {
    data() {
        return {
            link: 'episode',
            data: null,
        }
    },
    async beforeMount() {
        try {
            this.data = await fetchData(this.link)
            console.log(this.data)
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
.column {
    min-width: 350px;
    border: 2px solid grey;
    margin-top: 10px;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.2);
}
h3 {
    color: blue;
    margin: 10px;
}
h2 {
    margin-top: 10px;
    text-align: center;
}
h4{
    margin: 5px;
}

.episode-wrapper :hover {
    background-color: rgba(221, 221, 221, 0.8);
    cursor: pointer;
}
</style>