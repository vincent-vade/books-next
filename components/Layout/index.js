import React from 'react';
import Head from 'next/head';

import Nav from '../Nav';

export default ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <header>
      <Nav />
    </header>
    {children}
  </div>
)
