import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      
      {/* Task Bar */}
      <nav className="w-full bg-black text-white shadow-md fixed top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-6 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold hover:text-gray-300 transition duration-300">
            <Link href="/">AKSHAT KARWA</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex font-bold text-xl space-x-20">
            <a href="#introduction" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300 transition duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300 transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section
        id="introduction"
        className="relative w-full h-screen flex items-center justify-center text-center px-4"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: 'url("../images/background.jpg")' }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            <span className="block text-lg sm:text-xl md:text-2xl mb-4 uppercase">Welcome to the Portfolio of</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl uppercase">Akshat Karwa</span>
          </h1>
          <p className="text-lg sm:text-xl text-black-200 mt-4">
            Computer Science Master's Student | Machine Learning Enthusiast
          </p>
          <div className="mt-8">
            <Link href="/about">
              <span className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Learn More About Me
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 w-3/4">
          I'm passionate about creating impactful solutions using machine learning and data science. Currently pursuing a Master's degree at
          Georgia Tech, I enjoy tackling challenging problems and sharing my journey through projects.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full h-screen bg-white flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
        <ul className="space-y-4 w-3/4">
          <li>
            <h3 className="text-lg font-semibold text-blue-600">Portfolio Builder</h3>
            <p className="text-gray-600">A tool to build robust S&P 500 stock portfolios.</p>
          </li>
          <li>
            <h3 className="text-lg font-semibold text-blue-600">Job Search Portal</h3>
            <p className="text-gray-600">A dynamic platform for Georgia Tech students to search jobs efficiently.</p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 w-3/4">
          Let's connect!
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <span className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
              Contact Me
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
