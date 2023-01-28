<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este Pokemon</h1>
    <PokemonImg :idPokemon="pokemonCorrecto.id" :showPokemon="mostarPokemon" />
    <!-- $event: representa al objeto enviado en la segunda posicion del evento hijo -->
    <PokemonOpts v-if="!mostarPokemon" :pokemons="pokemonArr" @selecionado="validarRespuesta($event)"/>
  </div>
  <div class="mensaje" v-if="mostarPokemon">
    <p>{{ mensaje }}</p>
    <button @click="reiniciar">Reintentar</button>
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
      pokemonCorrecto: null,
      mostarPokemon: false,
      mensaje: ''
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
    validarRespuesta(pokemonSeleccionadoHijo) {
      console.log('Prueba evento');
      console.log(pokemonSeleccionadoHijo);
      this.mostarPokemon = true
      const idSelecionado = pokemonSeleccionadoHijo

      if(idSelecionado == this.pokemonCorrecto.id) {
        console.log('Correcto');
        this.mensaje = 'Felicidades has ganado'
      } else {
        console.log('Incorrecto');
        this.mensaje = 'Incorrecto el pokemon coorecto fue ' + this.pokemonCorrecto.nombre
      }
    },
    reiniciar() {
      this.pokemonArr = [],
      this.pokemonCorrecto = null
      this.mostarPokemon = false
      this.mensaje = ''
      this.cargaPokemonInicial()
    }
  },
};
</script>

<style>
</style>