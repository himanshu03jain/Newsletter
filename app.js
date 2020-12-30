const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");

});
app.post("/",function(req,res){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    var data = {
        members: [
            {
                email_address: email,
                status:"subscribed",
                merge_fields: {
                    FNAME:firstname,
                    LNAME:lastname
                }
            }
        ]
    };
    var jsondata = JSON.stringify(data);
    var option = {
        url:"https://us2.api.mailchimp.com/3.0/lists/6f7021edb7",
        method:"POST",
        headers: {
            "Authorization":"himanshu1 e29a37208fc6749cebdc794848960e51-us2"
        },
        body: jsondata
    }
    request(option,function(error,response,body){
        if(error){
           res.sendFile(__dirname+"/failure.html");
        }
        else{
            if(response.statusCode===200){
                res.sendFile(__dirname+"/success.html");
            }
            else{
               res.sendFile(__dirname+"/failure.html");
            }
            //console.log(response.statusCode);
        }

    });
    console.log(firstname,lastname,email);

})
app.post("/failure",function(req,res){
    res.redirect("/");
});
app.listen(process.env.PORT || 3000,function(){
    console.log("server is running at 3000...");
});

//API KEY - e29a37208fc6749cebdc794848960e51-us2
//LIST - 6f7021edb7
