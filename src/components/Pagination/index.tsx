import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent() {
  return (
    <Stack spacing={2} style={{marginTop:"50px"}}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}