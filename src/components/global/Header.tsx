import Link from 'next/link';
import { Auth } from '@/components/ui/Auth';
import { NavBar } from './NavBar';
import NavBarMobile from './NavBarMobile';

export function Header() {
  return (
    <header className="flex items-center  h-16 px-4 bg-background text-primary w-full sticky top-0 z-10">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            @ynoacamino
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-10">
          <NavBar />
          <NavBarMobile />
          <Auth />
        </div>
      </div>
    </header>
  );
}
