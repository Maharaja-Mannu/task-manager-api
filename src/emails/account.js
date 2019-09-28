const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'contact@rentanyvehicle.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`

    })
}
const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'contact@rentanyvehicle.com',
        subject: 'Goodbye',
        text: `Thankyou ${name} for trying this app. Let me know how can I help you.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationMail
}