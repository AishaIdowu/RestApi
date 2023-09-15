const express = require('express');
const router = express.Router();
const {
    createPerson,
    readOnePerson,
    // readAllPerson,
    updatePerson,
    InsertPerson,
    deletePerson
} = require('../controllers/persons');


router.route('/').get(InsertPerson);
router.route('/api').post(createPerson);
// router.route('/api').get(readAllPerson);
router.route('/api/:user_id').get(readOnePerson).put(updatePerson).delete(deletePerson)

module.exports= router;