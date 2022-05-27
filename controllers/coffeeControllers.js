// const { response } = require('../app');
const Product = require('../models/coffeeModel');


// Getting all products  
exports.getAllProduct = async (req,res) => {
    
    try{
        const allProducts = await Product.find()
        // send response 
        res.render("Index");
   
    } catch(error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }

};
exports.createProduct = (req, res) => {
    res.status(500).json({
      status: "fail",
      data: {
        message: "undefined routes",
      },
    });
  };
  
  exports.createProduct = async (req, res) => {
    // lets create new product
    const newProduct = await Product.create(req.body);
    try {
  // send reponse 
      // res.render('New');
    res.status(201).json({
      status: "success",
      data: {
        newLearner: newLearner,
      },
    });
    } catch(error) {
      res.status(500).json({
        status: "error",
        message: error,
      })
    }
  };
  
  
  // This controller is to retrieve a single product
  exports.getSingleProduct = async (req, res) => {
    try {
    const getSingleProduct = await Product.findById(req.params.id);
      res.render('Single');
      // res.status(200).json({
      //   status: "success",
      //   data: {
      //     learner: learner,
      //   },
      // });
    } catch(error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
    };
    // This controller is to update a single product 
  exports.updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(500).json({
        status: "fail",
        data: {
          updatedProduct,
        },
      });
    } catch(error) {
      res.status(500).json({
        status: "fail",
        message: error
      })
    }
    };
  
  // This controller is to delete a single product
  exports.deleteProduct = async (req, res) => {
    try {
  
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: "success",
      data: {},
    });
    } catch(error) {
      res.status(500).json({
        status: "error",
        message: error
      })
    }
  };