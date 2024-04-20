var cloudinary = require('cloudinary').v2;





exports.cloudinary_connection=async()=>{
  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINAY_SECRET_KEY
  });

  
}