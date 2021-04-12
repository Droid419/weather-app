
const weatherRouter = require("express").Router();
const request= require('request');




//get weather from remote url-working
weatherRouter.get('/getWeatherghana',(req,res)=>{
  request("http://api.weatherstack.com/current?access_key=c35bd6fa1aaa625a8031329c6a694091&query=Accra",
  function (error,response,body){
      if(!error&&response.statusCode==200){
          let parsedBody=JSON.parse(body)
          let temperature=parsedBody['current']['temperature']
          let region=parsedBody['location']['region']
          res.send({region,temperature})
      }
  })
})
module.exports = weatherRouter
