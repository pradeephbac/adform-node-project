var configurations = require("../conf/conf");
var Error = { status: "Error happened" };

var OwnerModel = require("../model/owner");
var Owner = OwnerModel;

module.exports = router => {
  router.get("/all", function(req, res) {
    Owner.find({}, function(err, owners) {
      if (!err) {
        res.send(owners);
      } else {
        res.send(Error, 404);
      }
    });
  });

  router.post("/owner", function(req, res) {
    Owner.create(
      {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
      },
      function(err, owner) {
        if (!err) {
          res.status(200).send(owner);
        } else {
          res.send(Error, 404);
        }
      }
    );
  });

  return router;
};
