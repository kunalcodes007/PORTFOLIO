# PORTFOLIO WEBSITE
![Screenshot from 2022-09-17 12-20-18](https://user-images.githubusercontent.com/72959655/190845971-7e9545c6-0a32-4f71-9413-e1c9c9b8284c.png)


A SIMPLE PORTFOLIO WEBSITE MADE USING: HTML5 , CSS3 , JS , TAILWINDCSS, BOOTSTRAP(not used much :) ) 

AND EMAIL SERVICES: EMAILJS.

GETTING STARTED WITH EMAILJS:
JUMP TO :https://www.emailjs.com/

REGISTER AN ACCOUNT

CLICK ON SERVICES->ADD NEW SERVICE->UPDATE SERVICE.

#IMPORTANT

NOTE DOWN YOUR SERVICE_ID AND TEMPLATE_ID MENTIONED IN RESPECTIVE SECTIONS.


copy and paste the following code: 


    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript"> (function(){
      emailjs.init("XFb1LQZRzx7vofWj1");})();</script> <script src="/script.js"></script>function sendEmail(){
    var tempParams={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,

    };emailjs.send('YOUR SERVICE ID','YOUR TEMPLATE ID',tempParams).then(function(res){
    console.log("success,res.status")
    alert('MESSAGE SENT!');})








