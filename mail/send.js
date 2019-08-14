//Dependence
const request = require('request');
const jsdom = require ( 'jsdom' ) ;   
const { JSDOM } =  jsdom ;    
global.document = new JSDOM('index.html').window.document;


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
            'api-key': ''
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