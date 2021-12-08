const express =require("express");
const bodyParser =require("body-parser");

const https =require("https");
const app =express();

    app.use(bodyParser.urlencoded({extented:true}))


    app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res)
{
    const query=req.body.cityName;
    console.log("post request received");
     const unit="metric";
     const apikey ="33142a827111b75472989bcb94320251";
     const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ unit +"&appid="+ apikey;


    https.get(url, function(response){
        console.log(response.statusCode );

        response.on("data",function(data){

            const weatherdata= JSON.parse(data)

                console.log(weatherdata);
                const Temp = weatherdata.main.temp;
                const weatherdescription=weatherdata.weather[0].description;
                const icon =weatherdata.weather[0].icon;
                console.log(Temp);
                console.log(weatherdescription);
                
                const cloudimage ="http://openweathermap.org/img/wn/"+ icon +"@2x.png"
                res.write("<p>weather description for today" +" " +weatherdescription +"<p>");
                res.write("<h1>temperature in"+" " + query +" today" +" " + Temp +" degree celcius</h1>");
                res.write("<img src="+ cloudimage + ">");
                res.send();

        })
    })
})



app.listen(3000,function(){
    console.log("server has been sarted running on port 3000");
})

/*JSON.stringity
let take const object={
    name: "swati",
    favourite food :"chiese",}
    console.log(JSON.stringify(object));
*/
/*we can only use one res.send()
but we can use multiple res.write()*/


