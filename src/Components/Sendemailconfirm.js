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
        "service_v49fpsk",
        "template_h7qancd",
        templateParams,
        "33WreeumBb14zvzw-"
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
