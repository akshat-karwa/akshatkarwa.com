import Link from 'next/link';

export default function Home() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed md:bg-fixed"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />

      <div className="relative z-10 w-full max-w-3xl sm:max-w-4xl mx-auto">
        <h1 className="space-y-3 sm:space-y-4">
          <span className="block text-lg sm:text-xl lg:text-3xl font-light text-black tracking-wider">
            Welcome to the Portfolio of
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Akshat Karwa
          </span>
        </h1>

        <div className="mt-4 sm:mt-6 lg:mt-8 inline-block p-3 sm:p-4 backdrop-blur-md bg-white/90 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <p className="text-base sm:text-lg lg:text-xl text-black font-light leading-relaxed">
            BS & MS Computer Science @ Georgia Tech
            <span className="block mt-2 text-black">
              Data Science & Machine Learning Enthusiast
            </span>
          </p>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col gap-3 sm:gap-4 justify-center items-center">
          <Link 
            href="#about" 
            className="group inline-block w-full sm:w-[28rem] px-6 sm:px-8 lg:px-16 py-3 sm:py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <span className="relative flex items-center justify-center gap-2">
              Learn More About Me
              <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link 
            href="#projects" 
            className="group inline-block w-full sm:w-[28rem] px-6 sm:px-8 lg:px-16 py-3 sm:py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <span className="relative flex items-center justify-center gap-2">
              View My Projects
              <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 mt-6 sm:mt-8">Lets Connect!</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <a 
            href="https://www.linkedin.com/in/akshatkarwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/akshat-karwa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="mailto:akshatkarwa21@gmail.com"
            className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Email
          </a>
          <a 
            href="/resume/Akshat_Karwa_Resume_Latex.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Resume
          </a>
          <a 
            href="tel:+14044909911"
            className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}