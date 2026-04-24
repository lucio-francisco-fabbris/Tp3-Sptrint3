import express from 'express';
import { obtenerTodosSueperHeroesController, nuevoSuperHeroesController, actualizarSuperHeroesController, eliminarSuperHeroesPorIdController } from '../controller/superHeroController.mjs';
import { obtenerSuperHeroesPorId } from '../service/superHeroService.mjs';
import { superHeroValidator, manejarErrores } from '../validators/superHeroValidator.mjs';

const router = express.Router();

router.get('/superheroes', obtenerTodosSueperHeroesController);

router.get('/superheroes/agregar', (req, res) => {
    res.render('addSuperHero');
});
router.post('/superheroes/agregar', superHeroValidator, manejarErrores, nuevoSuperHeroesController);

router.get('/superheroes/editar/:id', async (req, res) =>{
    const { id } = req.params;

    const superHero = await obtenerSuperHeroesPorId(id); 
    res.render('editSuperhero', {superHero});
});

router.post('/superheroes/actualizar/:id', superHeroValidator, manejarErrores,actualizarSuperHeroesController);

router.post('/superheroes/eliminar/id/:id', eliminarSuperHeroesPorIdController);

export default router;