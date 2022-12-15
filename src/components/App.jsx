import React from 'react';
import Game from './Game';
import { BrowserRouter } from 'react-router-dom';

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, '');

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Game/>
    </BrowserRouter>
  );
}
