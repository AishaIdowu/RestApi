const express = require('express');
const router = express.Router();
const {
    createPerson,
    readOnePerson,
    readAllPerson,
    updatePerson,
    deletePerson
} = require('../controllers/persons');

router.route('/api').post(createPerson);
router.route('/api').get(readAllPerson);
router.route('/api/:user_id').get(readOnePerson).put(updatePerson).delete(deletePerson)

module.exports= router;