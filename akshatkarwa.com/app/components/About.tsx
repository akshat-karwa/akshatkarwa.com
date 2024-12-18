import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about" 
      className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center px-4 py-12 md:py-0"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 max-w-6xl relative">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-lg border-8 border-black">
          <Image
            src="/images/profile.jpg"
            alt="Akshat Karwa"
            width={450}
            height={450}
            className="rounded-full object-cover transform scale-110 mt-[-100px]"
            priority
          />
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg w-full md:max-w-xl border-8 border-black">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">About Me</h2>
          <p className="text-base md:text-lg text-black">
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