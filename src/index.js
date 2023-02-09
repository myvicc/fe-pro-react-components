import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Application from './Application';
console.log(5);

createRoot(document.querySelector('#root')).render(<Application />);

console.log(7);