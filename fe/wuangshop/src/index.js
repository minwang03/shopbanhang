import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Navbar from './header/NavBar.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
  </>
);
