<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-if="pokemonCorrecto">
    <h1>Quien es este Pokemon</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :showPokemon="true" />
    <PokemonOpts :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PokemonOpts from "@/components/PokemonOpts.vue";
import obtenerPokemonsFachada from "../js/FuncionalidadOptsPokemon.js";
export default {
  components: {
    PokemonImg,
    PokemonOpts,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: {
        nombre: "",
        id: 0,
      },
      mostarPokemon: false
    };
  },
  mounted() {
    // en los metodos del siclo de vida no hace falta poner el await
    this.cargaPokemonInicial();
  },
  methods: {
    async cargaPokemonInicial() {
      const vec = await obtenerPokemonsFachada();
      console.log(vec);
      this.pokemonArr = vec;

      const numero = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.pokemonArr[numero];
    },
  },
};
</script>

<style>
</style>