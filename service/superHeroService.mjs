import SuperHeroRepository from "../repositories/superHeroRepository.mjs";

export async function obtenerTodosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function nuevoSuperHeroes(data) {
    return await SuperHeroRepository.nuevoSuperHero(data);
}

export async function actualizarSuperHeroes(id, update) {
    return await SuperHeroRepository.actualizarSuperHero(id, update); 
}

export async function eliminarSuperHeroesPorId(id) {
    return await SuperHeroRepository.eliminarSuperheroId(id);
}

export async function eliminarSuperHeroesPorNombre(nombre) {
    return await SuperHeroRepository.eliminaSuperHeroNombre(nombre);
};