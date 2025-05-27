const projects = [
  {
    slug: 'buzzai',
    title: 'BuzzAI - Course Discovery System - Georgia Tech',
    subtitle: 'Software Engineer',
    image: '/images/BuzzAI.jpg',
    link: 'https://github.com/Mehul20/Buzz-AI',
    tags: ['Transformers', 'FAISS', 'NLP', 'Scraping', 'Llama'],
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
    tags: ['SARIMA', 'LSTM', 'Prophet', 'Time Series', 'Feature Engineering'],
    category: 'Data Science & Machine Learning',
    report: '/reports/EPI_Project_Report.pdf',
    content: `
      <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
          Engineered an epidemic spread forecasting system utilizing state-of-the-art models
          (<strong>SARIMA</strong>, <strong>Prophet</strong>, <strong>LSTM</strong>, <strong>RNN</strong>, <strong>SI</strong>, <strong>TBATS</strong>),
          integrating exogenous data across <strong>1,674 days</strong>, reducing prediction error by <strong>24%</strong> over traditional approaches.
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
    tags: ['Random Forest', 't-SNE', 'UMAP', 'PCA', 'Data Analysis'],
    category: 'Data Science & Machine Learning',
    report: '/reports/ML_Project.html',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Analyzed Spotify data encompassing <strong>38,000+ songs</strong> to develop a predictive model, achieving
            <strong>87.3% accuracy</strong> in genre classification using <strong>Random Forest</strong> (<em>F1 score: 0.88</em>)
            and <strong>96% accuracy</strong> in hit prediction.
        </li>
        <li>
            Conducted data pre-processing, explored dimensionality reduction techniques like <strong>PCA</strong>, <strong>t-SNE</strong>,
            and <strong>UMAP</strong>, applied machine learning algorithms, and created visualizations to uncover patterns in music
            genre and popularity trends.
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
    tags: ['YourTTS', 'TortoiseTTS', 'Speaker Encoder', 'Voice Replication', 'Fine-tuning'],
    category: 'AI & LLMs',
    report: '/reports/DL_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Built a voice cloning system using <strong>YourTTS</strong> and <strong>TortoiseTTS</strong>, achieving exceptional voice replication 
            (<em>Mean Cosine Similarity: 0.982</em>, <em>Mean MSE: 0.019</em>) through architectural optimizations and effective fine-tuning.
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
    tags: ['BigQuery', 'Pandas', 'XGBoost', 'Cloud Computing', 'Resource Utilization'],
    category: 'Data Science & Machine Learning',
    report: '/reports/DNS_Project_Report.pdf',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Analyzed <strong>10M+ trace rows from Google</strong>, <strong>2.7M+ VMs from Azure</strong>, and <strong>4000+ machines from Alibaba</strong> to uncover 
            inefficiencies in CPU and memory utilization; normalized heterogeneous schemas and leveraged <strong>BigQuery</strong> and <strong>Pandas</strong> to enable cross-platform insights.
        </li>
        <li>
            Built <strong>XGBoost</strong> regression models to predict utilization patterns, achieving <strong>81.8% CPU accuracy</strong> on Google and <strong>87.7% memory accuracy</strong> on Alibaba; 
            revealed Azure&apos;s over-provisioning, Google&apos;s bursty workload behavior, and Alibaba&apos;s highly efficient memory usage.
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
    tags: ['EMADE', 'NSGA-II', 'MOEA/D', 'Multi-Island Model', 'Evolutionary Algorithms'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Developed the <strong>EMADE framework</strong>, implementing a <strong>multi-island model</strong> with diverse objectives and dynamic migration topology that improved 
            population diversity by <strong>38% phenotypically</strong> and <strong>11% genotypically</strong>, outperforming algorithms like <strong>NSGA-II</strong> and <strong>MOEA/D</strong>.
        </li>
        <li>
            Optimized framework performance, achieving an <strong>18% improvement in convergence speed</strong>, <strong>22% better objective coverage</strong>, and reducing 
            computational overhead by <strong>27%</strong> on the Georgia Tech PACE cluster.
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
    tags: ['Web Crawling', 'Selenium', 'React', 'Express', 'MySQL'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Created a high-performance web crawler processing listings at <strong>1.04s/post</strong> with <strong>0.14s parsing speed</strong> for 100+ posts, and optimized storage 
            to <strong>0.08s/entry</strong> through <strong>Selenium WebDriver</strong> implementation.
        </li>
        <li>
            Architected a full-stack job platform using <strong>React</strong>, <strong>Express</strong>, and <strong>MySQL</strong> processing <strong>10,000+ posts</strong> in 24 mins, featuring 
            <strong>0.07s query response time</strong>, ghost job detection, and a user-friendly multi-parameter filtering interface for personalized job search.
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
    tags: ['Time Series', 'SARIMA', 'Trend Analysis', 'Forecasting', 'EDA'],
    category: 'Data Science & Machine Learning',
    report: '/reports/viewership_forecasting.html',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Developed time series forecasting models on hourly streaming viewership data using <strong>Simple, Double, and Triple Exponential Smoothing</strong>, 
            as well as <strong>SARIMA</strong> with seasonal differencing and bootstrapped confidence intervals.
        </li>
        <li>
            Conducted <strong>EDA</strong>, trend/seasonality decomposition, and calendar-effect analysis; optimized forecasting accuracy via solver tuning 
            and validation on a <strong>75/25 time-based split</strong>, minimizing <strong>Mean Absolute Error (MAE)</strong>.
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
    tags: ['Trading', 'Automation', 'Backtesting', 'APIs', 'Real-Time Systems'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Developed an algorithmic trading platform integrated with <strong>Kotak Mahindra Bank API</strong>, enabling automated trade execution 
            with <strong>average latency under 50ms</strong>, and reducing manual intervention by <strong>90%</strong>. Implemented robust error handling 
            to ensure continuous operation during market hours.
        </li>
        <li>
            Conducted comprehensive <strong>strategy back-testing</strong> using <strong>5 years of historical market data</strong> to optimize performance 
            and adapt to current market conditions, and optimized algorithm performance through efficient data handling techniques.
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
    tags: ['MySQL', 'Procedures', 'Views', 'Simulation', 'Schema Design'],
    category: 'Data Science & Machine Learning',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Implemented <strong>MySQL procedures, views, and structures</strong> to administer passenger/pilot profiles, flight assignments,
            delays, ticket purchases, and boarding/disembarking processes.
        </li>
        <li>
            Analyzed complex scenarios, handled <strong>dataset irregularities</strong>, and stress-tested logic through <strong>simulation cycles</strong>.
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
    tags: ['Mobile Game', 'UI/UX', 'Game Mechanics', 'Multiscreen'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Developed a feature-rich mobile game implementing <strong>gameplay mechanics, player functionalities, and assets</strong>.
        </li>
        <li>
            Integrated <strong>multiple screens</strong> and optimized <strong>UI/UX</strong> for seamless performance across devices.
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
    tags: ['D3.js', 'Graph Theory', 'Visualization', 'Education'],
    category: 'Software & Full-stack',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Built an interactive <strong>D3.js visualization</strong> showing 35+ Georgia Tech courses, using <strong>nodes and edges</strong> to represent course relationships and depth.
        </li>
        <li>
            Created a dual-panel layout separating <strong>general education</strong> and <strong>technical courses</strong> with directed edges showing dependencies.
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
    tags: ['Neural Networks', 'SVM', 'Octave', 'Unsupervised Learning', 'ML Theory'],
    category: 'Certifications',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Designed and implemented <strong>neural networks, SVMs, and recommender systems</strong> using GNU Octave, optimizing models via hyperparameter tuning.
        </li>
        <li>
            Mastered <strong>clustering, gradient descent, and backpropagation</strong> through hands-on model building and testing.
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
    tags: ['React', 'Node.js', 'MongoDB', 'Parcel', 'ES6+'],
    category: 'Certifications',
    content: `
        <ul class="list-disc list-inside space-y-2 text-black text-sm">
        <li>
            Built full-stack apps like a <strong>real-time food ordering system</strong>, <strong>budget tool</strong>, and <strong>stock trading platform</strong> using React, Node.js, and MongoDB.
        </li>
        <li>
            Used <strong>Parcel, Babel, and ES6+</strong> to reduce load times by 40% and ensure modern compatibility.
        </li>
        </ul>
    `,
    },
];

export default projects;