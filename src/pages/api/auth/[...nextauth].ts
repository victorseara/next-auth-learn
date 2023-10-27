import NextAuth, { NextAuthOptions } from "next-auth";
import Okta from "next-auth/providers/okta";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID as string,
      clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET as string,
      issuer: process.env.OKTA_OAUTH2_ISSUER as string,
      checks: ["pkce", "state"],
      client: {
        redirect_uris: [process.env.OKTA_OAUTH2_REDIRECT_URI as string],
        token_endpoint_auth_method: "none",
      },
    }),
  ],
  secret: process.env.SECRET as string,
};

export default NextAuth(authOptions);
