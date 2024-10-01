import Hero from "@/components/section/Hero";
import './globals.css'
import About from "@/components/section/About";
import Project from "@/components/section/Project";
import Input from "@/components/CTA/Input";
import Service from "@/components/section/Service";

const Home = () => {
  return (
    <main className="pt-20 w-full h-auto snap-mandatory gap-20">
      {/* hero */}
      <Hero/>
      {/* about */}
      <section className="snap-y">
        <About/>
      </section>
      {/* skills */}
      <section className="snap-y grid">
        <div className="place-self-center border w-full aspect-square grid grid-cols-1 grid-rows-1">
        <div className="w-20 aspect-square bg-[rgb(var(--blur))] place-self-center row-start-1 col-start-1 z-10 rounded-full"></div>
        <div className="w-40 aspect-square bg-[rgb(var(--primary))] place-self-center row-start-1 col-start-1 rounded-full"></div>
        </div>
      </section>
      {/* project */}
      <section id="project" className="snap-y flex flex-col gap-4">
        <Project/>
      </section>
      {/* services */}
      <section className="h-fit">
        <Service/>
      </section>
      {/* contact */}
      <section id="contact" className="snap-y">
        <form action="" className="grid grid-rows-5 grid-cols-2 gap-2 gap-x-4">
          <Input type="text" placeholder="Enzo">First name:</Input>
          <Input type="text" placeholder="CORDOVANA">Last name:</Input>
          <Input type="text" placeholder="enzo.cordovana@etu.univ-amu.fr" addClassName="col-span-full">Email:</Input>
          <Input type="text" placeholder="+** * ** ** ** **" addClassName="col-span-full">Phone number:</Input>
          <textarea name="" id="" className="col-span-full rounded-md px-6 py-2 bg-[rgb(var(--background))] outline outline-2 outline-[rgb(var(--blur))] focus:outline-[rgb(var(--primary))] duration-200 mt-4"></textarea>
          <input type="submit" />
        </form>
      </section>
      {/* footer */}
      <footer className="grid-cols-[auto_1fr_1fr_1fr] grid-rows-[1fr_auto]">
        <div>
          <h1>BNK4970</h1>
          {/* reseaux */}
          <ul>

          </ul>
        </div>

        {/* section */}
        <div>

        </div>

        {/* Page */}
        <div>
          
        </div>

        {/* droit & ... */}
        <p></p>
      </footer>
    </main>
  );
}

export default Home;
