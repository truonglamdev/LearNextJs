

import { Box } from '@mui/material';
import * as React from 'react';


export interface EmptyProps {
}

export  function EmptyLayout (props: EmptyProps) {
  return (
    <Box sx={{color: 'red'}}>
      EmptyPage
    </Box>
  );
}
