import Link from 'next/link';

export default function Projects() {
    return (
            <section
            id="projects"
            className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center text-center pt-24"
            style={{ backgroundImage: 'url("../images/background.jpg")' }}
            >
            <div className="border-4 border-black px-6 py-2 rounded-lg inline-block bg-white/90 backdrop-blur-sm mb-2">
            <h2 className="text-2xl font-bold text-black text-center">Projects</h2>
            </div>
    
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    
            <a href="https://github.com/Mehul20/Buzz-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:transform hover:scale-105 transition-transform duration-200 max-w-lg">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-4 border-black">
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
        <div className="h-24"></div>
        </section>
    );
}