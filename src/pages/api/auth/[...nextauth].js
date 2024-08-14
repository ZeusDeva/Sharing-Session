import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { encode } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

const handler = NextAuth({
    providers: [
      Providers.Credentials({
        name: "Credentials",
        credentials: {
            username: {},
            password: {}
          },

          authorize: async (credentials, req) => {
                if(credentials?.username == "test"){
                    return{
                        username: credentials?.username,
                        password: credentials?.password
                    }
                }
                return null;
            }
        })
    ],

    callbacks: {
        async jwt(token, user){
            if(user){
                token.user = user
            }
            return token
        },

        async session(session, token){
            if(token.user){
                delete session.expires

                session.user = token.user
                const jwtString = await encode({
                    token,
                    secret
                });

                session.jwt = jwtString;
            }

            return session
        }
    },

    jwt: {
        secret,
        maxAge: 60
    },

    session: {
        maxAge: 60,
        strategy: "jwt"
    }
});

export default handler