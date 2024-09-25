import React from "react";
import Button from "../CTA/Button";
import Link from "next/link";
interface HeroProps {}
export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="grid place-items-start w-1/2 h-hero">
      <div className="mt-20 w-fit flex flex-col gap-2">
        <p>Hey, I&apos;m</p>
        <h1 className="text-7xl uppercase text-primary">
          cordovana <br />
          enzo
        </h1>
        <div className="flex items-center justify-between gap-4 w-auto mt-2">
          <div className="w-full h-1 bg-foreground"></div>
          <h2 className="text-nowrap">Developpeur front-end</h2>
        </div>
        <p>
          Je suis en première année de BUT INFORMATIQUE <br /> à l&apos;IUT
          d&apos;Aix en provence.
        </p>
        <div className="flex gap-2 mt-4">
          <Link href={"#contact"}>
            <Button variant="solid" color="primary" radius="md">
              Prendre contact
            </Button>
          </Link>
          <Link href={"#project"}>
            <Button variant="bordered" color="secondary" radius="md">
              Voir mes projets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
