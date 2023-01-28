<template>
  <div class="options-conatiner">
    <ul>
        <!-- Enviar un parametro-->
        <li v-for="poke in pokemons" :key="poke.id" @click="$emit('selecionado', poke.id)">{{ poke.nombre }}</li>
        <!-- Enviar varios parametros -->
        <!-- li v-for="poke in pokemons" :key="poke.id" @click="$emit('selecionado', {pokemonId: poke.id, poemonNombre: poke.poemonNombre})">{{ poke.nombre }}</li>-->
        
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
  },
  methods: {
    imprimir() {
      console.log('Gracias igualmente');
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