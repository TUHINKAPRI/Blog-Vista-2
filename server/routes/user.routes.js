const { updateProfilePicture } = require('../controllers/user.controllers');
const { authGuard } = require('../middleware/auth');
const upload = require('../middleware/fileUpload');

const userRouter=require('express').Router();



userRouter.post('/update-profile-picture', upload.single('profile_picture') , authGuard,updateProfilePicture)




module.exports=userRouter