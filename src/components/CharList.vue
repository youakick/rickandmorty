<template>
    <div class="container">
        <div class="exact-char" v-for="char in characters" :key="char.id">
            <img :src="char.image" :alt="char.name"/>
            <div class="descr">
                <h2>Character information:</h2>
                <div class="name"><h4>Name: {{ char.name }}</h4></div>
                <div class="location"><h4>Location: {{ char.location.name }}</h4></div>
                <div class="gender"><h4>Gender: {{ char.gender }}</h4></div>
                <div class="status"><h4>Status: {{ char.status }}</h4></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    beforeMount() {
        this.$store.dispatch('fetchCharacters')
    },
    computed: {
        characters() {
            return this.$store.getters['getCharacters']
        },
    }
}
</script>

<style scoped>
.container {
    display: inline-flex;
    flex-wrap: wrap;
    background-color: rgba(0, 119, 255, 0.008);
}
.exact-char {
    margin: 10px;
    text-align: center;
    border: 1px solid grey;
    color:blue;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.2);
}
.container :hover {
    background-color: rgba(221, 221, 221, 0.8);
    cursor: pointer;
}
</style>