const OrderRoutes = require('express').Router();
const OrderController = require('../controllers/order_controller');

OrderRoutes.post("/", OrderController.createOrder );
OrderRoutes.get("/:userId", OrderController.fetchOrderForUser );
OrderRoutes.put("/updateStatus",OrderController.updateOrderStatus);



module.exports = OrderRoutes ; 
