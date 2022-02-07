import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

async function getTokenStytch() {
 return fetch('https://workos-sso-server.herokuapp.com/token', {
   method: 'GET'
 })
   .then(data => data.json())
}

/** @param {import("next/server").NextRequest} req */
export async function middleware(req) {
  if (req.nextUrl.pathname === "/workos-auth/dashboard") {
    // const session = await getToken({
    //   req,
    //   secret: process.env.SECRET,
    //   secureCookie:
    //     process.env.NEXTAUTH_URL?.startsWith("https://") ??
    //     !!process.env.VERCEL_URL,
    // })
    const token = await getTokenStytch(); 
    console.log("token")
    console.log(token) 
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!token.token) return NextResponse.redirect("/workos-auth/login")
    // If user is authenticated, continue.
  }
}
