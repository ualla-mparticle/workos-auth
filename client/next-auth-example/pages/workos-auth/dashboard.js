import Router from "next/router";
import { useEffect } from "react";
import myInitObject from '../../myInitObject';

export default function Page () {
  
  

  async function logout(credentials) {
  return fetch('https://workos-sso-server.herokuapp.com/logout', {
    method: 'POST'
  })
  .then(data => data.json())
}
  
	const handleSubmit = async e => {
    e.preventDefault();
    await logout();
    Router.push('/workos-auth/login')
  } 
	return (<div><h2>Dashboard</h2>
		<button onClick={handleSubmit}>logout</button></div>)
}