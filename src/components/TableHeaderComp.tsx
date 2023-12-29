import { TableCell, TableHead, TableRow } from '@mui/material';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 140 },
  { id: 'lat', label: 'Latitud', minWidth: 80 },
  { id: 'long', label: 'Longitud', minWidth: 80 },
  {
    id: 'buttons',
    label: 'Acciones',
    minWidth: 170,
  },
];

const TableHeaderComp = () => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={'center'}
            style={{
              minWidth: column.minWidth,
              backgroundColor: '#31343b',
              color: '#fff',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderComp;
