'use client';

import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';
import projects from '../data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ProjectDetail({ params }: Props) {
  const { slug } = use(params);
  const router = useRouter();

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white text-black font-sans px-4 sm:px-8 lg:px-16 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <button
          onClick={() => {
            const scrollY = sessionStorage.getItem('projects-scroll');
            router.push('/#projects');
            if (scrollY) {
              setTimeout(() => {
                window.scrollTo({ top: parseInt(scrollY, 2), behavior: 'smooth' });
              }, 5);
            }
          }}
          className="inline-block bg-black text-white hover:bg-white hover:text-black border border-black transition duration-200 px-4 py-1.5 rounded-md text-sm"
        >
          &larr; Back to Projects
        </button>

        <h1 className="text-2xl sm:text-3xl font-medium text-center">{project.title}</h1>

        <div className="flex flex-wrap justify-center gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium bg-gray-100 text-gray-700 px-4 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="text-left text-neutral-700 text-lg sm:text-xl leading-8 space-y-5"
          dangerouslySetInnerHTML={{
            __html: project.content
              .replace(/<ul.*?>|<\/ul>/g, '')
              .replace(/<li.*?>/g, '<div class="mb-4">')
              .replace(/<\/li>/g, '</div>')
          }}
        />

        {/* ------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="w-full max-w-4xl mx-auto space-y-6">
          {project.slug === 'covid-forecasting' ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[600px] object-contain bg-neutral-50 p-4 border border-black rounded-xl shadow"
              />
              <iframe
                src={project.report}
                className="w-full h-[600px] rounded-xl border border-black shadow"
                title="PDF Report"
              />
            </>
          ) : project.report?.endsWith('.html') ? (
            <iframe
              src={project.report}
              className="w-full h-[800px] rounded-xl border border-black shadow"
              title="HTML Report"
            />
          ) : project.report?.endsWith('.pdf') ? (
            <iframe
              src={project.report}
              className="w-full h-[600px] rounded-xl border border-black shadow"
              title="PDF Report"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[500px] object-contain bg-neutral-50 p-4 border border-black rounded-xl shadow"
            />
          )}
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------------ */}

        {project.link && (
          <div className="pt-4 text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white hover:bg-white hover:text-black border border-black transition duration-200 px-4 py-1.5 rounded-md text-sm"
            >
              View Source / Code &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
