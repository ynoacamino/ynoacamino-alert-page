'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { Session } from 'next-auth';
import { BACKEND_URL } from '@/config/global';
import { Button } from './button';
import { Switch } from './switch';

export function AuthOptions({
  session,
}: {
  session: Session & { user: { service: any } };
}) {
  const [activeEmail, setActiveEmail] = useState<boolean>(
    Boolean(session.user.service.active),
  );
  const [disabledEmailSwitch, setDisabledEmailSwitch] = useState<boolean>(false);

  const handleActive = async () => {
    setDisabledEmailSwitch(true);

    const data = await fetch(`${BACKEND_URL}/mail/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: !activeEmail,
        address: session.user.service.address,
      }),
    }).then((res) => res.json());

    setDisabledEmailSwitch(false);
    if (data.error) {
      // eslint-disable-next-line no-console
      console.error(data.error);
      return;
    }

    setActiveEmail(data.active);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-1 text-secondary">
      <Button
        variant="ghost"
        className="text-base w-full flex justify-between"
        onClick={handleActive}
        disabled={disabledEmailSwitch}
      >
        Recibir Email
        <Switch disabled={disabledEmailSwitch} checked={activeEmail} />
      </Button>
      <Button variant="ghost" className="text-base w-full flex justify-between">
        Recibir Whatsapp
        <Switch checked={false} disabled />
      </Button>
      <Button
        variant="ghost"
        className="text-base w-full flex"
        onClick={() => signOut()}
      >
        <LogOut />
        <span className="flex-1 w-full">Cerrar Sesion</span>
      </Button>
    </div>
  );
}
