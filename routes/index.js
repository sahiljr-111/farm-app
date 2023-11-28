var express = require('express');
const { userRegistration, userLogin } = require('../controller/userController');
const { selerRegistration, selerLogin } = require('../controller/sellerController');
const { addProduct, manageProduct, deleteProduct, userProduct, updateProduct } = require('../controller/productController');
const { addToCart, manageCart, manageOrder, removeCartItem } = require('../controller/cartController');
var router = express.Router();

router.post('/user-register', userRegistration);
router.post('/user-login', userLogin);
router.post('/seller-register', selerRegistration);
router.post('/seller-login', selerLogin);
router.post('/add-product', addProduct);
router.get('/manage-product', manageProduct);
router.get('/manage-product/delete/:id', deleteProduct);
router.post('/manage-product/update/:id', updateProduct);
router.get('/userdashboard',userProduct);
router.post('/userdashboard',addToCart);
router.get('/manegeCart',manageCart);
router.get('/manageorder',manageOrder);
router.get('/cart/delete/:id',removeCartItem);

module.exports = router;
