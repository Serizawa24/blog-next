import { NextResponse,NextRequest } from "next/server"

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000']

export function middleware(request: NextRequest) {

    const origin = request.headers.get('origin')
    console.log(origin)

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }

   if(request.headers.get('TOKEN') !== process.env.MY_SECRET_TOKEN || request.cookies.get('TOKEN')?.value !== process.env.MY_SECRET_TOKEN ) return NextResponse.redirect(new URL('/', request.url))

    return NextResponse.next()
}

export const config = {
    matcher: ['/api/:path*','/dashboard/'],
}