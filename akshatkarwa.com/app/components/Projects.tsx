import Link from 'next/link';
import projects from '../projects/data/projects';
import { useEffect } from 'react';

const groupedProjects = {
  'Data Science & Machine Learning': projects.filter(
    (p) => p.category === 'Data Science & Machine Learning'
  ),
  'AI & LLMs': projects.filter((p) => p.category === 'AI & LLMs'),
  'Software & Full-stack': projects.filter(
    (p) => p.category === 'Software & Full-stack'
  ),
  'Certifications': projects.filter((p) => p.category === 'Certifications'),
};

export default function Projects() {
  useEffect(() => {
    const scrollY = sessionStorage.getItem('projects-scroll');
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem('projects-scroll');
    }
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-16 w-full min-h-screen flex flex-col items-start justify-start bg-white text-black font-sans"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-neutral-300 pb-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-sans font-semibold text-left text-neutral-900 tracking-tight">
            Selected Works
          </h2>
        </div>
      </div>

      {Object.entries(groupedProjects).map(([sectionTitle, sectionProjects], index) => (
        <div key={sectionTitle} className="w-full mb-8">
          <h3 className="text-lg sm:text-xl font-sans font-semibold text-gray-700 mb-6 text-center">
            {sectionTitle}
          </h3>

          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionProjects.map((project) => (
                <Link
                  key={project.title}
                  href={`/projects/${project.slug}`}
                  onClick={() => {
                    sessionStorage.setItem('projects-scroll', window.pageYOffset.toString());
                  }}
                  className="group w-full h-full transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-full flex flex-col justify-between bg-neutral-50 p-5 rounded-2xl shadow-sm border-2 border-black hover:shadow-md">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-center text-center">
                      <h3 className="text-sm sm:text-base font-medium text-neutral-900">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {index !== Object.entries(groupedProjects).length - 1 && (
            <div className="w-full border-t border-neutral-300 mt-12" />
          )}
        </div>
      ))}

      <div className="h-24" />
    </section>
  );
}