'use client';

import { useEffect, useRef } from 'react';

export function ScrollArea({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  // lograr que el scroll comiense desde abajo
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div className="h-[70vh] w-full rounded-md overflow-auto" ref={divRef}>
      {children}
    </div>
  );
}
