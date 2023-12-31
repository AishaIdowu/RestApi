const Person = require('../Model/Person');

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  };

const createPerson = asyncWrapper(async (req, res) => {
    const { name } = req.body;
    const person = new Person({ name});
    const savedPerson = await person.save();
    res.json(savedPerson);
});

// const InsertPerson = asyncWrapper(async(req,res) => {
//     try {
//         const persons = await Person.insertMany([
//             {
//                 name: "Aisha Idowu",
//                 user_id: "1"
//             },
//             {
//                 name: "Aisha",
//                 user_id: "2"
//             },
//             {
//                 name: "John Doe",
//                 user_id: "3"
//             },
//             {
//                 name: "Temitope",
//                 user_id: "4"
//             },
//             {
//                 name: "Abimbola Idowu",
//                 user_id: "5"
//             },
//             {
//                 name: "Ruqayyah",
//                 user_id: "6"
//             }
//         ]);
//         res.json(persons)
        
//     } catch (error) {
//         return res.status(404).json({error: 'Person not found'}) 
        
//     }
    
// });

const readOnePerson = asyncWrapper(async (req, res) => {
    const person = await Person.findById(req.params.user_id);
    if(!person) {
        return res.status(404).json({error: 'Person not found'})
    }
    res.json(person)
});

const readAllPerson = asyncWrapper(async (req, res) => {
    try {
        const persons = await Person.find().maxTimeMS(20000);
        res.status(200).json(persons);
        
    } catch (error) {
        return res.status(404).json({error: 'Person not found'})   
        
    }
    
});

const updatePerson = asyncWrapper(async (req, res) => {
    const updatedPerson = await Person.findByIdAndUpdate(
        req.params.user_id,
        req.body,
        { includeResultMetadata: true }

    );
    if(!updatePerson) {
        return res.status(404).json({error: 'Person not found'})
    }
    res.json(updatePerson);
});

const deletePerson = asyncWrapper(async (req,res) => {
    const deletedPerson = await Person.findByIdAndRemove(req.params.user_id);
    if(!deletedPerson) {
        return res.status(404).json({error: 'Person not found'})
    }
    res.json(deletedPerson);
});


module.exports = {
    createPerson,
    // InsertPerson,
    readOnePerson,
    readAllPerson,
    updatePerson,
    deletePerson
};
