module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookies('user-id',25);
    
    return res.render('home',{
        title: "Home"

    });
}

