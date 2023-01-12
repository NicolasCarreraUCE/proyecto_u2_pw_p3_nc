<template>
  <img v-if="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg" alt="No se puede renderisar" class="ocultar-pkemon">
  <img v-if="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg" alt="No se puede renderisar">
</template>

<script>
export default {
    data(){
        return{
          idPokemon: 1,
          mostrarPokemon: true
        }
    },
}
</script>

<style>
.ocultar-pkemon {
    filter: brightness(0);
    position: absolute;
}
img {
    height: 200px;
    /*right: 32%;*/
    -webkit-user-drag: none;
}
</style>