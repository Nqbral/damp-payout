import DampLogo from '@public/damp_logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLogin() {
  return (
    <div className="fixed top-0 flex w-full flex-row items-center justify-between bg-neutral-900 px-6 py-4 shadow-sm shadow-neutral-950">
      <Link href="/">
        <Image src={DampLogo} className="w-8" alt="damp-logo-navbar" />
      </Link>
    </div>
  );
}
