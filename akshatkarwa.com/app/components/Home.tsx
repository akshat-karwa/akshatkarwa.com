import Link from 'next/link';

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-center bg-white text-black px-4 sm:px-6 lg:px-8 py-8 lg:py-0 font-sans"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-12">
        <h1>
          <span className="block mx-auto text-xl sm:text-2xl lg:text-4xl tracking-widest animate-fade-in capitalize">
            👨‍💻 Welcome to my portfolio! 🚀
          </span>
        </h1>

        <div className="mt-10 w-full max-w-5xl mx-auto px-6 text-center space-y-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug tracking-wide">
            Hi, I&apos;m Akshat Karwa - a computer scientist passionate about solving real-world problems by building intelligent systems through thoughtful design.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-6">
          {[
            { label: "Education", href: "#education" },
            { label: "Selected Works", href: "#projects" },
            { label: "Resume", href: "/resume/Akshat_Karwa_Resume.pdf", newTab: true }
          ].map(({ label, href, newTab = false }) => (
            <Link
              key={label}
              href={href}
              target={newTab ? "_blank" : undefined}
              rel={newTab ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-black border border-black rounded-xl shadow-md hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[14rem] text-center text-base sm:text-lg"
            >
              {label}
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="my-8" />

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/akshatkarwa/" },
            { label: "GitHub", href: "https://github.com/akshat-karwa" },
            { label: "Email", href: "mailto:akshatkarwa21@gmail.com" },
            { label: "Contact", href: "tel:+14044909911" }
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-white text-black border border-black rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300 min-w-[10rem] text-center"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
