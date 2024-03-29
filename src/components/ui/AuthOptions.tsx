'use client';

import { Moon, Sun, LogOut } from 'lucide-react';
import { useTheme } from 'next-themes';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Button } from './button';

export function AuthOptions() {
  const { setTheme, theme } = useTheme();
  const [realTeam, setRealTheme] = useState('');

  useEffect(() => {
    setRealTheme(theme || 'light');
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-1 text-secondary">
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
