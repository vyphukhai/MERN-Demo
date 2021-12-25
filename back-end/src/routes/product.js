const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct,getProductsBySlug,getAllProduct ,getProducts, getProductDetailsById,deleteProductById,getProductsByKey } = require("../controllers/product");
const multer= require('multer');
const shortid = require('shortid');
const path = require('path');

//const {  } = require("../controllers/product");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads' ));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });

  const upload=multer({ storage});

router.post("/product/create", requireSignin, adminMiddleware,upload.array('productPicture'),createProduct);
router.get('/products/:slug',getProductsBySlug);
router.get("/product/getproduct", getAllProduct);
router.get('/product/:productId',getProductDetailsById);
router.post(
  "/product/getProducts",
  requireSignin,
  adminMiddleware,
  getProducts
);
router.get('/search/:key',getProductsByKey)
router.delete(
  "/product/deleteProductById",
  requireSignin,
  adminMiddleware,
  deleteProductById
);

module.exports = router;
