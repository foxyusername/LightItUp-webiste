const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const cors=require('cors');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const sessionVal=require('express-session');

const isAuth=require('./middleware');
const pool=require('./database');
const port=3000;
const secret_key='secret';


app.use(sessionVal({
    secret: secret_key,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 }, // Cookie settings
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());




let max=9999;
let min=1000;
let code;
let session;

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
    transporter.sendMail(email).then((res)=>console.log(res)).catch((err)=>console.log(err));
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

      session=req.session;
      session.isAuthenticated=true;
      
      session.email=email;
      session.username=username;
      session.password=password;    //setting session true so user dont have to 
    
      res.status(200).json('authorized succesfully');
  }else if(inputValue!==code && inputValue.length>0){
   res.send('authorized unsuccesfully');
  }
  
  console.log(code);
  
  })

  app.get('/isAuth',(req,res)=>{

    if(session && session.isAuthenticated && session.isAuthenticated===true){
      res.send('true');
    }else{
      res.send('false');
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
          session.email=email;
          session.password=password;
          }
        })
        .catch(err => console.error(err.message)) 


      }
    }
  })
})

app.post('/logOut',(req,res)=>{
  
  session.isAuthenticated=false;
  session.email='';
  session.password='';
  session.username='';
  console.log(session);
  res.send('logOut');
})


app.listen(port,()=>{
    console.log('server started on port '+ port);
})