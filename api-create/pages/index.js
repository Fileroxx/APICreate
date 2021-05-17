import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link href="/sobre">
        <a>Acessar Página Sobre</a>
      </Link>

      <Link href="/tempo">
        <a>Acessar Página tempo</a>
      </Link>

    </div>
  )
}

export default Home;