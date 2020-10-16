const { response } = require('express');
const functions = require('firebase-functions');



/////only it pushing a http url to generate random number
exports.random = functions.https.onRequest((request, response) =>{
        const number = Math.round(Math.random()*100)
        response.send(number.toString())
})
exports.redirect = functions.https.onRequest((req, res)=>{
    res.redirect("https://github.com/sunanda35");
})
