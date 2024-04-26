const {
  createMembershipData,
  createOrder,
} = require("../controllers/membership.controllers");

const MemRouter = require("express").Router();

MemRouter.post("/create", createMembershipData);
MemRouter.post('/craete-order',createOrder)

module.exports = MemRouter;
