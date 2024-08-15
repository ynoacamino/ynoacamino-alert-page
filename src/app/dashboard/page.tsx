/* eslint-disable no-console */

'use client';

import { Query } from '@/types/query';

import { ScrollArea } from '@/components/ui/scroll-area';
import { HeaderTable } from '@/components/pages/dashboard/HeaderTable';
import { FooterTable } from '@/components/pages/dashboard/FooterTable';
import { useEffect, useState } from 'react';
import { BodyTable } from '@/components/pages/dashboard/BodyTable';
import { SkeletonTable } from '@/components/pages/dashboard/SkeletonTable';
import { BACKEND_URL } from '@/config/global';

export default function DashboardPage() {
  const [querys, setQuerys] = useState<Query[]>([]);
  const [info, setInfo] = useState({ total: 0, totalPending: 0, totalTimeOut: 0 });
  const [loading, setLoading] = useState(true);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetch(`${BACKEND_URL}/query?skip=0`)
      .then((res) => res.json())
      .then((data) => {
        setQuerys(data.querys?.reverse());
        setInfo(data.info);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading || !querys.length) {
    return <SkeletonTable />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <HeaderTable />
      <ScrollArea setQuerys={setQuerys} skip={skip} setSkip={setSkip}>
        <BodyTable querys={querys} />
      </ScrollArea>
      <FooterTable
        total={info.total}
        totalPending={info.totalPending}
        totalTimeOut={info.totalTimeOut}
      />
    </div>
  );
}
