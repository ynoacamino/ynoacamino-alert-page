'use client';

import { BackgroundIndex } from '@/components/icons/BackgroundIndex';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export function Presentation() {
  return (
    <div className="flex w-full justify-center lg:justify-between max-w-[1600px] min-h-96 px-6 lg:px-10 m-10 mb-32">
      <div className="w-full max-w-xl flex flex-col gap-8 items-start justify-center">
        <h1 className="font-bold text-7xl">
          Alerta UNSA de Talon de Pago
        </h1>
        <p className="text-xl text-secondary ">
          Cuando esten listo el talon de pago se enviara un correo electronico y un mensaje
          de whatsapp :)
        </p>
        <Button size="lg" onClick={() => signIn('google')}>
          Registrate
        </Button>
      </div>
      <BackgroundIndex className="hidden lg:block" />
    </div>
  );
}
