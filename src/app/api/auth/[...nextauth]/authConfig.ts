import { BACKEND_URL } from '@/config/global';
import { AuthOptions, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      if (!session.user) return session;

      const userSession = session as Session & { user: { service: any } };

      const mail = await fetch(`${BACKEND_URL}/mail?address=${userSession.user?.email}`).then((res) => res.json());

      if (mail.address) {
        userSession.user.service = mail;
        return userSession;
      }

      const newMail = await fetch(`${BACKEND_URL}/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: userSession.user?.email,
        }),
      }).then((res) => res.json()) as {
        id: number;
        createdAt: Date;
        address: string;
        active: boolean;
      };

      userSession.user.service = newMail;
      return userSession;
    },
  },
};
