import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOption = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                const res = await axios.get(`http://localhost:5000/user?email=${email}`);
                const ispasswordOk = password == res.data.password
                const user = res.data;

                console.log("From backend:", user);

                if (ispasswordOk) {
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                    };
                }
                return null;
            }


        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.name = token.name;
                session.user.email = token.email;
            }
            return session;
        }
    }

}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST }