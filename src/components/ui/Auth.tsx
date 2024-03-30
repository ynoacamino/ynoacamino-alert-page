import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';
import { Session, getServerSession } from 'next-auth';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AuthOptions } from './AuthOptions';
import { Login } from './Login';

export async function Auth() {
  const session = await getServerSession(authConfig) as Session & { user: { service: any } };

  if (!session) {
    return (
      <Login />
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex gap-3 items-center hover:cursor-pointer">
          <Image
            alt="name"
            src="https://avatars.githubusercontent.com/u/97652778?v=4"
            width={40}
            height={40}
            className="rounded-full"
          />
          <ChevronDown className="w-5 h-5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex flex-col gap-3 items-center pt-5">
          <Image
            alt="name"
            src="https://avatars.githubusercontent.com/u/97652778?v=4"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="text-lg font-medium text-center">
            Yenaro Joel Noa Camino
          </span>
          <AuthOptions session={session} />
        </div>

      </PopoverContent>
    </Popover>
  );
}
