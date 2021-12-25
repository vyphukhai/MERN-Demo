const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require('../models/category')

exports.createProduct = (req, res) => {
  //res.status(200).json({ file: req.files , body: req.body });
  const { name, price, description, category,quantity, createdBy } =
    req.body;
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures =req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createBy: req.user._id,
  });
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};
function createProducts(products){

  const productList = [];
  for (let pro of products){
      productList.push({
          _id: pro._id,
          name: pro.name,
          slug: pro.slug,
          price: pro.price,
          quantity: pro.quantity,
          description: pro.description,
          productPictures: pro.productPictures
      });
  }

  return productList;
};
exports.getAllProduct = (req,res)=>{
  Product.find({})
  .exec((error, products)=>{
      if(error) return res.status(400).json({error});
      if(products){
          const productList = createProducts(products);
          res.status(200).json({products});
      }
  })
}
exports.getProductsByKey = (req,res)=>{
  const{key} = req.params;
  console.log(key);
  Product.find({slug:{$regex:key, $options: 'i' }}).exec((error,products)=>{
    if(error){
      return res.status(400).json({error});
      }
    if(products){
      return res.status(200).json({products});
    } else {
      res.status(400).json({ error: "Key required" });
    }
  })
}
exports.getProductsBySlug = (req,res)=>{
  const { slug} = req.params;
  Category.findOne({slug:slug}).
  select('_id').exec((error,category)=>{
    if(error){
    return res.status(400).json({error});
    }
    if(category){
      Product.find({category:category._id})
      .exec((error,products)=>{
        if(error){
          return res.status(400).json({error});
          }
          if(products.length>0){
            res.status(200).json({
              products,
            productsByPrice:{
              under5k:products.filter(product=>product.price<=5000000),
              under10k:products.filter(product=>product.price>5000000 && product.price<=10000000),
              under20k:products.filter(product=>product.price>10000000 && product.price<=20000000),
              under50k:products.filter(product=>product.price>20000000 && product.price<=50000000),
            }});
          }

        
      })
    }
    
    
  });
}
exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};
exports.deleteProductById = (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Product.deleteOne({ _id: productId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(400).json({ error: "Params required" });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user._id })
    .select("_id name price quantity slug description productPictures category")
    .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ products });
};

