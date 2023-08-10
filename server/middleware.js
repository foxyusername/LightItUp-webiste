const isAuth = (req, res, next) => {
    if(session.isAuthenticated && session.isAuthenticated===true){
        res.send('true');
    }else{
    console.log('not authenticated');
    next();
    }
  };

module.exports=isAuth