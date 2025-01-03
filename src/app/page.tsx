import Navbar from './navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function App() {
  return (
    <body>
      <div className="max-w-prose sm:max-w-screen-lg mx-auto px-4 py-16 sm:px-20 sm:flex sm:justify-between sm:gap-10">
        <Navbar />
        <main className="text-orange-950 px-8 py-12 rounded-2xl bg-orange-50">
          <section id="page_top" className="mb-16">
            <Image
              className="mx-auto mb-6 transition ease-in-out hover:scale-105"
              src="/me_chibi_1.png"
              width={200}
              height={200}
              alt="Drawing of me"
            />
            <h1 className="text-center text-4xl mb-3">Hello, I'm Anna!</h1>
            <h2 className="text-center text-orange-950 font-normal italic font-inter">First-year Computer Science Student @ UF (May 2028)</h2>
            <ul className="flex justify-center mt-6 gap-4">
              <li>
                <Link href="https://github.com/AnnaVo0" target="_blank">
                  <Image
                    className="justify-center transition ease-in-out hover:opacity-85"
                    src="/github.svg"
                    width={30}
                    height={30}
                    alt="Github logo"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/anna-n-vo" target="_blank">
                  <Image
                    className="justify-center transition ease-in-out hover:opacity-85"
                    src="/linkedin.svg"
                    width={30}
                    height={30}
                    alt="LinkedIn logo"
                  />
                </Link>
              </li>
            </ul>
          </section>
          <section id="about" className="mb-8">
            <h1>About</h1>
            <p>
              Hi! I'm Anna and while I am still learning about the various fields in CS, I currently enjoy designing and creating new projects, such as this website, and combining my love for code and visual design together.
            </p>
            <Image
              className="mx-auto my-6 transition ease-in-out hover:scale-105"
              src="/me_chibi_2.png"
              width={200}
              height={200}
              alt="Drawing of me tapping away on a keyboard"
            />
            <p>  
              Outside of coding, I love to draw and play strategy games; my current favorite games are <em>Against the Storm</em> and <em>Baldur's Gate 3</em>.
            </p>
          </section>
          <section id="projects">
            <h1>Projects</h1>
            <div className="my-8">
              <Link href="https://github.com/AnnaVo0/light-the-tundra" target="_blank" className="inline-block">
                <Image
                  className="rounded-md mb-6 ring ring-tan hover:ring-tan/50"
                  src="/light_the_tundra.jpg"
                  width={177}
                  height={193}
                  alt="Picture of Light the Tundra's start screen"
                />
              </Link>
              <Link href="https://github.com/AnnaVo0/light-the-tundra" target="_blank" className="block lg:inline-block">
                <Image
                  className="rounded-md mb-6 lg:mx-10 ring ring-tan hover:ring-tan/50"
                  src="/light_the_tundra_cutscene.jpg"
                  width={177}
                  height={193}
                  alt="Picture of a Light the Tundra cutscene"
                />
              </Link>
              <Link href="https://github.com/AnnaVo0/light-the-tundra" target="_blank" className="block lg:inline-block">
                <Image
                  className="rounded-md mb-6 ring ring-tan hover:ring-tan/50"
                  src="/light_the_tundra_gamescreen.jpg"
                  width={177}
                  height={193}
                  alt="Picture of a Light the Tundra game screen"
                />
              </Link>
              <div id="light_the_tundra" className="flex gap-4 mb-4">
                <h2>
                  Light the Tundra
                </h2>
                <p className="text-xs my-auto font-bold text-tan">
                  p5.js, p5.play
                </p>
              </div>
              <p>
                A 2D platformer game made for the SIP 2023 game jam in four days. 
                The player must guide Lily, a lost girl with a dying lantern, to find spare lantern fuel.
              </p>
            </div>
            <div>
              <Link href="https://github.com/AnnaVo0/tear-catch" target="_blank" className="inline-block">
                <Image
                  className="rounded-md mb-6 ring ring-tan hover:ring-tan/50"
                  src="/tear_catch.jpg"
                  width={150}
                  height={150}
                  alt="Picture of Tear Catch's start screen"
                />
              </Link>
              <Link href="https://github.com/AnnaVo0/tear-catch" target="_blank" className="block lg:inline-block">
                <Image
                  className="rounded-md mb-6 lg:mx-10 ring ring-tan hover:ring-tan/50"
                  src="/tear_catch_gamescreen.jpg"
                  width={150}
                  height={150}
                  alt="Picture of Tear Catch's game screen"
                />
              </Link>
              <div id="tear_catch" className="flex gap-4 mb-4">
                <h2>
                  Tear Catch
                </h2>
                <p className="text-xs my-auto font-bold text-tan">
                  p5.js, p5.play
                </p>
              </div>
              <p>
              A game based around helping my sister catch her tears before they can flood her desk.
              The player must move a human, the catcher, to catch her tears before they can fall down from the top of the screen.
              </p>
            </div>
          </section>
          <section>
            <p className="mt-16 mb-0">
              This website was built by me using <b>Next.js</b>, <b>React</b>, <b>HTML</b>, and <b>Tailwind CSS</b>, then deployed with <b>Vercel</b>!
            </p>
          </section>
        </main>
      </div>
    </body>
  );
}
