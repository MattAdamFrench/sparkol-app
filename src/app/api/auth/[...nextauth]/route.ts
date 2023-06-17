import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "text" }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:3333/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });

                const user = await res.json();

                if (res.ok && user) {
                    return {
                        id: user.user.id,
                        name: user.user.name,
                    };
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: false,
});

export { handler as GET, handler as POST };
