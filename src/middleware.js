import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
  const token = await getToken({ req })   // আগে token নিয়ে আসতে হবে
  console.log(token)

  const isUser = token?.role == "user"
  const PrivateRoute = req.nextUrl.pathname.startsWith("/user-dashboard") // এখানে একটাই slash

  if (PrivateRoute && !isUser) {
    // যদি user না হয়, তবে login page এ redirect করে দিব
    return NextResponse.redirect(new URL("/api/auth/signin", req.url))
  }

  return NextResponse.next()
}
