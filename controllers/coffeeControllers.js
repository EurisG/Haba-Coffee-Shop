const { request, response } = require('../app');
const Coffee = require('../modules/coffeeModule');

// Retrieve all coffee at once 
exports.getAllCoffee = async (request, response) => {
    try {
        const coffee = await Coffee.find();

        // send response 
        response.status(200).json({
            status: "success",
            data: {
                coffee: coffee,
            },
        });
    } catch(error) {
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
};
// Creates new product on page 
exports.createProduct = async (request, response) => {
   response.status(500).json({
       status: "fail",
       data: {
           message: "undefined routes",
       },
   });
};

exports.createProduct = async (request, response) => {
        // create new product 
        const newProduct = await Coffee.create(request.body);
        try{
            // send response 
            response.status(201).json({
                status: "success",
                data: {
                    newProduct: newProduct,
                },
            });
        } catch(error) {
            response.status(500).json({
                status: "error",
                message: error,
            })
        }
    
};
// Retrieve single product 
exports.singleProduct = async (request, response) => {
    try {
        const coffee = await Coffee.findById(request.params.id);

        // send response 
        response.status(200).json({
            status: "success",
        data: {
            coffee: coffee,
        } ,
     });
    } catch(error) {
        response.status(500).json({
            status: "error",
            message: error,
        })
    }
};