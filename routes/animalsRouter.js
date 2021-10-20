const router = require('express').Router();
const Controller = require('../controllers/animalsController');

router.post('/addAnimal', Controller.addAnimal);
router.get('/fetchAnimals', Controller.fetchAnimals);
router.put('/updateAnimal/:animalId', Controller.updateAnimal);
router.delete('/deleteAnimal/:animalId', Controller.deleteAnimal);

module.exports = router;