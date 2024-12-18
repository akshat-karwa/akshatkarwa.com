import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about" 
      className="w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      {/* Picture */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl relative">
        <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-lg border-8 border-black" style={{ top: '-1rem' }}>
          <Image
            src="/images/profile.jpg"
            alt="Akshat Karwa"
            width={450}
            height={450}
            className="rounded-full object-cover transform scale-110 mt-[-100px]"
          />
        </div>
        {/* About Text */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg md:max-w-xl w-full border-8 border-black">
          <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
          <p className="text-lg text-black">
            I am a passionate computer scientist who enjoys solving problems and learning new skills. Having a strong background in 
            <strong>Data Science</strong>, <strong>Algorithms</strong>, and <strong>Machine Learning</strong>,
            I aspire to design efficient computational systems that can enable effective tailored solutions and ease peoples lives.
            I am dedicated to developing high-quality, user-centric systems that drive meaningful impact, and am committed to making technology more accessible and beneficial.
            <br /><br /> <strong>MS in Computer Science at Georgia Tech</strong>
          </p>
        </div>
      </div>
    </section>
  );
}