'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { LinkComponent } from '../ui/LinkComponent';

export function NavBar() {
  const { setTheme, theme } = useTheme();
  const [realTeam, setRealTheme] = useState('');

  const links = [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
  ];

  useEffect(() => {
    setRealTheme(theme || 'light');
  }, [theme]);

  return (
    <nav className="hidden md:flex items-center text-secondary gap-6">
      {
        links.map(({ href, name }) => (
          <LinkComponent key={href} href={href}>
            {name}
          </LinkComponent>
        ))
      }
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
        <span className="flex-1 w-full sr-only">
          {
            realTeam === 'dark'
              ? 'Tema Claro'
              : 'Tema Oscuro'
          }
        </span>
      </Button>
    </nav>
  );
}
