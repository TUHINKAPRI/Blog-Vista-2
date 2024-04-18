

const express=require('express');
const { authGuard } = require('../middleware/auth');
const { addToBookmarks, removeToBookmarks } = require('../controllers/bookmark.controllers');


const bookMarkRouter=express.Router();



bookMarkRouter.put('/add',authGuard,addToBookmarks)
bookMarkRouter.put('/remove',authGuard,removeToBookmarks)





module.exports=bookMarkRouter