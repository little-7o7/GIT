import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { Chakra } from './Chakra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chakra />
  </React.StrictMode>
);