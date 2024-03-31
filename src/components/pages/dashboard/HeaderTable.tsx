import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function HeaderTable() {
  return (
    <Table>
      <TableHeader className="sticky top-0">
        <TableRow>
          <TableHead className="w-[20px]">
            <div className="w-2 h-7 bg-transparent" />
          </TableHead>
          <TableHead className="w-36 md:w-56">Fecha</TableHead>
          <TableHead className="md:w-48">Estado</TableHead>
          <TableHead className="hidden md:flex items-center">Mensaje</TableHead>
          <TableHead className="text-right text-2xl mr-6">🔎</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
}
