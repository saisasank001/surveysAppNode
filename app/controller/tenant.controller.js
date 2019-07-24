const db = require('../config/db.config.js');
const Customer = db.tenant;
const common = require('./common.controller');
var base64ToImage = require('base64-to-image');
var fs=require('fs');

exports.create = (req, res) => {

    var optionalObj = {'fileName': Date.now(), 'type':'png'};

    let base64String = req.body.Logo // Not a real image
    let base64Image = base64String.split(';base64,').pop();
    fs.writeFile('public/images/'+Date.now()+'.png', base64Image, {encoding: 'base64'}, function(err) {
        console.log('File created');
    });
    Customer.create({
        Name: req.body.Name,
        Address: req.body.Address,
        Logo: optionalObj.fileName+'.'+ optionalObj.type,
        ContactNo: req.body.ContactNo,
        IsActive: req.body.IsActive,
        CreatedBy: req.body.CreatedBy,
        UpdatedBy: req.body.UpdatedBy,
        ValidTill: req.body.ValidTill, Theme: req.body.Theme
    }).then(dbresponse => {
        // Send response object as condition , success, error
        res.json(common.formResponseObject(true, "successfully created tenant", ""));
    }).catch(err => {
        res.status(400).send(err);
    })
};

// Fetch all Customers
exports.findAll = (req, res) => {
    Customer.findAll({
        attributes: {exclude: ["createdAt", "updatedAt"]}
    })
        .then(customers => {
            res.json(customers);
        })
        .catch(error => res.status(400).send(error))
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Customer.findById(req.params.TenantId,
        {attributes: {exclude: ["createdAt", "updatedAt"]}}
    )
        .then(customer => {
                if (!customer) {
                    return res.status(404).json({message: "Customer Not Found"})
                }
                return res.status(200).json(customer)
            }
        )
        .catch(error => res.status(400).send(error));
};

exports.lookUpByAge = (req, res) => {
    console.log("LookUByAge");
    return Customer.findAll({
        where: {
            age: req.params.age
        },
        attributes: {exclude: ["createdAt", "updatedAt"]}
    })
        .then(customers => {
                if (!customers) {
                    return res.status(404).json({message: "Customers Not Found"})
                }
                return res.status(200).json(customers)
            }
        )
        .catch(error => res.status(400).send(error));
};

//find a tenent by isActive
exports.checkIsActive = (req, res) => {
    console.log("checkIsActive");
    return Customer.findAll({
        where: {
            id: req.params.TenantId
        },
        attributes: {exclude: ["createdAt", "updatedAt"]}
    })
        .then(customers => {
                if (!customers) {
                    return res.status(404).json({message: "Customers Not Found"})
                }
                return res.status(200).json(customers)
            }
        )
        .catch(error => res.status(400).send(error));
};

//find a tenent by change active
exports.changeActive = (req, res) => {
    console.log("changeActive");
    return Customer.findById(req.params.TenantId)
        .then(
            customer => {
                if (!customer) {
                    return res.status(404).json({
                        message: 'Customer Not Found',
                    });
                }
                return customer
                    .update({
                        IsActive: req.body.IsActive
                    })
                    .then(() => res.status(200).json(customer))
                    .catch((error) => res.status(400).send(error));
            }
        )
        .catch((error) => res.status(400).send(error));
};
// Update a Customer
exports.update = (req, res) => {


    console.log(req.params.TenantId)

    return Customer.findById(req.params.TenantId)
        .then(
            customer => {

                if(req.body.edited){

                    var base64String = req.body.Logo // Not a real image
                    var base64Image = base64String.split(';base64,').pop();
                    var name=Date.now()+'.png';
                    var path='public/images/'+name;
                    fs.writeFile(path, base64Image, {encoding: 'base64'}, function(err) {
                        console.log('File created');
                    });
                }else{
                    name=req.body.logo
                }


                if (!customer) {
                    console.log('entered')
                    return res.status(400).json(common.formResponseObject(false, '', 'Tenant Not Found'));
                }
                return customer
                    .update({
                        Name: req.body.Name,
                        Address: req.body.Address,
                        Logo:name,
                        ContactNo: req.body.ContactNo,
                        IsActive: req.body.IsActive,
                        CreatedBy: req.body.CreatedBy,
                        UpdatedBy: req.body.UpdatedBy,
                        ValidTill: req.body.ValidTill, Theme: req.body.Theme
                    })
                    .then(() => res.status(200).json({'success':customer}))
                    .catch((error) =>
                        res.status(400).json(common.formResponseObject(false, '', error))
                    );
            }
        )
        .catch((error) => res.status(400).json(common.formResponseObject(false, '', error)));
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    return Customer
        .findById(req.params.TenantId)
        .then(customer => {
            if (!customer) {
                return res.status(400).json(common.formResponseObject(false, '', 'Tenant Not Found'));
            }

            return customer.destroy()
                .then(() => res.status(200).json({message: "Destroy successfully!"}))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};

exports.deleteAll = (req, res) => {
    return Customer.destroy({
        where: {},
        truncate: true
    })
        .then(() => res.status(200).json({message: "All customers have been deleted!"}))
        .catch(error => res.status(400).send(error));
};
