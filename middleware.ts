import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin"))
        return token?.role === "admin";
      // !! turns the token to a boolean
      // if undefined it returns false, otherwise true
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/admin:path*", "/profile", "/posts/:path*"],
};
