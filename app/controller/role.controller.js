const db = require('../config/db.config.js');
const Customer = db.roles;
const common = require('./common.controller');

// Post a Customer
exports.create = (req, res) => {
    // Save to MariaDB database
    Customer.create({
        RoleName: req.body.RoleName,
        AccessIds: req.body.AccessIds,
        CreatedBy: req.body.CreatedBy,
        UpdatedBy: req.body.UpdatedBy
    })
        .then(customer => {
            // Send response object as condition , success, error
            res.json(formResponseObject(true, "successfully created role", ""));
        })
        .catch(error => res.status(400).send(error))
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
    Customer.findById(req.params.customerId,
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

// Update a Customer
exports.update = (req, res) => {
    console.log(req.params.TenantId);
    return Customer.findById(req.params.TenantId)
        .then(
            customer => {
                if (!customer) {
                    return res.status(400).json(common.formResponseObject(false, '', 'role Not Found'));
                }
                return customer
                    .update({
                        RoleName: req.body.RoleName,
                        AccessIds: req.body.AccessIds,
                        CreatedBy: req.body.CreatedBy,
                        UpdatedBy: req.body.UpdatedBy
                    })
                    .then(() => res.status(200).json(customer))
                    .catch((error) =>
                        res.status(400).json(common.formResponseObject(false, '', 'Couldnt update role'))
                    );
            }
        )
        .catch((error) => res.status(400).json(common.formResponseObject(false, '', 'role Not Found')));
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    return Customer
        .findById(req.params.customerId)
        .then(customer => {
            if (!customer) {
                return res.status(400).json({
                    message: 'Customer Not Found',
                });
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
