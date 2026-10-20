import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#0B1120] text-white">
      <div className="container mx-auto grid min-h-[calc(100vh-80px)] items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left: Introduction */}
        <div className="order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Full Stack Developer
          </div>

          <p className="mb-3 text-lg text-gray-300 sm:text-xl">
            Hello, I&apos;m{" "}
            <span className="font-semibold text-white">
              MD. Mainul Islam Rabby
            </span>
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I Build Modern{" "}
            <span className="text-blue-500">Web Experiences</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            I develop responsive, user-friendly web applications with clean
            interfaces and reliable functionality, turning ideas into digital
            experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
            >
              View My Projects
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href="/resume.pdf"
              download="Mainul_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-semibold text-white transition-colors hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5 text-sm text-gray-400">
            <span>Find me on:</span>
            <a
              href="https://github.com/mainulislamrabby"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/mdmainulislamrabby/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-700/70 bg-[#111827]">
              <Image
                src="/image.jpg"
                alt="MD. Mainul — Full Stack Developer"
                width={600}
                height={750}
                priority
                className="aspect-4/5 w-full object-cover"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
