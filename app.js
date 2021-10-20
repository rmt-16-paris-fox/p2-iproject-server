const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const authentication = require('./middleware/authentication')
const authorization = require('./middleware/authorization')
const Controller = require("./controllers/controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', Controller.register)
  
app.post('/login', Controller.login)

app.get('/login-facebook', (req, res) => {
  res.send(`
    <html>
      <body>
        <a href="https://www.facebook.com/v6.0/dialog/oauth?client_id=425535965617579&r
edirect_uri=${encodeURIComponent('http://localhost:3000/oauth-redirect')}">
          Log In With Facebook
        </a>
      </body>
    </html>
  `);
});

// Route 2: Exchange auth code for access token
app.get('/oauth-redirect', Controller.getTokenFacebook );

app.get('/me', Controller.tokenFromFacebookLogin);
  
app.use(authentication)
  
app.get('/class', Controller.getClass)
  
app.post('/myclass/:classId', Controller.addClass)
  
app.get('/myclass', Controller.getMyClass)
  
app.patch('/myclass/:id', authorization, Controller.updateStatus)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});