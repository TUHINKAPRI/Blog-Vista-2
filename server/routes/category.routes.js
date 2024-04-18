const express=require('express');
const { createCategory, getAllCategory, updateCategory, deleteCategory } = require('../controllers/category.controllers');
const { authGuard, isAdmin } = require('../middleware/auth');

const categoryRouter=express.Router();



categoryRouter.post('/',authGuard, isAdmin ,createCategory)
categoryRouter.get('/',authGuard, isAdmin,getAllCategory)
categoryRouter.put('/:id',authGuard, isAdmin,updateCategory)
categoryRouter.delete('/:id',authGuard, isAdmin,deleteCategory)

module.exports =categoryRouter