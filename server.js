import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path'
import cors from 'cors'

const app = express();

app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define a pasta onde os arquivos estáticos do aplicativo React estão localizados
app.use(express.static(path.join(__dirname, 'dist')));

// Rota para servir o arquivo HTML principal
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Porta em que o servidor vai rodar
const PORT = process.env.PORT || 3030;

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});