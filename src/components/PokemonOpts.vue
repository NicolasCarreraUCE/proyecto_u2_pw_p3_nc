<template>
  <div class="options-conatiner">
    <ul>
        <li v-for="poke in pokemons" :key="poke.id">{{ poke.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type: Array,
      required: true
    }
  }
}
</script>

<style>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 250px;
    margin: 10px auto 0 auto;
    cursor: pointer;
}
</style>