const jwt=require("jsonwebtoken")

exports.generateToken=async(payload,key)=>{
try{
  const token=await jwt.sign(payload,key, { expiresIn: '1h' })
  return token
}catch(err){
  console.log(err)
}
}