const { response } = require('express');
const functions = require('firebase-functions');

exports.random = functions.https.onRequest((request, response) =>{
        const number = Math.round(Math.random()*100)
        response.send(number.toString())
})
