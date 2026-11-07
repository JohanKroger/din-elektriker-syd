import Image from "next/image";

export default function Home() {
  return (
    <div id="start" className="flex min-h-svh flex-col">
      <header className="border-b border-black/10 bg-white">
        <div className="frame flex items-center justify-between gap-4 py-5">
          <a href="#start" className="logo">
            <Image src="/logotyp.png" width={2048} height={1194} alt="Din Elektriker Syd AB" priority />
          </a>
          <nav aria-label="Huvudmeny">
            <a href="#start" aria-current="page" className="nav-link">Start</a>
          </nav>
        </div>
      </header>
      <main className="hero flex flex-1 items-center">
        <div className="frame relative z-10">
          <h1>Välkommen till<br /><span>Din Elektriker Syd</span></h1>
          <p className="subtitle">Professionella eltjänster för privatpersoner och företag</p>
          <p className="notice">Vår nya hemsida är under uppbyggnad.</p>
        </div>
        <div aria-hidden="true" className="rings" />
      </main>
      <footer className="border-t border-black/10 bg-white">
        <div className="frame flex flex-wrap items-center justify-between gap-5 py-7 text-sm">
          <p>Din Elektriker Syd AB</p>
          <a href="#start" className="underline underline-offset-4">Till toppen ↑</a>
        </div>
      </footer>
    </div>
  );
}
