import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { storyblokInit, apiPlugin } from "@storyblok/react";

import './custom.scss';

storyblokInit({
  accessToken: "nwXiorgkpMk3k1yZPKreKgtt",
  use: [apiPlugin],
  // components: {
  //   page: Page,
  //   teaser: Teaser,
  //   grid: Grid,
  //   feature: Feature,
  // },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
