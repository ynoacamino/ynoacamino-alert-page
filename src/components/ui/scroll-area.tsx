/* eslint-disable no-console */

'use client';

import { Query } from '@/types/query';
import {
  Dispatch, SetStateAction, useEffect, useRef,
} from 'react';

import { useDebouncedCallback } from 'use-debounce';

export function ScrollArea(
  {
    children, setQuerys, skip, setSkip,
  }
  :
  {
    children: React.ReactNode,
    skip: number
    setQuerys: Dispatch<SetStateAction<Query[]>>,
    setSkip: Dispatch<SetStateAction<number>>
  },
) {
  const divRef = useRef<HTMLDivElement>(null);

  const getQuerys = async () => {
    if (divRef.current && divRef.current.scrollTop < 50) {
      try {
        const data = await fetch(`https://noa-registration-alert-production.up.railway.app/query/?skip=${skip + 1}`)
          .then((res) => res.json()) as {
          querys: Query[], info: { total: number, totalPending: number, totalTimeOut: number }
        };
        const querys = data.querys.reverse();

        setQuerys((prev) => [...querys, ...prev]);
        setSkip((prev) => prev + 1);

        setTimeout(() => {
          if (divRef.current) divRef.current.scrollTop = 1480;
        }, 20);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getQueryDebounced = useDebouncedCallback(getQuerys, 1000);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    const div = divRef.current;
    div?.addEventListener('scroll', getQueryDebounced);
    return () => div?.removeEventListener('scroll', getQueryDebounced);
  }, [getQueryDebounced, divRef]);

  return (
    <div className="h-[70vh] w-full rounded-md overflow-auto" ref={divRef}>
      {children}
    </div>
  );
}
