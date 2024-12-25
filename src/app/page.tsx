import Navbar from './navbar';

export default function App() {
  return (
    <body className="overflow-x-hidden">
        <div className="max-w-screen-lg w-screen mx-auto px-24 py-16 flex justify-between gap-16">
            <Navbar />
            <main>
              <section>
                <h1>About</h1>
                <p>
                  Hi! I am a first-year computer science student @ UF (graduating May 2028).
                  <br></br>
                  While I am still learning about the various fields in CS, I currently enjoy designing and creating new projects, such as this website, and combining my love for code and visual design together.
                </p>
              </section>
              <section id="projects">
                <h1>Projects</h1>
                <p>
                  Placeholder.
                </p>
              </section>
              <section id="experience">
                <h1>Experience</h1>
                <p>
                  Placeholder.
                </p>
              </section>
              <section id="contact">
                <h1>Contact</h1>
                <p>
                  Placeholder.
                </p>
              </section>
            </main>
        </div>
    </body>
  );
}
