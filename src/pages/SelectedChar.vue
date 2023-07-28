<template>
    <div class="container">
        <div class="image-content">
            <img :src="char.image" :alt="char.name">
        </div>
        <div class="descr-content">
            <h1>{{ char.name}} is a {{ char.species }} who took part in {{ char.episode.length }} episode(s)</h1>
            <h3>Status: {{ char.status }}</h3>
            <h3>Gender: {{ char.gender }}</h3>
            <h3></h3>
        </div> 
    </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('fetchSelectedChar', this.$route.params.id)
    },
    computed: {
        char() {
            return this.$store.getters['getExactChar']
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
    }
    .image-content {
        margin: 20px;
    }
    .descr-content {
        margin: 20px;
    }
    h1{
        margin: 0 auto
    }
</style>