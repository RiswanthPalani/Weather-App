import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express();
const port=3000;
const Auth_key='8ed9330b517a4b1bb1c112616241502';
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
      res.render('index.ejs');
});
app.post("/city", async(req,res)=>{
    const city = req.body.city;
   

    const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${Auth_key}&q=${city}&aqi=no`);
    res.render("city.ejs", { weather: result.data });
    console.log(result.data);
    
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});


