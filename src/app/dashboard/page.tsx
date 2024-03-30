import { Query, QueryStatus } from '@/types/query';
import { format } from '@formkit/tempo';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export const revalidate = 0;

const getData = async () => {
  const response = await fetch('https://noa-registration-alert-production.up.railway.app/query');
  const data = await response.json();

  return data as Query[];
};

export default async function DashboardPage() {
  const data = (await getData()).map((d) => ({ ...d, createdAt: new Date(d.createdAt) }));
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Table>
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="w-[20px]">
              <div className="w-2 h-7 bg-transparent" />
            </TableHead>
            <TableHead className="w-52">Fecha</TableHead>
            <TableHead className="w-64">Estado</TableHead>
            <TableHead>Mensaje</TableHead>
            <TableHead className="text-right text-2xl mr-6">🔎</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <ScrollArea>
        <Table>
          <TableBody>
            {data.map(({ createdAt, id, status }) => {
              const date = format({
                format: 'dddd, HH:mm',
                date: createdAt,
                locale: 'es',
                tz: 'America/Lima',
              });
              const dateString = date[0].toUpperCase() + date.slice(1);
              const statusStrings = {
                [QueryStatus.PENDING]: 'No disponible',
                [QueryStatus.TIMEOUT]: 'Fallido',
                [QueryStatus.AVARILABLE]: 'Disponible',
              };

              const mesageString = {
                [QueryStatus.PENDING]: 'Aun no esta disponible el talon de pago',
                [QueryStatus.TIMEOUT]: 'La pagina tarde mucho en responder',
                [QueryStatus.AVARILABLE]: 'Ya esta disponible el talon de pago',
              };

              let statusEmoji;
              if (status === QueryStatus.PENDING) {
                statusEmoji = '⌛';
              } else if (status === QueryStatus.TIMEOUT) {
                statusEmoji = '❌';
              } else {
                statusEmoji = '✅';
              }
              return (
                <TableRow key={id}>
                  <TableCell className="w-[20px]">
                    <div className={cn('w-2 h-7', {
                      'bg-yellow-300': status === QueryStatus.PENDING,
                      'bg-red-500': status === QueryStatus.TIMEOUT,
                      'bg-green-500': status === QueryStatus.AVARILABLE,
                    })}
                    />
                  </TableCell>
                  <TableCell className="w-52">
                    {dateString}
                  </TableCell>
                  <TableCell className="w-64">{statusStrings[status]}</TableCell>
                  <TableCell>{mesageString[status]}</TableCell>
                  <TableCell className="text-right text-2xl">
                    {statusEmoji}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total de peticiones pendientes</TableCell>
            <TableCell className="text-right flex items-center gap-2 justify-end">
              {data.filter((d) => d.status === QueryStatus.PENDING).length}
              <span className=" text-2xl">
                ⌛
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Total de peticiones fallidas</TableCell>
            <TableCell className="text-right flex items-center gap-2 justify-end">
              {data.filter((d) => d.status === QueryStatus.TIMEOUT).length}
              <span className=" text-2xl">
                ❌
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Total de peticiones</TableCell>
            <TableCell className="text-right flex items-center gap-2 justify-end">
              {data.length}
              <span className=" text-2xl">
                📋
              </span>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
