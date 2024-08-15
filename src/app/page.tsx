'use client';

import { WhatsappChat } from '@/components/icons/WhatsappChat';
import { Presentation } from '@/components/pages/index/Presentation';
import { Section } from '@/components/pages/index/Section';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      <Presentation />
      <Section
        title="Mantente informado por Discord"
        text="Unete a nuestro servidor de discord para mantenerte informado sobre el proceso de tu carrera profesional, te etiquetaremos cuando el talon de pago este disponible"
      >
        <Link href="https://discord.gg/JdRDaEwvNY">
          <span className="sr-only">
            Link del servidor de discord
          </span>
          <Image
            src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1723691201/jdbaowctpbpkbk6sp7ep.jpg"
            alt="Discord"
            width={200}
            height={200}
            className="w-full max-w-lg aspect-square rounded-lg"
          />
        </Link>
      </Section>
      <Section
        title="Recibe una alerta"
        text="Te enviaremos un correo electronico y un mensaje de whatsapp a tu numero personal, para avisarte cuando el talon de pago de tu carrera profesional este disponible"
      >
        <WhatsappChat className="w-full max-w-lg" />
      </Section>
      <Section
        title="Registrate"
        text="Inicia session con tu cuenta de google donde quieres que llegue el correo electronico, tambien puedes registrar un numero de whatsapp"
      >
        <Button size="lg" onClick={() => signIn('google')}>
          Registrate
        </Button>
      </Section>
    </main>
  );
}
