import Link from 'next/link';

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      />

      {/* Content container with glass effect */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="space-y-4">
          <span className="block text-lg sm:text-xl md:text-3xl font-light text-black tracking-wider">
            Welcome to the Portfolio of
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Akshat Karwa
          </span>
        </h1>

        <div className="mt-8 inline-block p-4 backdrop-blur-md bg-white/90 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg sm:text-xl text-black font-light leading-relaxed">
            BS & MS Computer Science @ Georgia Tech
            <span className="block mt-2 text-black">
              Data Science & Machine Learning Enthusiast
            </span>
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="#about" className="group inline-block w-96 px-16 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <span className="relative flex items-center justify-center gap-2">
              Learn More About Me
              <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link href="#projects" className="group inline-block w-96 px-16 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <span className="relative flex items-center justify-center gap-2">
              View My Projects
              <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-black mb-4 mt-6">Lets Connect!</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/akshatkarwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/akshat-karwa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="mailto:akshatkarwa21@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Email
          </a>
          <a 
            href="/resume/Akshat_Karwa_Resume_Latex.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Resume
          </a>
          <a 
            href="tel:+14044909911"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}