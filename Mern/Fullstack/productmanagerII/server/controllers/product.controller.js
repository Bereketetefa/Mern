console.log("product.controller.js");

const product = require("../models/product.model");


class productcontroller {
    create(req, res) {
        const newProduct = new product(req.body);
        newProduct.save()
            .then( () => res.json(newProduct))
            .catch( errors => res.json(errors));
    }
    getAll(req, res) {
        product.find().sort("start")
            .then( Product => res.json(Product))
            .catch( errors => res.json(errors));
    }
    getOne(req, res) {
        product.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch( errors => res.json(errors) );
    }
    update(req, res) {
        product.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    remove(req, res) {
        product.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
}

module.exports = new productcontroller();