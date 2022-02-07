import Router from 'next/router';
import React, { useState } from 'react';

export default function Page () {
	const [email, setEmail] = useState();

async function loginUser(credentials) {
  return fetch('https://workos-sso-server.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}


 const handleSubmit = async e => {
    e.preventDefault();
    const resp = await loginUser({
      email    });
    console.log(resp);
    Router.push(resp.redirect_url);
  }

    return( 
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}