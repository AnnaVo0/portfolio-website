import Navbar from './navbar';
import Image from 'next/image';
import Link from 'next/link'

export default function App() {
  return (
    <body>
        <div className="max-w-prose sm:max-w-screen-lg mx-auto px-4 py-16 sm:px-20 sm:flex sm:justify-between sm:gap-10">
            <Navbar />
            <main className="text-orange-950 px-8 py-12 rounded-2xl bg-orange-50">
              <section className="mb-16">
                <Image
                  className="rounded-full mx-auto mb-6"
                  src="/placeholder.jpg"
                  width={150}
                  height={150}
                  alt="Picture of me"
                />
                <h1 className="text-center text-2xl mb-3">Anna Vo</h1>
                <h2 className="text-center italic">First-year Computer Science Student @ UF May 2028</h2>
              </section>
              <section id="about">
                <h1>About</h1>
                <p>
                  Hi! I'm Anna and while I am still learning about the various fields in CS, I currently enjoy designing and creating new projects, such as this website, and combining my love for code and visual design together.
                </p>
                <p>  
                  Outside of coding, I love to draw and play strategy games; my current favorite games are <em>Against the Storm</em> and <em>Baldur's Gate 3</em>.
                </p>
              </section>
              <section id="projects">
                <h1>Projects</h1>
                <div>
                  <Link href="https://replit.com/@annieV45/Game-Jam-Light-the-Tundra" target="_blank" className="inline-block">
                    <Image
                      className="rounded-md mb-6 ring ring-tan hover:ring-tan/50"
                      src="/light_the_tundra.jpg"
                      width={177}
                      height={193}
                      alt="Picture of Light the Tundra's start screen"
                    />
                  </Link>
                  <h2 className="font-bold">
                    Light the Tundra
                  </h2>
                  <p>
                    ​A 2D platformer game made for the SIP 2023 game jam in four days. 
                    The player must guide Lily, a lost girl with a dying lantern, to find spare lantern fuel.
                  </p>
                </div>
                <div>
                  <Link href="https://replit.com/@annieV45/Game-Jam-Light-the-Tundra" target="_blank" className="inline-block">
                    <Image
                      className="rounded-md mb-6 ring ring-tan hover:ring-tan/50"
                      src="/tear_catch.jpg"
                      width={150}
                      height={150}
                      alt="Picture of me"
                    />
                  </Link>
                  <h2 className="font-bold">
                    Tear Catch
                  </h2>
                  <p>
                  A game based around helping my sister catch her tears before they can flood her desk.
                  The player must move a human, the catcher, to catch her tears before they can fall down from the top of the screen.
                  </p>
                </div>
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
              <section>
                <p className="mt-12">
                  This website was built by me using Next.js and Tailwind CSS!
                </p>
              </section>
            </main>
        </div>
    </body>
  );
}
