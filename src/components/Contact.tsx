import Button from "./Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-zinc-400 max-w-lg mx-auto mb-10">
          I'm currently open for new opportunities. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button href="mailto:adarshchoudharyb371@gmail.com" variant="white">
            Say Hello
          </Button>
          <Button
            href="https://github.com/iamAdarshh"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/choudhary-adarsh/"
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
