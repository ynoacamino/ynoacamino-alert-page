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

      const mail = await fetch(`https://noa-registration-alert-production.up.railway.app/mail/?address=${userSession.user?.email}`).then((res) => res.json());

      if (mail.address) {
        userSession.user.service = mail;
        return userSession;
      }

      const newMail = await fetch('https://noa-registration-alert-production.up.railway.app/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: userSession.user?.email,
        }),
      });

      userSession.user.service = newMail;
      return userSession;
    },
  },
};
