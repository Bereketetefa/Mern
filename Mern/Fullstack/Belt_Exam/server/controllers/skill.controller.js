console.log("skill.controller.js");

const skill = require("../models/skill.model");


class skillcontroller {
    create(req, res) {
        const newProduct = new skill(req.body);
        newProduct.save()
            .then( () => res.json(newProduct))
            .catch( errors => res.json(errors));
    }
    getAll(req, res) {
        skill.find().sort("start")
            .then( Product => res.json(Product))
            .catch( errors => res.json(errors));
    }
    getOne(req, res) {
        skill.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch( errors => res.json(errors) );
    }
    update(req, res) {
        skill.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    like(req,res) {
        skill.findOneAndUpdate({_id:req.params._id}, {$set: {likes : req.body.likes}},{runValidators: true})
            .then(data=>res.json(data))
            .catch(err=>res.json(err));
    }
    remove(req, res) {
        skill.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
}

module.exports = new skillcontroller();