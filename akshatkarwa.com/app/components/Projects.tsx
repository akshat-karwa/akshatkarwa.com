export default function Projects() {
    return (
            <section
            id="projects"
            className="scroll-mt-24 relative w-full min-h-screen flex flex-col items-start justify-start bg-white text-black font-sans"
            >
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-neutral-300 pb-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-sans font-semibold text-left text-neutral-900 tracking-tight">
                    Selected Works
                </h2>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"> */}
            
            <a href="https://github.com/Mehul20/Buzz-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">BuzzAI - Course Discovery System - Georgia Tech</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Software Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/BuzzAI.jpg"
                            alt="BuzzAI Course Discovery Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Built course recommender using transformer models (MiniLM, DistilRoBERTa) and FAISS, with custom filtering, 
                            collaborative profiling, and Llama model for generating topic descriptions, achieving 84.1% accuracy in course matching.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Engineered data pipeline with custom web scrapers (BeautifulSoup, pdfplumber) and vector embedding architecture, 
                            processing 2,000+ courses and enabling adaptive recommendations with 90%+ relevance through user preference learning.
                        </li>
                    </ul>
                </div>
            </a>
                
            <a href="https://github.com/Mehul20/EPI-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-lg mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">COVID Forecasting with Exogenous Data Integration</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Data Scientist</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/covid_forecasting.jpg"
                            alt="COVID Forecasting Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Engineered an epidemic spread forecasting system utilizing state-of-the-art models (SARIMA, Prophet, LSTM, RNN, SI, 
                            TBATS), integrating exogenous data across 1,674 days, reducing prediction error by 24% over traditional approaches.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Optimized performance through strategic feature integration and combination analysis of 38 features including vaccination 
                            rates, mobility, health and economic indicators, achieving 31% improvement in prediction accuracy.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/Popularity_Pred_Genre_Clf_ML_Proj"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Spotify Song Genre Classifier & Popularity Predictor</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Machine Learning Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/genre_hit.jpg"
                            alt="Spotify Genre Popularity Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Analyzed Spotify data encompassing 38,000+ songs to develop a predictive model, achieving 87.3% accuracy in genre 
                            classification using Random Forest (F1 score: 0.88) and 96% accuracy in hit prediction.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Conducted data pre-processing, explored dimensionality reduction techniques like PCA, t-SNE, and UMAP, applied ML
                            algorithms, and created visualizations to uncover patterns in music genre and popularity trends.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/Voice-Cloning-DL-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Voice Cloning Using Deep Learning</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Machine Learning Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/voice_cloning.jpg"
                            alt="Voice Cloning Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Built a voice cloning system using YourTTS and TortoiseTTS, achieving exceptional voice replication (Mean Cosine 
                            Similarity: 0.982 & Mean MSE: 0.019) through architectural optimizations and effective fine-tuning.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Refined a speaker encoder through multi-stage training on LJSpeech and VCTK datasets, achieving 0.4036 Mel-spectrogram 
                            similarity on 11 unseen speakers, reducing spectral distortion and enhancing synthesis naturalness.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/Cloud-Trace-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Cloud Trace Analysis (Google, Azure, Alibaba)</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Data Scientist</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/cloud_analysis.png"
                            alt="Cloud Trace Analysis"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Analyzed 10M+ trace rows from Google, 2.7M+ VMs from Azure, and 4000+ machines from Alibaba to uncover inefficiencies in CPU and memory utilization; normalized heterogeneous schemas and leveraged BigQuery and Pandas to enable cross-platform insights.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Built XGBoost regression models to predict utilization patterns, achieving 81.8% CPU accuracy on Google and 87.7% memory accuracy on Alibaba; revealed Azure&apos;s over-provisioning, Google&apos;s bursty workload behavior, and Alibaba&apos;s highly efficient memory usage.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/Vertically-Integrated-Project_Auto_Algo_Design"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Automated Algorithm Design</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Software Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/AAD.jpg"
                            alt="Automated Algorithm Design Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Developed the EMADE framework, implementing a multi-island model with diverse objectives and dynamic migration topology 
                            that improved population diversity by 38% phenotypically and 11% genotypically, outperforming algorithms like NSGA-II and MOEA/D.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Optimized framework performance, achieving a 18% improvement in convergence speed, 22% better objective coverage, and 
                            reducing computational overhead by 27% on the Georgia Tech PACE cluster.
                        </li>
                    </ul>
                </div>
            </a>

            <a className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">BeeHired - Job Aggregation Portal</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Software Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/bee_hired.jpg"
                            alt="BeeHired Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Created high-performance web crawler processing listings at 1.04s/post with 0.14s parsing speed for 100+ posts, and 
                            optimized storage to 0.08s/entry, through Selenium WebDriver implementation.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Architected full-stack job platform using React/Express/MySQL processing 10,000+ posts in 24 mins, featuring 0.07s 
                            query response time, ghost job detection, and user-friendly multi-parameter filtering interface for personalized job search.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/viewership_forecasting"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Viewership Forecasting</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Data Analyst</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/viewership_forecast.png"
                            alt="Viewership Forecasting Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Developed time series forecasting models on hourly streaming viewership data using Simple, Double, and Triple Exponential Smoothing, as well as SARIMA with seasonal differencing and bootstrapped confidence intervals.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Conducted EDA, trend/seasonality decomposition, and calendar-effect analysis; optimized forecasting accuracy via solver tuning and validation on a 75/25 time-based split, minimizing Mean Absolute Error (MAE).
                        </li>
                    </ul>
                </div>
            </a>

            <a className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Real-Time Algorithmic Trading Platform</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Software Developer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/trading.jpg"
                            alt="Trading Platform Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Developed an algorithmic trading platform integrated with Kotak Mahindra Bank API, enabling automated trade execution 
                            with average latency under 50ms, and reducing manual intervention by 90%. Implemented robust error handling to 
                            ensure continuous operation during market hours.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Conducted comprehensive strategy back-testing using 5 years of historical market data to optimize performance and adapt to 
                            current market conditions, and optimized algorithm performance through efficient data handling techniques.
                        </li>
                    </ul>
                </div>
            </a>

            <a className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Airline Database Management System</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Database Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/airline_database.jpg"
                            alt="Airline Management Database Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Implemented MySQL procedures, views, and structures to administer passenger/pilot profiles and movements, 
                            flight assignments, takeoffs/landings, delays, ticket purchases, route creation and boarding/disembarking.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Analyzed scenarios, handled dataset irregularities, addressed edge cases and tested via simulation cycles.
                        </li>
                    </ul>
                </div>
            </a>

            <a className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Road Crossing Mobile Game</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Mobile Developer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/crossing_game.jpg"
                            alt="Road Crossing Game Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Developed a feature-rich mobile game implementing gameplay mechanics, player functionalities, and game assets.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Integrated multiple screens and optimized UI/UX for seamless performance and an engaging experience across devices.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://github.com/akshat-karwa/coursework-graph-visualization"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Coursework Constellation</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Data Visualization Engineer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/coursework_visualization.jpg"
                            alt="Coursework Visualization Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Built an interactive D3.js visualization showing 35+ courses that I have taken at Georgia Tech, where nodes 
                            represent courses and edges show course relationships, with color gradients reflecting course depth/prerequisites.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Created a dual-panel layout: left panel displaying standalone general education courses with no prerequisites, while 
                            the right panel mapping the interconnected technical curriculum through directed edges showing course dependencies.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VTUQNGS7RRGG/CERTIFICATE_LANDING_PAGE~VTUQNGS7RRGG.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">Machine Learning Specialization</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">ML Developer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/ML_Coursera.jpg"
                            alt="JavaScript Applications Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Designed and implemented diverse ML algorithms including neural networks, SVMs, and recommender systems using GNU Octave,
                            achieving optimal model performance through systematic hyperparameter tuning.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Built and optimized supervised and unsupervised learning models while mastering fundamental ML concepts through hands-on 
                            implementation of clustering, gradient descent, and backpropagation algorithms.
                        </li>
                    </ul>
                </div>
            </a>

            <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-862a5f46-9354-4fc6-97ad-966e08fb0582.jpg?v=1593967988000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full transform transition-all duration-300 hover:scale-[1.02]"
            >
                <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg border-4 border-black flex flex-col w-full max-w-2xl mx-auto">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-600 mb-1">JavaScript Applications</h3>
                    <p className="text-xs sm:text-sm font-medium text-black mb-3">Full Stack Developer</p>
                    <div className="mb-3 aspect-video px-2 sm:px-3 w-full h-auto">
                        <img 
                            src="/images/JS_certificate.jpg"
                            alt="JavaScript Applications Project"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <ul className="text-black text-left space-y-1.5 text-xs sm:text-sm flex-grow">
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Engineered full-stack web applications including a real-time food ordering system, an interactive budget management tool,
                            and a live stock trading platform using React, Node.js, and MongoDB.
                        </li>
                        <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-blue-600">
                            Implemented modern development workflows with NPM, Parcel bundling, and Babel for optimized performance, reducing load 
                            times by 40% and enabling seamless ES6+ compatibility.
                        </li>
                    </ul>
                </div>
            </a>
            </div>
        <div className="h-24"></div>
        </section>
    );
}