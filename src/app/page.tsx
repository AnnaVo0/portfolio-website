import Navbar from './navbar';
import Image from 'next/image';

export default function App() {
  return (
    <body className="bg-orange-100 text-orange-950">
        <div className="max-w-prose sm:max-w-screen-lg w-screen mx-auto px-4 py-16 sm:px-20 sm:flex sm:justify-between sm:gap-12">
            <Navbar />
            <main className="px-8 py-12 rounded-2xl bg-orange-50">
              <Image
                className="rounded-full mx-auto mb-6"
                src="/placeholder.jpg"
                width={150}
                height={150}
                alt="Picture of me"
              />
              <section className="mb-16">
                <h1 className="text-center text-2xl">Anna Vo</h1>
              </section>
              <section id="about">
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
