module.exports.profile=function(req,res){
    return res.render('users',{
        title: "Users"
  });
}

//render signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up', {
        title: "Codiel | Sign Up"
    })
}

 //render sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in', {
        title: "Codiel | Sign In"
    })
}

//get the sign up data
module.exports.create=function(req, res){
    //TODO later
}

//get the sign in and create session for user
module.exports.create=function(req,res){
    //TODO later
}