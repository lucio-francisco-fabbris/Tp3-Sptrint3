import express from 'express';
import { obtenerTodosSueperHeroesController, nuevoSuperHeroesController, actualizarSuperHeroesController, eliminarSuperHeroesPorIdController, eliminarSuperHeroesPorNombreController } from '../controller/superHeroController.mjs';
import { superHeroValidator, manejarErrores } from '../validators/superHeroValidator.mjs';

const router = express.Router();

router.get('/superheroes', obtenerTodosSueperHeroesController);
router.post('/superheroes/nuevo', superHeroValidator, manejarErrores, nuevoSuperHeroesController);
router.put('/superheroes/actualizar/:id', superHeroValidator, manejarErrores,actualizarSuperHeroesController);
router.delete('/superheroes/eliminar/id/:id', eliminarSuperHeroesPorIdController);
router.delete('/superheroes/eliminar/nombresuperheroes/:nombresuperheroes', eliminarSuperHeroesPorNombreController);

export default router;