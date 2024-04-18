const multer =require('multer');
const path = require('path');


const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,path.join(__dirname,"../upload"))
  },
  filename:(req,file,cb)=>{
  cb(null,`${Date.now()}${file.originalname} `)
  },
})

const upload=multer({
  storage:storage,
  limits: {
    fileSize: 1 * 1000000, // 1MB
  },
})


module.exports = upload