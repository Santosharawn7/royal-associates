import emailjs from "emailjs-com";
 
 
export const sendEmailConfirmation = async (
    email, firstName, subject
) => {
 
    const templateParams = {
        to_name: firstName,
        subject: subject,
        to_email: email,
        message: `Thank you ${firstName} for reaching out to us. We will get back to you as soon as possible.`
    }
 
    return emailjs.send(
        "service_u1hr2f8",
        "template_u1o22lj",
        templateParams,
        "MQR592E_OOYAeYUlc"
    ).then((response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        return {
            status: error.status,
            data: error.data
        }
    });
}
