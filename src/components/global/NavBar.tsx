import { LinkComponent } from '../ui/LinkComponent';

export function NavBar() {
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

  return (
    <nav className="hidden md:flex items-center text-secondary gap-10">
      {
        links.map(({ href, name }) => (
          <LinkComponent key={href} href={href}>
            {name}
          </LinkComponent>
        ))
      }
    </nav>
  );
}
