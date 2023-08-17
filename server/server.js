const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const cors=require('cors');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');

const pool=require('./database');
const port=3000;
const secret_key='secret';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended:true
}));


const isAuth = (req, res, next) => {

  if(req.cookies.accesToken){
  jwt.verify(req.cookies.accesToken,secret_key,(err,decoded)=>{
    if(err){
      res.send('invalid token value');
      console.log('invalid token');
    }else{
      console.log('authenticated succesfully');
     next();
    }

  })
  }else if(req.cookies.accesToken===undefined){
    console.log('no token presented');
    res.send('no token presented')
  }
}

app.use('/logout',isAuth);


let max=9999;
let min=1000;
let code;

function sendEmail(to){

    code=Math.floor(Math.random() * (max - min + 1)) + min;
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "lightitup063@gmail.com",
          pass: "lgvhiahmzzietjze",
        },
      });

    const email={
        to: to,
        subject:'Email verification',
        html:'<h3>verification code is '+code+'</h3>'
    }  
    transporter.sendMail(email).then((res)=>console.log('email sent succesfully')).catch((err)=>console.log(err));
}

function registerUser(req,email,username,password){

    bcrypt.hash(password,5)
    .then(hash => {

        pool.query('insert into users (email,username,passcode) values (?,?,?)',[email,username,hash],(error,result)=>{
            if(error){
                console.log(error)
            }else{
         console.log('credentials inserted inside of database');
         }
        })
    })
    .catch(err => console.error(err.message))
}

let password;
let email;
let username;




app.post('/verifycode',(req,res)=>{
    let inputValue=req.body.inputValue;
    let email=req.body.email;
    let username=req.body.username;
    let password=req.body.password;
   
   if(inputValue===''+code+'' && inputValue.length>0){
      registerUser(req,email,username,password);

    let token=jwt.sign({email:email,password:password},secret_key);
    
    res.cookie('accesToken',token,{
      httpOnly: true,
      secure: false,
      expiresIn: 432000000 // 5 days
    });

    res.status(200).json('authorized succesfully');
  }else if(inputValue!==code && inputValue.length>0){
   res.send('authorized unsuccesfully');
  }

})

  app.get('/isAuth',(req,res)=>{
   console.log(req.cookies);
   
   if(req.cookies.accesToken){
   jwt.verify(req.cookies.accesToken,secret_key,(err,decoded)=>{
    if(err){
      res.send('false');
    }else{
      res.send('true');
      console.log(decoded);
    }
   })
  }else if(req.cookies.accesToken===undefined){
    res.send('false')
    console.log('token was undefined');
  }
  
  })

app.post('/send_email',(req,res)=>{


 pool.query('select * from users where email=?',[req.body.email],(err,result)=>{
    if(err){
        console.log(err)
    }else{
      if(result.length===0){
        pool.query('select * from users where username=?',[req.body.username],(err,result)=>{
            if(err){
                console.log(err)
            }else{
             if(result.length===0){
            res.send('pass the test');
            sendEmail(req.body.email);
            password=req.body.password;
            email=req.body.email;
            username=req.body.username;
             }else{
                res.send('Username has already been used');
             }
            }
        })
      }else{
        res.send('Email has already been used');
      }
    }
 })
})

app.get('/getcredentials',(req,res)=>{
  console.log(email,password,username);
  res.json({email: email, password: password, username: username});
})

app.post('/authenticate',(req,res)=>{

  console.log(req.body);
 let email=req.body.email;
 let password=req.body.password;

  pool.query('select * from users where email=?',[email],(err,result)=>{
    if(err){
        console.log(err)
    }else{
      if(result.length===0){
        res.send('No accounts found')
      }else{
        
        bcrypt
        .compare(password,result[0].passcode)
        .then(response => {
          if(response===false){
          res.send('wrong password');
          }else{
            res.send('authenticated');
          sendEmail(email);
          }
        })
        .catch(err => console.error(err.message)) 
      }
    }
  })
})


app.get('/logout',isAuth,(req,res)=>{
  res.clearCookie('accesToken');
  res.send('loggedOut succefully');
})

app.listen(port,()=>{
    console.log('server started on port '+ port);
})