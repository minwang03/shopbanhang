import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Navbar from './header/NavBar.js';
import Body1 from './body/Carousels.js'
import Form from './body/example'

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Body1/>
    <Form/>
  </>
);
