function sendEmail(){
    var tempParams={
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,

    };
emailjs.send('YOUR SERVICE ID','YOUR TEMPLATE ID',tempParams).then(function(res){
    console.log("success,res.status")
    alert('MESSAGE SENT!');
})
}
