import profile from '../assets/Adarsh_profile_image.jpg';

export default function Hero() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-3 leading-[1.15]">
          Adarsh Choudhary
        </h1>
        <h2 className="text-md md:text-lg text-zinc-600 font-medium mb-6">
          Software Developer <span className="text-zinc-300 mx-2 font-light">|</span> Master's student in Computer Science
        </h2>
        <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
          Hi, I'm Adarsh. I am passionate about building software that solves real-world problems.
          Currently pursuing my studies while gaining hands-on experience in modern web and software
          development.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shrink-0 bg-zinc-100 ring-4 ring-white shadow-xl">
        <img
          src={profile}
          alt="Adarsh Choudhary"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if profile.jpg doesn't exist yet
            e.currentTarget.src = "https://ui-avatars.com/api/?name=Adarsh+Choudhary&size=512&background=f4f4f5&color=18181b";
          }}
        />
      </div>
    </section>
  );
}
