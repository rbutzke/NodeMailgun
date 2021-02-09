const mailgun = require("mailgun-js");

const DOMAIN = 'sandboxf2c9ea61ab3d4c51a3a580f4861fbaba.mailgun.org';
const api_key = 'ba3b577a42e8759f0c61750701567837-77751bfc-806f61c8'
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
    from: `Projeto Mailgun <mailgun@${DOMAIN}>`,
	to: 'tcchorussis@gmail.com',
	subject: 'Teste de Envio',
	text: 'Este é um teste de envio da Mailgun'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});