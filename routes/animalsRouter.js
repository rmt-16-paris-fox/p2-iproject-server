const router = require('express').Router();
const Controller = require('../controllers/animalsController');

router.post('/addAnimal', Controller.addAnimal);
router.get('/fetchData', Controller.fetchData);
router.put('/updateAnimal/:animalId', Controller.updateAnimal);
router.delete('/deleteAnimal/:animalId', Controller.deleteAnimal);
router.get('/findAnimal/:animalName', Controller.findAnimal);

module.exports = router;