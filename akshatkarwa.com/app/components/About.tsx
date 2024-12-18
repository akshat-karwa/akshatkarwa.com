import Image from 'next/image';

export default function About() {
  return (
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0"
        style={{
            backgroundImage: 'url("/images/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            position: 'relative',
            width: '100%',
        }}
      >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 max-w-7xl relative w-full">
        {/* Responsive sizes for all devices */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-lg border-8 border-black flex-shrink-0">
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
            I am a passionate computer scientist who enjoys solving problems and learning new skills. Having a strong background in 
            <strong> Data Science</strong>, <strong> Algorithms</strong>, and <strong> Machine Learning</strong>,
            I aspire to design efficient computational systems that can enable effective tailored solutions and ease peoples lives.
            I am dedicated to developing high-quality, user-centric systems that drive meaningful impact, and am committed to making technology more accessible and beneficial.
            <br /><br /> <strong>MS in Computer Science at Georgia Tech</strong>
          </p>
        </div>
      </div>
    </section>
  );
}