const db = require('../config/db.config.js');
const Customer = db.tenant;

exports.create= (req,res)=>{

       Customer.create({
		   Name:req.body.Name,
           Address:req.body.Address,
           Logo:req.body.Logo,
           ContactNo:req.body.ContactNo,
           IsActive:req.body.IsActive,
           CreatedBy:req.body.CreatedBy,
           UpdatedBy:req.body.UpdatedBy,
           ValidTill:req.body.ValidTill}).then(dbresponse=>{
               res.json(dbresponse);
       }).catch(err=>{
           res.status(400).send(err);
       })
}
 
// Fetch all Customers
exports.findAll = (req, res) => {
	Customer.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(customers => {
			res.json(customers);
		})
		.catch(error => res.status(400).send(error))
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId,
				{attributes: { exclude: ["createdAt", "updatedAt"] }}
			)
			.then(customer => {
					if (!customer){
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
				attributes: { exclude: ["createdAt", "updatedAt"] }
			})
			.then( customers => {
					if(!customers){
						return res.status(404).json({message: "Customers Not Found"})
					}
					return res.status(200).json(customers)
				}
			)
			.catch(error => res.status(400).send(error));
}
 //find a tenent by isActive
 exports.checkIsActive = (req,res) =>{
	console.log("checkIsActive");
	return Customer.findAll({
				where: {
					id: req.params.TenantId
				},
				attributes: { exclude: ["createdAt", "updatedAt"] }
			})
			.then( customers => {
					if(!customers){
						return res.status(404).json({message: "Customers Not Found"})
					}
					return res.status(200).json(customers)
				}
			)
			.catch(error => res.status(400).send(error));
 }
//  //find a tenent by change active
 exports.changeActive = (req,res) =>{
	console.log("changeActive");
	return Customer.findById(req.params.TenantId)
		.then(
			customer => {
				if(!customer){
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
 }
// Update a Customer
exports.update = (req, res) => {
	return Customer.findById(req.params.customerId)
		.then(
			customer => {
				if(!customer){
					return res.status(404).json({
						message: 'Customer Not Found',
					});
				}
				return customer
							.update({
								name: req.body.name,
								age: req.body.age,
								active: req.body.active
							})
							.then(() => res.status(200).json(customer))
							.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	return Customer
					.findById(req.params.customerId)
					.then(customer => {
						if(!customer) {
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
}
