import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', superHeroRoutes);

app.get('/agregar', (req, res) => {
    res.render('addSuperHero');
});

app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint no encontrado' });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
});
