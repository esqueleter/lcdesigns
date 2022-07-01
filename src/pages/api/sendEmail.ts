export const sendEmail = async (formData: {
    lcName?: string;
    lcEmail?: string;
    lcMessage?: string;
  }) =>{
    let options = {
        method: "POST",
        body:JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id:  process.env.EMAILJS_PUBLIC_KEY,
            user_id: process.env.EMAILJS_TEMPLATE_ID,
            template_params: {
                'lcName': formData.lcName,
                'lcEmail': formData.lcEmail,
                'lcMessage': formData.lcMessage
            }
        }),
        headers: {
            "content-type": "application/json"
        }
        
    };
     
    return await fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then(res=>{console.log(res)})
    .catch(err=> {
        console.log(err);
    })
}