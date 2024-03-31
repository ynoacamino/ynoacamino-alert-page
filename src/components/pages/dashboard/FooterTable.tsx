import {
  Table,
  TableCell,
  TableFooter,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

type FooterTableProps = {
  total: number | React.ReactNode;
  totalPending: number | React.ReactNode;
  totalTimeOut: number | React.ReactNode;
};

export function FooterTable(
  { total, totalPending, totalTimeOut }
  :
  FooterTableProps,
) {
  return (
    <Table>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total de peticiones pendientes</TableCell>
          <TableCell className="text-right flex items-center gap-2 justify-end">
            {totalPending}
            <span className=" text-2xl">
              ⌛
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4}>Total de peticiones fallidas</TableCell>
          <TableCell className="text-right flex items-center gap-2 justify-end">
            {totalTimeOut}
            <span className=" text-2xl">
              ❌
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4}>Total de peticiones</TableCell>
          <TableCell className="text-right flex items-center gap-2 justify-end">
            {total}
            <span className=" text-2xl">
              📋
            </span>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
