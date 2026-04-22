import { obtenerTodosSuperHeroes, nuevoSuperHeroes, actualizarSuperHeroes, eliminarSuperHeroesPorId, eliminarSuperHeroesPorNombre } from "../service/superHeroService.mjs";

export async function obtenerTodosSueperHeroesController(req, res) {
    try {
        const superHeroes = await obtenerTodosSuperHeroes();
        res.render('dashboard', { superHeroes });
    } catch (error) {
        console.log("ERROR REAL:", error);
        res.status(500).json({ error: "Error al obtener los superhéroes"});
    }
};

export async function nuevoSuperHeroesController(req, res) {
    try {
        const data = req.body;

        data.poderes = data.poderes.split(',').map(poder => poder.trim());

        await nuevoSuperHeroes(data);
        res.redirect('/api/superheroes');
    } catch (error) {
        console.log("ERROR REAL:", error);
        res.status(500).json({ error: "Error al crear el superhéroe"});
    }
};

export async function actualizarSuperHeroesController(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;
        data.poderes = data.poderes.split(',').map(poder => poder.trim());
        await actualizarSuperHeroes(id, data);
        res.redirect('/api/superheroes');
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el superhéroe"});
    }
};

export async function eliminarSuperHeroesPorIdController(req, res) {
    try {
        const { id } = req.params;
        await eliminarSuperHeroesPorId(id);
        res.redirect('/api/superheroes');
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el superhéroe"});
    }
};
