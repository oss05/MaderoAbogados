//Dependence
const request = require('request');
// const SibApiV3Sdk = require('sib-api-v3-sdk');
//const defaultClient = SibApiV3Sdk.ApiClient.instance;

//Apikey
//const apiKey = defaultClient.authentications['api-key'];
//apiKey.apiKey = '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';


//Etiquetas
let name = document.getElementById('name');
let mail = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
//Valores
let nameV = name.value
let mailV = mail.value
let phoneV = phone.value
let messageV = message.value

// let nameV =   "Ricardo"
// let mailV =   "ricardokelebra@gmail.com"
// let phoneV =   "51324643854"
// let messageV =   "prueba"



//"vanesa@maderomambama.com"

const sendEmail = () => {
    const jsonDataObj = {
        "sender": {
            "name": nameV,
            "email": mailV,
            "phone": phoneV
        },
        "to": [{
            "email": "ricardokelebra@gmail.com",
            "name": "Vanesa"
        }],
        "htmlContent": messageV,
        "subject": "Contacto Web",
        "replyTo": { "email": mailV },
        "tags": [""]
    }
    request.post({
        url: 'https://api.sendinblue.com/v3/smtp/email',
        headers: {
            'api-key': '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'
        },
        body: jsonDataObj,
        json: true
    }, (error, response, body) => {
        console.log(body);
        console.log(error);
        console.log(response);
    });
}

sendEmail()