function sendEmail(){
    var tempParams={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,

    };
emailjs.send('service_c1agj4o','template_bn51o6k',tempParams).then(function(res){
    console.log("success,res.status")
    alert('MESSAGE SENT!');
})
}