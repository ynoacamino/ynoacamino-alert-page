'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { signIn } from 'next-auth/react';
import GoogleIcon from '@/components/icons/GoogleIcon';

export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="hover:text-primary font-semibold text-secondary hover:cursor-pointer">
          Login
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inicia Sesion</DialogTitle>
          <DialogDescription>
            Inicia sesion para poder disfrutar de todas las funcionalidades de
            la aplicacion, recibir notificaciones y mucho mas.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button variant="outline" onClick={() => signIn('google')}>
            <GoogleIcon />
            <span className="ml-2">Google</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
