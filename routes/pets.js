var configurations = require("../conf/conf");
var Error = { status: "Error happened" };

var PetModel = require("../model/pet");
var Pet = PetModel;

module.exports = router => {
  router.get("/all", function(req, res) {
    Pet.find({}, function(err, pets) {
      if (!err) {
        res.send(pets);
      } else {
        res.send(Error, 404);
      }
    });
  });

  // get all pets own by particular owner
  router.get("/ownby/:owner_id", function(req, res) {
    Pet.find({ owner_id: req.params.owner_id }, function(err, pets) {
      if (!err) {
        res.send(pets);
      } else {
        res.send(Error, 404);
      }
    });
  });

  router.post("/pet", function(req, res) {
    Pet.create(
      {
        name: req.body.name,
        colour: req.body.colour,
        age: req.body.age,
        breed: req.body.breed,
        type: req.body.type,
        owner_id: req.body.owner_id
      },
      function(err, pet) {
        if (!err) {
          res.status(200).send(pet);
        } else {
          res.send(Error, 404);
        }
      }
    );
  });

  router.put("/update/:petId", function(req, res) {
    var query = {
      _id: req.params.petId
    };
    var changeObject = req.body;
    Pet.findOneAndUpdate(query, changeObject, function(err, numAffected) {
      if (!err) {
        res.status(200).send(numAffected);
      } else {
        res.send(Error, 404);
      }
    });
  });

  return router;
};
