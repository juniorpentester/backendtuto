// ==============================================
// ROUTER POUR LES TÂCHES
// ==============================================

// 1. Importer express
const express = require('express');

// 2. Créer un routeur (un mini-app Express)
const router = express.Router();

// 3. Données mock (temporaires)
let taches = [
    { id: 1, titre: 'Apprendre Express', description: 'Les bases', termine: false },
    { id: 2, titre: 'Construire une API', description: 'RESTful', termine: false }
];

// ==============================================
// 4. DÉFINIR LES ROUTES SUR LE ROUTEUR
// ==============================================

// GET - Récupérer toutes les tâches
router.get('/', (req, res) => {
    res.json(taches);
});

// GET - Récupérer une tâche spécifique
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tache = taches.find(t => t.id === id);
    
    if (!tache) {
        return res.status(404).json({ erreur: 'Tâche non trouvée' });
    }
    
    res.json(tache);
});

// POST - Créer une tâche
router.post('/', (req, res) => {
    const { titre, description } = req.body;
    
    if (!titre) {
        return res.status(400).json({ erreur: 'Le titre est obligatoire' });
    }
    
    const nouvelleTache = {
        id: Date.now(),
        titre: titre,
        description: description || '',
        termine: false
    };
    
    taches.push(nouvelleTache);
    res.status(201).json(nouvelleTache);
});

// PUT - Remplacer une tâche
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tache = taches.find(t => t.id === id);
    
    if (!tache) {
        return res.status(404).json({ erreur: 'Tâche non trouvée' });
    }
    
    tache.titre = req.body.titre || tache.titre;
    tache.description = req.body.description || tache.description;
    tache.termine = req.body.termine !== undefined ? req.body.termine : tache.termine;
    
    res.json(tache);
});

// DELETE - Supprimer une tâche
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = taches.findIndex(t => t.id === id);
    
    if (index === -1) {
        return res.status(404).json({ erreur: 'Tâche non trouvée' });
    }
    
    taches.splice(index, 1);
    res.status(204).send();
});

// ==============================================
// 5. EXPORTER LE ROUTEUR
// ==============================================
module.exports = router;