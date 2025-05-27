"use client";
import Image from "next/image";
export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 relative w-full min-h-screen flex flex-col items-start justify-start bg-white text-black font-sans"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-neutral-300 pb-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-sans font-semibold text-left text-neutral-900 tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-2 w-full pl-8">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl leading-snug">
              Georgia Institute of Technology
            </h3>
            <p className="text-sm sm:text-lg text-neutral-600">
              College of Computing
            </p>
            <p className="text-sm sm:text-base text-neutral-600">
              Atlanta, Georgia, United States of America
            </p>
          </div>

          <ul className="mt-1 space-y-1 text-sm sm:text-lg text-black list-disc list-inside">
            <li>
              Master of Science in Computer Science &emsp; | &emsp; Specialization in Machine Learning &emsp; | &emsp; GPA: 4.0/4.0 &emsp; | &emsp; Aug 2024 - May 2025
            </li>
            <li>
              Bachelor of Science in Computer Science &emsp; | &emsp; Specialization in AI &amp; Info. Internetworks &emsp; | &emsp; GPA: 3.9/4.0 &emsp; | &emsp; Aug 2021 - May 2024
            </li>
          </ul>

          <a
            href="https://akshat-karwa.github.io/coursework-graph-visualization/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-300 text-sm sm:text-base"
          >
            View Relevant Coursework
          </a>
          <ul className="mt-1 space-y-1 text-sm sm:text-lg text-black list-disc list-inside">
            <li>
              Honors &amp; Awards: Highest Honors, Dean&apos;s List, Faculty Honors
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="group w-full max-w-xs sm:max-w-sm transition hover:scale-105">
              <a
                href="/diplomas/Diploma_MSCS_Georgia_Tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/ms-diploma.png"
                  alt="MS Diploma"
                  width={600}
                  height={450}
                  className="w-full rounded-md shadow-md border border-black"
                />
                <p className="mt-2 text-center text-base sm:text-lg text-neutral-700 group-hover:text-black">
                  MS Diploma
                </p>
              </a>
            </div>
            <div className="group w-full max-w-xs sm:max-w-sm transition hover:scale-105">
              <a
                href="/diplomas/Diploma_BSCS_Georgia_Tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/bs-diploma.png"
                  alt="BS Diploma"
                  width={600}
                  height={450}
                  className="w-full rounded-md shadow-md border border-black"
                />
                <p className="mt-2 text-center text-base sm:text-lg text-neutral-700 group-hover:text-black">
                  BS Diploma
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
