<template>
    <div class="column">
        <form action="submit" class="search-form" >
          <input type="text"  placeholder=" Search character" v-model="inputValue">
          <button class="search-btn" type="submit" @click.prevent="">Search</button>
      </form>
        <h2>Episodes:</h2>
        <div class="episode-wrapper">
            <div v-for="episode in episodes" :key="episode.id">
                <div><h3>{{ episode.episode }}</h3></div>
                <div><h4>Episode name: {{ episode.name }}</h4></div>
                <div><h4>Air date: {{ episode.air_date }}</h4></div>
            </div>
        </div>
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
    data() {
        return {
            link: 'episode',
            data: null,
            inputValue: '',
            page: 1
        }
    },

    async beforeMount() {
        this.$store.dispatch('fetchEpisodes')
    },

    mounted() {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (entries) => {
            if(entries[0].isIntersecting && this.page < 3) {
                this.page++
                this.$store.dispatch('fetchEpisodes', this.page)
            }
        }

        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },

    computed: {
    ...mapGetters([
      'getEpisodes'
    ]),
        episodes() {
            return this.inputValue === "" ? this.getEpisodes : this.getEpisodes.filter(episode => episode.name.toLowerCase() === this.inputValue)
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

.observer{
    min-height: 50px;
    min-width: 100%;
}
</style>