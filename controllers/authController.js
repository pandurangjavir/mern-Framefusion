class authController{
    user_register = async(req,res)=> {
      console.log(req.body)  
    }
}

module.exports = new authController()