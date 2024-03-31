'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { Query } from '@/types/query';
import { Skeleton } from '@/components/ui/skeleton';
import { HeaderTable } from './HeaderTable';
import { FooterTable } from './FooterTable';

export function SkeletonTable() {
  const [, setQuerys] = useState<Query[]>([]);
  const [skip, setSkip] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <HeaderTable />
      <ScrollArea setQuerys={setQuerys} skip={skip} setSkip={setSkip}>
        <Table>
          <TableBody>
            {Array.from({ length: 30 }).map(() => (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="w-[20px]">
                  <Skeleton className="w-2 h-7" />
                </TableCell>
                <TableCell className="w-36 md:w-56">
                  <Skeleton className="w-24 h-7" />
                </TableCell>
                <TableCell className="md:w-48">
                  <Skeleton className="w-28 h-7" />
                </TableCell>
                <TableCell className="hidden md:flex items-center">
                  <Skeleton className="w-80 h-7" />
                </TableCell>
                <TableCell className="text-right text-2xl">
                  <div className="w-full flex items-center justify-end">
                    <Skeleton className="w-10 h-7" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
      <FooterTable
        total={<Skeleton className="w-7 h-7" />}
        totalPending={<Skeleton className="w-7 h-7" />}
        totalTimeOut={<Skeleton className="w-7 h-7" />}
      />
    </div>
  );
}
