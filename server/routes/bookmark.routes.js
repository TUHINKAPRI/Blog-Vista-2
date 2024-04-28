

const express=require('express');
const { authGuard } = require('../middleware/auth');
const { addToBookmarks, removeToBookmarks, getUserBookmarks } = require('../controllers/bookmark.controllers');


const bookMarkRouter=express.Router();


bookMarkRouter.get('/',authGuard,getUserBookmarks)
bookMarkRouter.post('/add',authGuard,addToBookmarks)
bookMarkRouter.post('/remove',authGuard,removeToBookmarks)





module.exports=bookMarkRouter