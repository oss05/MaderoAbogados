// //Dependence
// const request = require('request');
// const jsdom = require ( 'jsdom' ) ;   
// const { JSDOM } =  jsdom ;    
// global.document = new JSDOM('index.html').window.document;


// //Etiquetas
// let name = document.getElementById('name');
// let mail = document.getElementById('email');
// let phone = document.getElementById('phone');
// let message = document.getElementById('message');
// //Valores
// let nameV = name.value
// let mailV = mail.value
// let phoneV = phone.value
// let messageV = message.value


const testMail = () => {

    const name = document.getElementById('name');
    const mail = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    console.log(name.value, mail.value, phone.value, message.value);
    var request = new XMLHttpRequest();
    request.open('POST', 'https://api.sendinblue.com/v3/smtp/email', true);
    // request.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    // request.setRequestHeader("Content-Type", "text/plain; charset=UTF-8")
    // request.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.setRequestHeader("api-key", "");
    const jsonDataObj = {
        "sender": {
            "name": name.value,
            "email": mail.value
            // "phone": phone.value
        },
        "to": [{
            "cc": "",
            "subject": ""
        }],
        "htmlContent": message.value,
        "subject": "Contacto Web",
        "replyTo": { "email": mail.value },
        "tags": [""]
    }
    request.send(jsonDataObj);
 };request (url, body, {"Content-type": "application / json"})

 //testMail()
// const sendEmail = () => {
   // const jsonDataObj = {
//     "sender": {
//         "name": nameV,
//         "email": mailV,
//         "phone": phoneV
//     },
//     "to": [{
//         "email": "ricardokelebra@gmail.com",
//         "name": "Vanesa"
//     }],
//     "htmlContent": messageV,
//     "subject": "Contacto Web",
//     "replyTo": { "email": mailV },
//     "tags": [""]
// }
// request.post({
//     url: 'https://api.sendinblue.com/v3/smtp/email',
//     headers: {
//         'api-key': ''
//     },
//     body: jsonDataObj,
//     json: true
// }, (error, response, body) => {
//     console.log(body);
//     console.log(error);
//     console.log(response);
// });
// }

// sendEmail()

