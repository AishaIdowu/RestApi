const express = require('express');
const router = express.Router();
const {
    createPerson,
    readOnePerson,
    readAllPerson,
    updatePerson,
    deletePerson
} = require('../controllers/persons');

router.route('/').post(createPerson);
router.route('/').get(readAllPerson);
router.route('/:user_id').get(readOnePerson).put(updatePerson).delete(deletePerson)

module.exports= router;