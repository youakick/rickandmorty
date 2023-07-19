<template>
    <nav class="navbar">
      <button>Home</button>
      <button>Episodes</button>
      <button>Locations</button>
      <button>About</button>
      <form action="submit" class="search-form" >
          <input type="text"  placeholder=" Search character" v-model="inputValue">
          <button class="search-btn" type="submit" @click.prevent="saveInputValue">Search</button>
      </form>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    saveInputValue() {
      this.$store.dispatch('fetchCharacters', this.inputValue)
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  border: 2px solid grey;
  min-height: 50px;
  background-color: rgba(221, 221, 221, 0.5);
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.2);
}

button {
  height: 50px;
  width: 80px;
  border: none;
  cursor: pointer;
  margin-left: 2px;
  font-size: 15px;
  font-weight: 700;
  background-color: rgba(221, 221, 221, 0.08);
  color: blue;
  font-style: italic;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #cccccc;
}

.search-form {
  margin-left: auto;
}
input {
  height: 26px;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.search-btn {
  height: 25px;
  width: 60px;
  border: 2px solid black;
  cursor: pointer;
  margin-left: 2px;
  margin-right: 20px;
  font-size: 15px;
  font-weight: 500;
  background-color: rgba(221, 221, 221, 0.08);
  color: blue;
  font-style: italic;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}
</style>