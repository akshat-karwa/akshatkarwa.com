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
              Connect
            </a>
          </div>
        </div>
      </nav>

      <section id="introduction" className="relative w-full h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("../images/background.jpg")' }}
        />

        {/* Content container with glass effect */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-black border border-white/20">
            <h1 className="space-y-4">
              <span className="block text-lg sm:text-xl md:text-2xl font-light text-white tracking-wider">
                Welcome to the Portfolio of
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-white">
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
              <Link href="#about">
                <span className="group inline-block w-96 px-16 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <span className="relative flex items-center justify-center gap-2">
                    Learn More About Me
                    <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link href="#projects">
                <span className="group inline-block w-96 px-16 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <span className="relative flex items-center justify-center gap-2">
                    View My Projects
                    <svg className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center"
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
      id="projects"
      className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center text-center pt-24"
      style={{ backgroundImage: 'url("../images/background.jpg")' }}
      >
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <a href="https://github.com/Mehul20/Buzz-AI"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">BuzzAI - Course Discovery System - Georgia Tech</h3>
            <p className="text-base font-medium text-black mb-2">Software Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/BuzzAI.jpg"
                alt="BuzzAI Course Discovery Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Built course recommender using transformer models (MiniLM, DistilRoBERTa) and FAISS, with custom filtering, 
              collaborative profiling, and Llama model for generating topic descriptions, achieving 84.1% accuracy in course matching.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Engineered data pipeline with custom web scrapers (BeautifulSoup, pdfplumber) and vector embedding architecture, 
              processing 2,000+ courses and enabling adaptive recommendations with 90%+ relevance through user preference learning.
              </li>
            </ul>
          </div>
        </a>

        <a href="https://github.com/Mehul20/EPI-Project"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">COVID Forecasting with Exogenous Data Integration</h3>
            <p className="text-base font-medium text-black mb-2">Data Scientist</p>
            <div className="mb-4">
              <img 
                src="/images/covid_forecasting.jpg"
                alt="COVID Forecasting Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Engineered an epidemic spread forecasting system utilizing state-of-the-art models (SARIMA, Prophet, LSTM, RNN, SI, 
              TBATS), integrating exogenous data across 1,674 days, reducing prediction error by 24% over traditional approaches.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Optimized performance through strategic feature integration and combination analysis of 38 features including vaccination 
              rates, mobility, health and economic indicators, achieving 31% improvement in prediction accuracy.
              </li>
            </ul>
          </div>
        </a>

        <a href="https://github.com/akshat-karwa/Popularity_Pred_Genre_Clf_ML_Proj"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Spotify Song Genre Classifier & Popularity Predictor</h3>
            <p className="text-base font-medium text-black mb-2">Machine Learning Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/genre_hit.jpg"
                alt="Spotify Genre Popularity Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Analyzed Spotify data encompassing 38,000+ songs to develop a predictive model, achieving 87.3% accuracy in genre 
              classification using Random Forest (F1 score: 0.88) and 96% accuracy in hit prediction.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Conducted data pre-processing, explored dimensionality reduction techniques like PCA, t-SNE, and UMAP, applied ML
              algorithms, and created visualizations to uncover patterns in music genre and popularity trends.
              </li>
            </ul>
          </div>
        </a>

        <a href="https://github.com/akshat-karwa/Voice-Cloning-DL-Project"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Voice Cloning Using Deep Learning</h3>
            <p className="text-base font-medium text-black mb-2">Machine Learning Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/voice_cloning.jpg"
                alt="Voice Cloning Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Built a voice cloning system using YourTTS and TortoiseTTS, achieving exceptional voice replication (Mean Cosine 
              Similarity: 0.982 & Mean MSE: 0.019) through architectural optimizations and effective fine-tuning.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Refined a speaker encoder through multi-stage training on LJSpeech and VCTK datasets, achieving 0.4036 Mel-spectrogram 
              similarity on 11 unseen speakers, reducing spectral distortion and enhancing synthesis naturalness.
              </li>
            </ul>
          </div>
        </a>

        <a href="https://github.com/akshat-karwa/Vertically-Integrated-Project_Auto_Algo_Design"
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Automated Algorithm Design</h3>
            <p className="text-base font-medium text-black mb-2">Software Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/AAD.jpg"
                alt="Spotify Genre Popularity Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Developed the EMADE framework, implementing a multi-island model with diverse objectives and dynamic migration topology 
              that improved population diversity by 38% phenotypically and 11% genotypically, outperforming algorithms like NSGA-II and MOEA/D.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Optimized framework performance, achieving a 18% improvement in convergence speed, 22% better objective coverage, and 
              reducing computational overhead by 27% on the Georgia Tech PACE cluster.
              </li>
            </ul>
          </div>
        </a>

        <a className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">BeeHired - Job Aggregation Portal</h3>
            <p className="text-base font-medium text-black mb-2">Software Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/bee_hired.jpg"
                alt="BeeHired Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Created high-performance web crawler processing listings at 1.04s/post with 0.14s parsing speed for 100+ posts, and 
              optimized storage to 0.08s/entry, through Selenium WebDriver implementation.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Architected full-stack job platform using React/Express/MySQL processing 10,000+ posts in 24 mins, featuring 0.07s 
              query response time, ghost job detection, and user-friendly multi-parameter filtering interface for personalized job search.
              </li>
            </ul>
          </div>
        </a>

        <a className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Real-Time Algorithmic Trading Platform</h3>
            <p className="text-base font-medium text-black mb-2">Software Developer</p>
            <div className="mb-4">
              <img 
                src="/images/trading.jpg"
                alt="Trading Platform Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Developed an algorithmic trading platform integrated with Kotak Mahindra Bank API, enabling automated trade execution 
              with average latency under 50ms, and reducing manual intervention by 90%. Implemented robust error handling to 
              ensure continuous operation during market hours.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Conducted comprehensive strategy back-testing using 5 years of historical market data to optimize performance and adapt to 
              current market conditions, and optimized algorithm performance through efficient data handling techniques.
              </li>
            </ul>
          </div>
        </a>
        
        <a className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Airline Database Management System</h3>
            <p className="text-base font-medium text-black mb-2">Database Engineer</p>
            <div className="mb-4">
              <img 
                src="/images/airline_database.jpg"
                alt="Airline Management Database Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Implemented MySQL procedures, views, and structures to administer passenger/pilot profiles and movements, 
              flight assignments, takeoffs/landings, delays, ticket purchases, route creation and boarding/disembarking.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Analyzed scenarios, handled dataset irregularities, addressed edge cases and tested via simulation cycles.
              </li>
            </ul>
          </div>
        </a>

        <a className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-600">Road Crossing Mobile Game</h3>
            <p className="text-base font-medium text-black mb-2">Mobile Developer</p>
            <div className="mb-4">
              <img 
                src="/images/crossing_game.jpg"
                alt="Road Crossing Game Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <ul className="text-black text-left space-y-2 list-none">
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Developed a feature-rich mobile game implementing gameplay mechanics, player functionalities, and game assets.
              </li>
              <li className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
              Integrated multiple screens and optimized UI/UX for seamless performance and an engaging experience across devices.
              </li>
            </ul>
          </div>
        </a>
      
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
