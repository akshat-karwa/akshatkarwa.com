const projects = [
  {
    slug: 'buzzai',
    title: 'BuzzAI - Course Discovery System - Georgia Tech',
    subtitle: 'Software Engineer',
    image: '/images/BuzzAI.jpg',
    link: 'https://github.com/Mehul20/Buzz-AI',
    tags: ['Transformers', 'MiniLM', 'DistilRoBERTa', 'FAISS', 'Llama', 'NLP', 'Vector Embeddings', 'Web Scraping', 'BeautifulSoup', 'pdfplumber'],
    category: 'AI & LLMs',
    report: '/reports/DLT_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Built course recommender using transformer models (<strong>MiniLM</strong>, <strong>DistilRoBERTa</strong>) and <strong>FAISS</strong>,
            with custom filtering, collaborative profiling, and <strong>Llama</strong> model for generating topic descriptions,
            achieving <strong>84.1% accuracy</strong> in course matching.
            </li>
            <li>
            Engineered data pipeline with custom web scrapers (<strong>BeautifulSoup</strong>, <strong>pdfplumber</strong>) and
            vector embedding architecture, processing <strong>2,000+ courses</strong> and enabling adaptive recommendations
            with <strong>90%+ relevance</strong> through user preference learning.
            </li>
        </ul>
    `,
  },
  {
    slug: 'covid-forecasting',
    title: 'COVID Forecasting with Exogenous Data Integration',
    subtitle: 'Data Scientist',
    image: '/images/epi_poster.png',
    link: 'https://github.com/Mehul20/EPI-Project',
    tags: ['SARIMA', 'LSTM', 'Prophet', 'TBATS', 'Time Series Models', 'RNN', 'Exogenous Feature Integration', 'Forecasting', 'Feature Engineering', 'Epidemiology'],
    category: 'Data Science & Machine Learning',
    report: '/reports/EPI_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Engineered an epidemic spread forecasting system utilizing state-of-the-art models (<strong>SARIMA</strong>, <strong>Prophet</strong>, 
            <strong>LSTM</strong>, <strong>RNN</strong>, <strong>SI</strong>, <strong>TBATS</strong>), integrating exogenous data across 
            <strong>1,674 days</strong>, reducing prediction error by <strong>24%</strong> over traditional approaches.
            </li>
            <li>
            Optimized performance through strategic feature integration and combination analysis of <strong>38 features</strong> including 
            vaccination rates, mobility, health, and economic indicators, achieving <strong>31% improvement</strong> in prediction accuracy.
            </li>
        </ul>
    `,
  },
  {
    slug: 'spotify-genre-predictor',
    title: 'Spotify Song Genre Classifier & Popularity Predictor',
    subtitle: 'Machine Learning Engineer',
    image: '/images/genre_hit.jpg',
    link: 'https://github.com/akshat-karwa/Popularity_Pred_Genre_Clf_ML_Proj',
    tags: ['Random Forest', 'PCA', 't-SNE', 'UMAP', 'Classification', 'Regression', 'Feature Engineering', 'Dimensionality Reduction', 'Model Evaluation', 'Data Preprocessing'],
    category: 'Data Science & Machine Learning',
    report: '/reports/ML_Project.html',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Analyzed Spotify data encompassing <strong>38,000+ songs</strong> to develop a predictive model, achieving 
            <strong>87.3% accuracy</strong> in genre classification using <strong>Random Forest</strong> 
            (<em>F1 score: 0.88</em>) and <strong>96% accuracy</strong> in hit prediction.
            </li>
            <li>
            Conducted data pre-processing, explored dimensionality reduction techniques like <strong>PCA</strong>, 
            <strong>t-SNE</strong>, and <strong>UMAP</strong>, applied machine learning algorithms, and created 
            visualizations to uncover patterns in music genre and popularity trends.
            </li>
        </ul>
    `,
  },
  {
    slug: 'voice-cloning',
    title: 'Voice Cloning Using Deep Learning',
    subtitle: 'Machine Learning Engineer',
    image: '/images/voice_cloning.jpg',
    link: 'https://github.com/akshat-karwa/Voice-Cloning-DL-Project',
    tags: ['YourTTS', 'TortoiseTTS', 'Voice Cloning', 'Speaker Encoder', 'TTS', 'Fine-tuning', 'NLP', 'LLM', 'Deep Learning'],
    category: 'AI & LLMs',
    report: '/reports/DL_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Built a voice cloning system using <strong>YourTTS</strong> and <strong>TortoiseTTS</strong>, achieving exceptional voice replication 
            (<strong>Mean Cosine Similarity: 0.982</strong> & <strong>Mean MSE: 0.019</strong>) through architectural optimizations and effective fine-tuning.
            </li>
            <li>
            Refined a speaker encoder through multi-stage training on <strong>LJSpeech</strong> and <strong>VCTK</strong> datasets, achieving 
            <strong>0.4036 Mel-spectrogram similarity</strong> on 11 unseen speakers, reducing spectral distortion and enhancing synthesis naturalness.
            </li>
        </ul>
    `,
    },
    {
    slug: 'cloud-trace-analysis',
    title: 'Cloud Trace Analysis (Google, Azure, Alibaba)',
    subtitle: 'Data Scientist',
    image: '/images/cloud_analysis.png',
    link: 'https://github.com/akshat-karwa/Cloud-Trace-Analysis',
    tags: ['BigQuery', 'Pandas', 'XGBoost', 'Cloud Traces', 'VM Scheduling', 'Resource Utilization', 'CPU Forecasting', 'Memory Modeling', 'Cross-Platform Analysis', 'Infrastructure Optimization'],
    category: 'Data Science & Machine Learning',
    report: '/reports/DNS_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Analyzed <strong>10M+ trace rows from Google</strong>, <strong>2.7M+ VMs from Azure</strong>, and <strong>4000+ machines from Alibaba</strong> to uncover inefficiencies in <strong>CPU and memory utilization</strong>; normalized heterogeneous schemas and leveraged <strong>BigQuery</strong> and <strong>Pandas</strong> to enable cross-platform insights.
            </li>
            <li>
            Built <strong>XGBoost</strong> regression models to predict utilization patterns, achieving <strong>81.8% CPU accuracy</strong> on Google and <strong>87.7% memory accuracy</strong> on Alibaba; revealed <strong>Azure&apos;s over-provisioning</strong>, <strong>Google&apos;s bursty workload behavior</strong>, and <strong>Alibaba&apos;s highly efficient memory usage</strong>.
            </li>
        </ul>
    `,
    },
    {
    slug: 'automated-algorithm-design',
    title: 'Automated Algorithm Design',
    subtitle: 'Software Engineer',
    image: '/images/AAD.jpg',
    link: 'https://github.com/akshat-karwa/Vertically-Integrated-Project_Auto_Algo_Design',
    tags: ['EMADE', 'NSGA-II', 'MOEA/D', 'Multi-Island Model', 'Evolutionary Algorithms', 'Genetic Programming', 
        'Pareto Optimization', 'Parallel Computing', 'Convergence Optimization', 'Cluster Optimization'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Developed the <strong>EMADE</strong> framework, implementing a multi-island model with diverse objectives and dynamic migration topology 
            that improved population diversity by <strong>38%</strong> phenotypically and <strong>11%</strong> genotypically, outperforming algorithms like 
            <strong>NSGA-II</strong> and <strong>MOEA/D</strong>.
            </li>
            <li>
            Optimized framework performance, achieving an <strong>18% improvement</strong> in convergence speed, <strong>22% better</strong> objective coverage, and 
            reducing computational overhead by <strong>27%</strong> on the <strong>Georgia Tech PACE cluster</strong>.
            </li>
        </ul>
    `,
    },
    {
    slug: 'beehired-job-portal',
    title: 'BeeHired - Job Aggregation Portal',
    subtitle: 'Software Engineer',
    image: '/images/bee_hired.jpg',
    link: '',
    tags: ['Selenium', 'Web Crawling', 'React', 'Express.js', 'MySQL','Full-Stack Development',
        'Backend Optimization', 'Data Parsing', 'Performance Optimization', 'Searching &amp; Filtering'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Created high-performance web crawler processing listings at <strong>1.04s/post</strong> with <strong>0.14s parsing speed</strong> for 100+ posts, 
            and optimized storage to <strong>0.08s/entry</strong>, through <strong>Selenium WebDriver</strong> implementation.
            </li>
            <li>
            Architected full-stack job platform using <strong>React</strong>/<strong>Express</strong>/<strong>MySQL</strong> processing 
            <strong>10,000+ posts</strong> in <strong>24 mins</strong>, featuring <strong>0.07s query response time</strong>, ghost job detection, and 
            user-friendly multi-parameter filtering interface for personalized job search.
            </li>
        </ul>
    `,
    },
    {
    slug: 'viewership-forecasting',
    title: 'Viewership Forecasting',
    subtitle: 'Data Analyst',
    image: '/images/viewership_forecast.png',
    link: 'https://github.com/akshat-karwa/viewership_forecasting',
    tags: ['Time Series Models', 'SARIMA', 'Exponential Smoothing', 'Forecasting', 'Exploratory Data Analysis', 
        'Seasonality Analysis', 'Streaming Analytics', 'Solver Tuning', 'Bootstrapping'],
    category: 'Data Science & Machine Learning',
    report: '/reports/viewership_forecasting.html',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Developed time series forecasting models on hourly streaming viewership data using 
            <strong>Simple</strong>, <strong>Double</strong>, and <strong>Triple Exponential Smoothing</strong>, as well as 
            <strong>SARIMA</strong> with seasonal differencing and bootstrapped confidence intervals.
            </li>
            <li>
            Conducted <strong>EDA</strong>, trend/seasonality decomposition, and calendar-effect analysis; optimized forecasting 
            accuracy via solver tuning and validation on a <strong>75/25 time-based split</strong>, minimizing 
            <strong>Mean Absolute Error (MAE)</strong>.
            </li>
        </ul>
    `,
    },
    {
    slug: 'real-time-trading-platform',
    title: 'Real-Time Algorithmic Trading Platform',
    subtitle: 'Software Developer',
    image: '/images/trading.jpg',
    link: '',
    tags: ['Algorithmic Trading', 'Latency Optimization', 'API Integration', 'Backtesting', 'Time Series Models', 'Error Handling',
        'Financial Data', 'Automated Execution', 'Strategy Optimization', 'Data Pipelines'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Developed an algorithmic trading platform integrated with <strong>Kotak Mahindra Bank API</strong>, enabling automated trade execution 
            with <strong>average latency under 50ms</strong>, and reducing manual intervention by <strong>90%</strong>. Implemented robust error handling to 
            ensure continuous operation during market hours.
            </li>
            <li>
            Conducted comprehensive strategy back-testing using <strong>5 years</strong> of historical market data to optimize performance and adapt to 
            current market conditions, and optimized algorithm performance through efficient data handling techniques.
            </li>
        </ul>
    `,
    },
    {
    slug: 'airline-dbms',
    title: 'Airline Database Management System',
    subtitle: 'Database Engineer',
    image: '/images/airline_database.jpg',
    link: '',
    tags: ['MySQL', 'Procedures', 'Views', 'Database Design', 'Airline Management', 'Simulation',
        'Edge Case Handling', 'Relational Schema', 'Data Integrity', 'SQL Automation'],
    category: 'Data Science & Machine Learning',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Implemented <strong>MySQL procedures</strong>, <strong>views</strong>, and <strong>database structures</strong> to administer passenger/pilot profiles and movements, 
            flight assignments, takeoffs/landings, delays, ticket purchases, route creation, and boarding/disembarking processes.
            </li>
            <li>
            Analyzed operational scenarios, handled dataset irregularities, addressed edge cases, and tested system reliability through <strong>simulation cycles</strong>.
            </li>
        </ul>
    `,
    },
    {
    slug: 'road-crossing-game',
    title: 'Road Crossing Mobile Game',
    subtitle: 'Mobile Developer',
    image: '/images/crossing_game.jpg',
    link: '',
    tags: ['Mobile Game', 'Gameplay Mechanics', 'UI/UX Design', 'Multi-Screen Integration', 'Game Assets', 'Cross-Device Compatibility',
        'Animation', 'Event Handling', 'Performance Optimization', 'Game Development'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Developed a <strong>feature-rich mobile game</strong> by implementing gameplay mechanics, player functionalities, and custom game assets.
            </li>
            <li>
            Integrated <strong>multi-screen navigation</strong> and optimized <strong>UI/UX design</strong> for seamless performance and an engaging experience across varied mobile devices.
            </li>
        </ul>
    `,
    },
    {
    slug: 'coursework-constellation',
    title: 'Coursework Constellation',
    subtitle: 'Data Visualization Engineer',
    image: '/images/coursework_visualization.jpg',
    link: 'https://github.com/akshat-karwa/coursework-graph-visualization',
    tags: ['D3.js', 'Data Visualization', 'Graph Theory', 'JavaScript', 'Mapping',
        'Interactive UI', 'Directed Graphs', 'Color Encoding', 'Layout Design'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Built an interactive <strong>D3.js</strong> visualization depicting <strong>35+ courses</strong> taken at Georgia Tech, where nodes represent courses 
            and edges indicate course relationships; applied <strong>color gradients</strong> to reflect course depth and prerequisite complexity.
            </li>
            <li>
            Designed a <strong>dual-panel layout</strong>: left panel showing standalone general education courses without prerequisites, and 
            right panel mapping the interconnected technical curriculum with directed edges representing dependencies.
            </li>
        </ul>
    `,
    },
    {
    slug: 'ml-specialization',
    title: 'Machine Learning Specialization',
    subtitle: 'ML Developer',
    image: '/images/ML_Coursera.jpg',
    link: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VTUQNGS7RRGG/CERTIFICATE_LANDING_PAGE~VTUQNGS7RRGG.jpeg',
    tags: ['Neural Networks', 'SVM', 'Clustering', 'Gradient Descent', 'Backpropagation', 'Recommender Systems',
        'Hyperparameter Tuning', 'GNU Octave', 'Supervised Learning', 'Unsupervised Learning'],
    category: 'Certifications',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Designed and implemented diverse <strong>ML algorithms</strong> including <strong>neural networks</strong>, <strong>SVMs</strong>, and <strong>recommender systems</strong> using <strong>GNU Octave</strong>,
            achieving optimal model performance through systematic <strong>hyperparameter tuning</strong>.
            </li>
            <li>
            Built and optimized <strong>supervised</strong> and <strong>unsupervised learning models</strong> while mastering fundamental ML concepts through hands-on 
            implementation of <strong>clustering</strong>, <strong>gradient descent</strong>, and <strong>backpropagation</strong> algorithms.
            </li>
        </ul>
    `,
    },
    {
    slug: 'javascript-applications',
    title: 'JavaScript Applications',
    subtitle: 'Full Stack Developer',
    image: '/images/JS_certificate.jpg',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-862a5f46-9354-4fc6-97ad-966e08fb0582.jpg?v=1593967988000',
    tags: ['React', 'Node.js', 'MongoDB', 'Parcel', 'Babel', 'NPM',
        'Full-Stack', 'Real-Time Systems', 'ES6+', 'Performance Optimization'],
    category: 'Certifications',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
            <li>
            Engineered full-stack web applications including a <strong>real-time food ordering system</strong>, an <strong>interactive budget management tool</strong>,
            and a <strong>live stock trading platform</strong> using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </li>
            <li>
            Implemented modern development workflows with <strong>NPM</strong>, <strong>Parcel</strong> bundling, and <strong>Babel</strong> for optimized performance,
            reducing load times by <strong>40%</strong> and enabling seamless <strong>ES6+</strong> compatibility.
            </li>
        </ul>
    `,
    },
];

export default projects;