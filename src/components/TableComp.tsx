import { Table, TableContainer } from '@mui/material';
import TableBodyComp from './TableBodyComp';
import TableHeaderComp from './TableHeaderComp';

const TableComp = () => {
  return (
    <TableContainer sx={{ maxHeight: 400, maxWidth: 800, width: '100%' }}>
      <Table aria-label="users tables" stickyHeader>
        <TableHeaderComp />
        <TableBodyComp />
      </Table>
    </TableContainer>
  );
};

export default TableComp;
