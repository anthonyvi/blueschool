const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (HTML, CSS, JS, manifest, icons…)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale -> ton index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur Blueschoool lancé sur http://localhost:${PORT}`);
});
