import React from 'react';
import ReactDOM from 'react-dom/client';

import { Box } from './Box';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box style={{ backgroundColor: 'red', color: 'white', height: 100, width: 100 }}>BOX</Box>
    <Box as="p">P</Box>
    <Box as="h1">H1</Box>
  </React.StrictMode>,
);
