const express = require('express');
const router = express.Router();
const {
    createPerson,
    readOnePerson,
    readAllPerson,
    updatePerson,
    deletePerson
} = require('../controllers/persons');

router.route('/').post(createPerson).get(readAllPerson);
router.route('/user_id').get(readOnePerson).patch(updatePerson).delete(deletePerson)

module.exports= router;