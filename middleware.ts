import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware() {
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized({ req, token }) {
                const { pathname } = req.nextUrl;

                // Always allow these paths without authentication
                if (
                    pathname.startsWith("/api/auth") ||
                    pathname === "/login" ||
                    pathname === "/register" ||
                    pathname === "/support" ||
                    pathname === "/" ||
                    // Allow all static assets
                    pathname.startsWith("/_next/") ||
                    pathname.startsWith("/public/") ||
                    pathname.startsWith("/images/") ||
                    pathname.startsWith("/logos/") ||
                    pathname.startsWith("/static/") ||
                    // Allow common file extensions
                    pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|css|js|woff|woff2|ttf|eot)$/i) ||
                    pathname === "/favicon.ico"
                ) {
                    return true;
                }

                // For all other paths, require authentication
                return !!token;
            },
        },
    }
);

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - Static asset files
         */
        "/((?!_next/static|_next/image|favicon.ico|public/).*)",
    ],
};
