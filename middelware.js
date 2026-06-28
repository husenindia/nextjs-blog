import { NextResponse } from "next/server";

export function middleware(request) {
    // Evaluate request before sending it to its original destination
    // Purpose: inspect, validate, authenticate, modified, block request request
    console.log(request);
    return NextResponse.next();
    //return NextResponse.redirect();

}

export const config = {
    matcher: ['/blog'] // Now only blog page request pass through the middleware.
}
