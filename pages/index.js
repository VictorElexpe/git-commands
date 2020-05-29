import Head from 'next/head'
import commands from '../commands.json'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Learn about how Git works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          this is git
        </h1>

        <p className="description">
          Git helps you and your team track and organize the changes you make in your projects.
        </p>

        <div className="grid">
          {commands.map((command) => (
            <a href={command.url} className="card">
              <h3><code>{command.name}</code></h3>
              <p>{command.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer>
      Made by&nbsp;
        <a
          href="https://www.twitter.com/victorelexpe"
          target="_blank"
          rel="noopener noreferrer">
          @victorelexpe
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          background-color: #000;
          color: #FFF;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .subtitle {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          float: none;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          max-width: 50%;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #afafaf;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          float: none;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #ffd54f;
          border-color: #ffd54f;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}