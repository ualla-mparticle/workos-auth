import {useRouter} from "next/router";
import Router from "next/router";
import myInitObject from '../../myInitObject';

async function authenticateUser(credentials) {
 return fetch('https://workos-sso-server.herokuapp.com/callback', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Page () {
	
	const { query } = useRouter();

  if (query.code) {
     authenticateUser(query).then(resp => {
        console.log(resp);
        if(!resp.error){
          console.log('login succesfull');
          Router.push('/workos-auth/dashboard')
        } else {
        	Router.push('/workos-auth/login')
        }
    })
    .catch(err => {
        console.log(err);
    });
  }
  return <div>Waiting to authenticate in</div>
}