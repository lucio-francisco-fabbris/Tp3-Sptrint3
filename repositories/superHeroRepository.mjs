import superHero from "../models/SuperHero.mjs";

class SuperHeroRepository {
    async obtenerTodos() {
        return await superHero.find({});
    }

    async nuevoSuperHero(data) {
        return await superHero.create(data);
    }

    async actualizarSuperHero(id, update) {
        return await superHero.findByIdAndUpdate(id, update, { new: true });
    }

    async eliminarSuperheroId(id) {
        return await superHero.findByIdAndDelete(id);
    }

    async eliminaSuperHeroNombre(nombre) {
        return await superHero.findOneAndDelete({ nombre });
    }
};

export default new SuperHeroRepository();