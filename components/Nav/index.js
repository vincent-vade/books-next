import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/books">
      <a>Books</a>
    </Link>
  </nav>
);
