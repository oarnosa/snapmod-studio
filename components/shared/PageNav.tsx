'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const PageNav = () => {
  return (
    <header>
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28}></Image>
      </Link>

      <nav className="flex gap-2">
        <Button className="button bg-purple-gradient bg-cover">
          <Link href="/sign-in">Login</Link>
        </Button>

        <Button className="button bg-purple-gradient bg-cover">
          <Link href="/sign-up">Create Account</Link>
        </Button>
      </nav>
    </header>
  );
};

export default PageNav;
