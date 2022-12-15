import React from 'react';
import Game from './Game';
import { BrowserRouter } from 'react-router-dom';

export default function App(basename) {
  return (
    <BrowserRouter basename={basename}>
      <Game/>
    </BrowserRouter>
  );
}
