const express = require('express');
const cors = require('cors')
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const WorkOS = require('@workos-inc/node').default;

const client = new WorkOS("sk_test_a2V5XzAxRlRaNTk2WlA5WTRSWjVON0pUTUVWTVoxLFY5N0dKenZ4ZTBxZzRtdzJrYUdpNmN3TWU");

const clientID = "client_01FTZ596ZXBQ8XM5PAF4N43845";

const connection = "508745962448-jbp076cqlkguac7cr6ahdalsprqtstr3.apps.googleusercontent.com";

const redirectURI = "https://workos-sso-example.herokuapp.com/workos-auth/callback"

app.get("/ping", (req, res, next) => {
 res.send({ success: true});
});

var usertoken = "";

app.use('/login', (req, res) => {
	console.dir(req.body);
  const params = {
    email: req.body.email
  };

  try {
    const url = client.sso.getAuthorizationURL({
      provider: 'GoogleOAuth',
      clientID: clientID,
      redirectURI: redirectURI,
      state: req.body.email,
    });
  
    // Redirect the user to the url generated above.
    console.log(url);
    res.send({redirect_url: url});
    
  } catch (error) {
    console.log(error)
    res.send(error);
  }
});

app.use('/callback',async (req, res) => {
	console.dir(req.body);
    try {
    // Capture and save the `code` passed as a querystring in the Redirect URI.
  const code  = req.body.code;
  console.dir(code);

  // Make a call to getProfileAndToken and pass in the code (stored above) and
  // the clientID. This will return a JSON user profile, stored here in `profile`.
  
  const profile = await client.sso.getProfileAndToken({
    code,
    clientID,
  });
  const json_profile = JSON.stringify(profile)

  // session.first_name = profile.profile.first_name;
  // session.profile = json_profile;
  // session.isloggedin = true;
  usertoken = profile.profile.first_name;
  res.send(json_profile);
  } catch (error) {
  	console.log(error)
    res.send({error: error});
  }

});

app.use('/token', (req, res) => {
  res.send({
    token: usertoken
  });
});

app.use('/logout', (req, res) => {
  usertoken = null;
  res.send({
    token: null
  });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
