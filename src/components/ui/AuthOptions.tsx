'use client';

import { Moon, Sun, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { Button } from './button';
import { Switch } from './switch';

export function AuthOptions({ session }: { session: Session & { user: { service: any } } }) {
  const { setTheme, theme } = useTheme();
  const [realTeam, setRealTheme] = useState('');

  const [activeEmail, setActiveEmail] = useState<boolean>(Boolean(session.user.service.active));
  const [disabledEmail, setDisabledEmail] = useState<boolean>(false);

  const [activeWhatsapp, setActiveWhatsapp] = useState<boolean>(false);

  useEffect(() => {
    setRealTheme(theme || 'light');
  }, [theme]);

  const handleActive = async () => {
    setDisabledEmail(true);

    const data = await fetch('https://noa-registration-alert-production.up.railway.app/mail/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        active: !activeEmail,
        address: session.user.service.address,
      }),
    }).then((res) => res.json());

    setDisabledEmail(false);
    if (data.error) {
      // eslint-disable-next-line no-console
      console.error(data.error);
      return;
    }
    console.log(data);

    setActiveEmail(data.active);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-1 text-secondary">
      <Button
        variant="ghost"
        className="text-base w-full flex justify-between"
        onClick={handleActive}
        disabled={disabledEmail}
      >
        Recibir Email
        <Switch
          disabled={disabledEmail}
          checked={activeEmail}
        />
      </Button>
      <Button
        variant="ghost"
        className="text-base w-full flex justify-between"
        onClick={() => setActiveWhatsapp(!activeWhatsapp)}
      >
        Recibir Whatsapp
        <Switch checked={activeWhatsapp} />
      </Button>
      <Button
        variant="ghost"
        className="text-base w-full flex"
        onClick={() => setTheme(realTeam === 'dark' ? 'light' : 'dark')}
      >
        {
          realTeam === 'dark'
            ? <Sun />
            : <Moon />
        }
        <span className="flex-1 w-full">
          {
            realTeam === 'dark'
              ? 'Tema Claro'
              : 'Tema Oscuro'
          }
        </span>
      </Button>
      <Button variant="ghost" className="text-base w-full flex" onClick={() => signOut()}>
        <LogOut />
        <span className="flex-1 w-full">
          Cerrar Sesion
        </span>
      </Button>
    </div>
  );
}
