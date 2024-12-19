import Link from 'next/link';

export default function Academics() {
  const url = "https://akshat-karwa.github.io/coursework-graph-visualization/";
  
  return (
      <section
        id="academics"
        className="relative w-full min-h-screen flex flex-col pt-24 pb-12"
      >
      <div className="flex items-center justify-center h-full">
        <div className="relative w-4/5 group">
          <Link 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all duration-300 flex items-center gap-2"
          >
            <span className="font-medium">Open Page</span>
            <svg 
              className="w-4 h-4" 
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </Link>
          
          <div className="aspect-[16/9] bg-white rounded-lg shadow-xl overflow-hidden">
            <iframe 
              src={url}
              className="w-full h-full border-0"
              title="Coursework Graph Visualization"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}