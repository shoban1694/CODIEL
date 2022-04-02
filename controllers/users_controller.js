const User=require('../models/user');

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
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
    if(err){console.log('error in finding user in signing up');return}

    if(!user){
        User.create(req.body,function(err, user){
         if(err){console.log('error in creating user wile signing up'); return}
         return res.redirect('/user/sign-in');

        })
    }else{
        return res.redirect('back');
    }
    });
}

//get the sign in and create session for user
module.exports.create=function(req,res){
    //TODO later
}