'use client';

import { WhatsappChat } from '@/components/icons/WhatsappChat';
import { Presentation } from '@/components/pages/index/Presentation';
import { Section } from '@/components/pages/index/Section';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      <Presentation />
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
