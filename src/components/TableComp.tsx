import { Table, TableContainer } from '@mui/material';
import TableBodyComp from './TableBodyComp';
import TableHeaderComp from './TableHeaderComp';

const TableComp = () => {
  return (
    <TableContainer sx={{ maxHeight: 400, maxWidth: 900, width: '100%' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHeaderComp />
        <TableBodyComp />
      </Table>
    </TableContainer>
  );
};

export default TableComp;
