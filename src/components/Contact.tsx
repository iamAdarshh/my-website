export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-zinc-400 max-w-lg mx-auto mb-10">
          I'm currently open for new opportunities. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:adarshchoudharyb371@gmail.com"
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Say Hello
          </a>
          <a
            href="https://github.com/iamAdarshh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/choudhary-adarsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
