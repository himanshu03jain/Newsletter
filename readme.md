# [Newsletter](https://mysterious-falls-06653.herokuapp.com/)

The basic project based on API using node.js and deploy it to [heroku](https://mysterious-falls-06653.herokuapp.com/)
>Making GET Requests with the Node HTTPS Module

> Parse JSON

> Using Express to Render a Website with Live API Data

> Using Body Parser to Parse POST Requests to the Server

> [The Mailchimp API](https://mailchimp.com/developer/) 

> Setting Up the Sign Up Page (signup.html)

> [Posting Data to Mailchimp's Servers via their API](https://mailchimp.com/developer/api/)

> Adding Success(success.html) and Failure Pages (failure.html) 

> [Deploying Server with Heroku](https://www.heroku.com/)

After deploying our project at heroku the link is generated my [project](https://mysterious-falls-06653.herokuapp.com/) link is 

### Go to given heroku [link](https://mysterious-falls-06653.herokuapp.com/) to view my work
> https://mysterious-falls-06653.herokuapp.com/

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install [express](https://www.npmjs.com/package/express), [body-parser](https://www.npmjs.com/package/body-parser), [request](https://www.npmjs.com/package/request).

```bash
npm install express 
```

## Usage 
```javascript
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

```
## Working
run the server using command in cmd where these files are created
> $ node app.js

server is running on port localhost:3000
```javascript
app.listen(process.env.PORT || 3000,function(){
    console.log("server is running at 3000...");
});
```
at localhost:3000 signup.html loads

On this page we enter our first name , last name and email and then signup


## data json and option json
```javascript
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

var option = {
        url:"https://us2.api.mailchimp.com/3.0/lists/6f7021edb7",
        method:"POST",
        headers: {
            "Authorization":"himanshu1 e29a37208fc6749cebdc794848960e51-us2"
        },
        body: jsondata
    }
```
> API key an Authorization key from mailchimp

[API keys mailchimp](https://mailchimp.com/help/about-api-keys)

> LIST it is SSH key of heroku

[Heroku CLI Authentication](https://devcenter.heroku.com/articles/authentication)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

