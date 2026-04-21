import { body,validationResult } from 'express-validator';

export const superHeroValidator = [
    body('nombreSuperheroe').notEmpty().withMessage('El nombre es obligatorio').trim().isLength({ min: 3, max: 60 }).withMessage(' El nombre debe tener entre 3 y 60 caracteres'),
    body('nombreReal').notEmpty().withMessage('El nombre real es obligatorio').trim().isLength({ min: 3, max: 60}).withMessage(' El nombre real debe tener entre 3 y 60 caracteres'),
    body('edad').notEmpty().withMessage('La edad es obligatoria').trim().isInt({ min: 0 }).withMessage('La edad debe ser un número entero positivo'),
    body('poderes').notEmpty().withMessage('Los poderes son obligatorios').isArray({ min: 1 }).withMessage('Debe haber al menos un poder'),
    body('poderes.*').notEmpty().withMessage('Cada poder es obligatorio').trim().isLength({ min:3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres')
];

export const manejarErrores = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("errores de validacion:", errors.array());
        return res.status(400).json({ errores : errors.array() });
    }

    next();
};