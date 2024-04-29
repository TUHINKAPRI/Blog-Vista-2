const {
  createMembershipData,
  createOrder,
  verifyPayment,
} = require("../controllers/membership.controllers");
const { authGuard } = require("../middleware/auth");

const MemRouter = require("express").Router();

MemRouter.post("/create", createMembershipData);
MemRouter.post('/create-order',authGuard,createOrder)
MemRouter.post('/verify-payment',authGuard,verifyPayment)

module.exports = MemRouter;
