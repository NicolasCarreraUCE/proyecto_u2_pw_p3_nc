const obtenerAleatorio = limite => {
    return Math.floor(Math.random() * limite) + 1
}

const consumirAPI = idPokemon => {
}

const crearArregloPokemon = () => {
    const arg = []
    arg[0] = obtenerAleatorio(600)
    arg[1] = obtenerAleatorio(600)
    arg[2] = obtenerAleatorio(600)
    arg[3] = obtenerAleatorio(600)
    return arg
}