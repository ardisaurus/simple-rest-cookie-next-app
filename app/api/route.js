import { NextResponse } from "next/server";
import { serialize } from "cookie";

// To handle a GET request to /api
export async function GET(request) {
  // Set a cookie named "myCookie" with the value "hello"
  const cookie = serialize("myCookie", "hello", {
    httpOnly: true, // Make the cookie accessible only through HTTP
    sameSite: "None",
    secure: true, // Set the cookie to secure in production
    maxAge: 60 * 60 * 24, // Set the cookie expiration time to 1 day
    path: "/", // Set the cookie path to the root path
    domain: "netlify.app",
  });

  // Do whatever you want
  return NextResponse.json(
    { message: "Hello World" },
    {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    }
  );
}
