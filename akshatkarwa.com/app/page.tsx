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
            BS & MS Computer Science @ Georgia Tech <br></br>Data Science & Machine Learning Enthusiast
          </p>
          <div className="mt-8">
            <Link href="#about">
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
        className="w-full h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: 'url("../images/background.jpg")' }}
      >
         {/* Picture */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl relative">
        <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-lg" style={{ top: '-2rem' }}>
          <img
            src="/images/profile.jpg"
            alt="Akshat Karwa"
            className="w-full h-auto rounded-full object-cover transform scale-110 mt-[-100px]"
          />
        </div>
        {/* About Text */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg md:max-w-xl w-full">
          <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
          <p className="text-lg text-black">
            I'm a passionate computer scientist who enjoys solving problems and learning new skills. Having a strong background in <strong>Data Science</strong>, <strong>Algorithms</strong>, and <strong>Machine Learning</strong>,
            I aspire to design efficient computational systems that can enable effective tailored solutions and ease people's lives. 
            I am dedicated to developing high-quality, user-centric systems that drive meaningful impact, and am committed to making technology more accessible and beneficial.
            <br /><br /> <strong>MS in Computer Science at Georgia Tech</strong>
          </p>
        </div>
      </div>
      </section>

      {/* Projects Section */}
      <section
      id="project"
      className="w-full h-screen bg-cover bg-center bg-fixed flex flex-col items-center text-center"
      style={{ backgroundImage: 'url("../images/background.jpg")' }}
    >
      <div id="projects" className="h-0 -mt-16" />
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">BuzzAI - Course Discovery System</h3>
          <p className="text-sm text-gray-500 mb-2">Software Engineer @ Georgia Tech</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Built course recommender using transformer models (MiniLM, DistilRoBERTa) and FAISS, achieving 84.1% accuracy in course matching</li>
            <li>• Engineered data pipeline with custom web scrapers processing 2,000+ courses with 90%+ relevance</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">COVID Forecasting with Exogenous Data Integration</h3>
          <p className="text-sm text-gray-500 mb-2">Data Scientist</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Engineered epidemic spread forecasting system using SARIMA, Prophet, LSTM, reducing prediction error by 24%</li>
            <li>• Optimized performance through analysis of 38 features, achieving 31% improvement in prediction accuracy</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Spotify Genre Classifier & Hit Predictor</h3>
          <p className="text-sm text-gray-500 mb-2">Machine Learning Engineer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Analyzed 38,000+ songs achieving 87.3% accuracy in genre classification and 96% in hit prediction</li>
            <li>• Implemented PCA, t-SNE, and UMAP for dimensionality reduction and pattern analysis</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Voice Cloning Using Deep Learning</h3>
          <p className="text-sm text-gray-500 mb-2">Machine Learning Engineer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Built voice cloning system achieving 0.982 Mean Cosine Similarity & 0.019 Mean MSE</li>
            <li>• Refined speaker encoder achieving 0.4036 Mel-spectrogram similarity on unseen speakers</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">BeeHired – Job Aggregation Portal</h3>
          <p className="text-sm text-gray-500 mb-2">Software Engineer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Created web crawler processing listings at 1.04s/post with 0.14s parsing speed</li>
            <li>• Built full-stack platform processing 10,000+ posts with 0.07s query response time</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Real-Time Algorithmic Trading Platform</h3>
          <p className="text-sm text-gray-500 mb-2">Developer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Developed trading platform integrating Kotak Mahindra Bank API for real-time execution</li>
            <li>• Implemented efficient data handling techniques for optimal performance</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Airline Database Management System</h3>
          <p className="text-sm text-gray-500 mb-2">Database Engineer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Implemented MySQL procedures for comprehensive airline operations management</li>
            <li>• Analyzed scenarios and handled dataset irregularities through simulation cycles</li>
          </ul>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-blue-600">Road Crossing Mobile Game</h3>
          <p className="text-sm text-gray-500 mb-2">Mobile Developer</p>
          <ul className="text-gray-600 space-y-2">
            <li>• Developed feature-rich mobile game with comprehensive gameplay mechanics</li>
            <li>• Optimized UI/UX for seamless performance across devices</li>
          </ul>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: 'url("../images/background.jpg")' }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-2xl text-black w-3/4">
          Let's connect!
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="https://www.linkedin.com/in/akshatkarwa/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/akshat-karwa"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            GitHub
          </a>
          <a href="mailto:akshatkarwa21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Email
          </a>
          <a href="/resume/Akshat_Karwa_Resume_Latex.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Resume
          </a>
          <a href="tel:+14044909911"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
