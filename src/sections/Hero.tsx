import Button from "../components/Button";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32" id="hero">
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">
            Video Editing
          </div>
          <h1 className="mb-6 max-lg:mb-7 max-md:mb-4  text-p4 uppercase max-md:leading-12 h1">
            Amazingly simple
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn, and surprisingly powerful.
          </p>
          <a href="#features">
            <Button icon="/images/zap.svg">Try it now</Button>
          </a>
        </div>

        <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
          <img
            src="/images/hero.png"
            className="size-500 lg:size-1230 h-auto"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
