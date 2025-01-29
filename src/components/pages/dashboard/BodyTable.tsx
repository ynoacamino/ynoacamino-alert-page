import { Query, QueryStatus } from '@/types/query';
import { format } from '@formkit/tempo';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/Spinner';

export function BodyTable({ querys }: { querys: Query[] }) {
  return (
    <>
      <div className="flex justify-center items-center w-full mx-auto">
        <Spinner className="w-16 h-16 my-4" />
      </div>
      <Table>
        <TableBody>
          {querys.map(({ createdAt, status }) => {
            const date = format({
              format: 'dddd, HH:mm',
              date: createdAt,
              locale: 'es',
              tz: 'America/Lima',
            });
            const longDate = format({
              format: 'dddd, D MMMM YYYY HH:mm',
              date: createdAt,
              locale: 'es',
              tz: 'America/Lima',
            });
            const dateString = date[0].toUpperCase() + date.slice(1);
            const statusStrings = {
              [QueryStatus.NOT_AVAILABLE]: 'No disponible',
              [QueryStatus.TIMEOUT]: 'Fallido',
              [QueryStatus.AVAILABLE]: 'Disponible',
            };

            const mesageString = {
              [QueryStatus.NOT_AVAILABLE]: 'Aún no está disponible el talón de pago',
              [QueryStatus.TIMEOUT]: 'La página tardó mucho en cargar.',
              [QueryStatus.AVAILABLE]: 'Ya está disponible el talón de pago',
            };

            let statusEmoji;
            if (status === QueryStatus.NOT_AVAILABLE) {
              statusEmoji = '⌛';
            } else if (status === QueryStatus.TIMEOUT) {
              statusEmoji = '❌';
            } else {
              statusEmoji = '✅';
            }
            return (
              <TableRow key={crypto.randomUUID()}>
                <TableCell className="w-[20px]">
                  <div className={cn('w-2 h-7', {
                    'bg-yellow-300': status === QueryStatus.NOT_AVAILABLE,
                    'bg-red-500': status === QueryStatus.TIMEOUT,
                    'bg-green-500': status === QueryStatus.AVAILABLE,
                  })}
                  />
                </TableCell>
                <TableCell className="w-36 md:w-56">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>{dateString}</TooltipTrigger>
                      <TooltipContent>
                        {longDate}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="md:w-48">{statusStrings[status]}</TableCell>
                <TableCell className="hidden md:flex items-center">{mesageString[status]}</TableCell>
                <TableCell className="text-right text-2xl">
                  {statusEmoji}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
