<template>
    <div class="container">
        <div class="location" v-for="location in locations" :key="location.id">
            <h1>{{ location.name }}</h1>
        </div>
        <div ref="observer" class="observer"></div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            page: 1
        }
    },
    mounted() {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (entries) => {
            if(entries[0].isIntersecting) {
                this.page++
                this.$store.dispatch('fetchLocations', this.page)
            }
        }

        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    beforeMount() {
        this.$store.dispatch('fetchLocations')
    },
    computed: {
        locations() {
            return this.$store.getters['getLocations']
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
.observer{
    min-height: 50px;
    min-width: 100%;
}

.location {
    border: 1px black solid;
    min-width: 40%;
    min-height: 50px;
    margin: 5px;
}
</style>