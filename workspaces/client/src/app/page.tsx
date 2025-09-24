import DampLogo from '@public/damp_logo.png';
import NqbralGamesLogo from '@public/nqbral-games-logo.png';
import Image from 'next/image';
import Link from 'next/link';

import LinkButton from './components/buttons/LinkButton';

export default function HomePage() {
  return (
    <div>
      <main className="flex flex-col items-center gap-10 px-10 py-5">
        <div className="flex flex-col items-center">
          <Image src={DampLogo} alt="DAMP Logo" className="w-32" />
        </div>
        <div className="flex w-72 flex-col items-center gap-4 rounded-md border-1 border-neutral-700 px-2 py-4 transition sm:w-xl">
          <h2 className="text-xl font-semibold text-cyan-500">Espace Joueur</h2>
          <p className="text-center">Consultez votre solde</p>
          <LinkButton
            href="/balances"
            buttonText="Accéder à l'espace joueur"
            typeButton="secondary"
          />
        </div>
        <div className="flex w-72 flex-col items-center gap-4 rounded-md border-1 border-neutral-700 px-2 py-4 transition sm:w-xl">
          <h2 className="text-xl font-semibold text-red-400">
            Espace Gestionnaire
          </h2>
          <p className="text-center">
            Se connecter en tant que gestionnaire de payout
          </p>
          <LinkButton
            href="/login"
            buttonText="Se connecter"
            typeButton="tertiary"
          />
        </div>
      </main>
      <footer className="mb-4 flex w-full flex-col items-center gap-2 pt-20">
        <Link
          href="https://nqbral-games.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={NqbralGamesLogo}
            alt="Nqbral Games Logo"
            className="w-24"
          />
        </Link>
      </footer>
    </div>
  );
}
