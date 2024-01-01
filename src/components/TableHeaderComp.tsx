import { TableCell, TableHead, TableRow } from '@mui/material';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 120 },
  { id: 'lat', label: 'Latitud', minWidth: 70 },
  { id: 'long', label: 'Longitud', minWidth: 70 },
  {
    id: 'buttons',
    label: 'Acciones',
    minWidth: 100,
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
