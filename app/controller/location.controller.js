const db = require('../config/db.config.js');
const Customer = db.location;
const common = require('./common.controller');

// Post a Customer
exports.create = (req, res) => {
    // Save to MariaDB database
    Customer.create({
            Name: req.body.Name,
            TenantId: req.body.TenantId,
            CreatedBy: req.body.CreatedBy,
            UpdatedBy: req.body.UpdatedBy
        })
        .then(customer => {
            // Send created customer to client
            // Send response object as condition , success, error
            res.json(common.formResponseObject(true, "successfully created location", ""));
        })
        .catch(error => res.status(400).send(error))
};

// Fetch all Customers
exports.findAll = (req, res) => {
    Customer.findAll({

        })
        .then(customers => {
            res.json(customers);
        })
        .catch(error => res.status(400).send(error))
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Customer.findById(req.params.LocationId, { attributes: { exclude: ["createdAt", "updatedAt"] } })
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ message: "Customer Not Found" })
            }
            return res.status(200).json(customer)
        })
        .catch(error => res.status(400).send(error));
};

exports.lookUpByAge = (req, res) => {
    console.log("LookUByAge");
    return Customer.findAll({
            where: {
                age: req.params.age
            },
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        .then(customers => {
            if (!customers) {
                return res.status(404).json({ message: "Customers Not Found" })
            }
            return res.status(200).json(customers)
        })
        .catch(error => res.status(400).send(error));
};

// Update a Customer
exports.update = (req, res) => {
    console.log(req.params.TenantId);
    return Customer.findById(req.params.TenantId)
        .then(
            customer => {
                if (!customer) {
                    return res.status(400).json(common.formResponseObject(false, '', 'location Not Found'));
                }
                return customer
                    .update({
                        Name: req.body.Name,
                        TenantId: req.body.TenantId,
                        CreatedBy: req.body.CreatedBy,
                        UpdatedBy: req.body.UpdatedBy
                    })
                    .then(() => res.status(200).json(customer))
                    .catch((error) =>
                        res.status(400).json(common.formResponseObject(false, '', 'Couldnt update location'))
                    );
            }
        )
        .catch((error) => res.status(400).json(common.formResponseObject(false, '', 'location Not Found')));
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    return Customer
        .findById(req.params.LocationId)
        .then(customer => {
            if (!customer) {
                return res.status(400).json({
                    message: 'Customer Not Found',
                });
            }

            return customer.destroy()
                .then(() => res.status(200).json({ message: "Destroy successfully!" }))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};

exports.deleteAll = (req, res) => {
    return Customer.destroy({
            where: {},
            truncate: true
        })
        .then(() => res.status(200).json({ message: "All customers have been deleted!" }))
        .catch(error => res.status(400).send(error));
};