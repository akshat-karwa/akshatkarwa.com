import Image from 'next/image';

export default function About() {
  return (
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0"
      >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 max-w-7xl relative w-full pt-16 md:pt-24">
        {/* Responsive sizes for all devices */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden 
        shadow-lg border-8 border-black flex-shrink-0 mt-16 md:mt-24">
          <Image
            src="/images/profile.jpg"
            alt="Akshat Karwa"
            width={450}
            height={450}
            className="rounded-full object-cover transform scale-110 mt-[-100px]"
            priority
          />
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl lg:max-w-2xl border-8 border-black">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 lg:mb-6">About Me</h2>
          <p className="text-sm sm:text-base lg:text-lg text-black">
            I am a computer scientist passionate about <strong>data science</strong> and <strong>innovative problem-solving</strong>, currently 
            pursuing my <strong>MS in Computer Science at Georgia Tech</strong>. With expertise in <strong>algorithmic optimization</strong>,
            <strong> machine learning</strong>, and <strong>statistical modeling</strong>, I develop systems that transform complex data patterns 
            into actionable intelligence. My work combines rigorous analytical methods with creative problem-solving to build scalable, 
            user-centric applications that bridge the gap between technological innovation and real-world utility. 
            <br></br><br></br>
            I maintain an <strong>insatiable curiosity</strong> and <strong>embrace continuous learning</strong>, <strong>adapting my skillset </strong>
            to tackle increasingly complex computational challenges. When I&apos;m not coding, you&apos;ll find me exploring new technologies or collaborating with 
            developers on open-source projects. Driven by the belief that thoughtfully designed systems can create cascading positive impacts, I am 
            committed to democratizing technology access and building solutions that make a meaningful difference in people&apos;s lives.
            <br></br><br></br>
            <strong>Let&apos;s build something impactful together.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}