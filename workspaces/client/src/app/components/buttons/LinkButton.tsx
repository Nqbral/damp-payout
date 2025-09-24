import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  buttonText: string;
  typeButton: 'primary' | 'secondary' | 'tertiary';
};

export default function LinkButton({
  href,
  buttonText,
  typeButton,
}: Readonly<LinkButtonProps>) {
  switch (typeButton) {
    case 'primary':
      return (
        <Link
          href={href}
          className="rounded-sm bg-gray-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-600"
        >
          {buttonText}
        </Link>
      );
    case 'secondary':
      return (
        <Link
          href={href}
          className="rounded-sm bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          {buttonText}
        </Link>
      );
    case 'tertiary':
      return (
        <Link
          href={href}
          className="rounded-sm bg-red-400 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-500"
        >
          {buttonText}
        </Link>
      );
    default:
      return <></>;
  }
}
