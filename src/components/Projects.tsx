import Button from "./Button";

interface Project {
  title: string;
  role?: string;
  duration?: string;
  grade?: string;
  description: string;
  link: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Face Recognition Demonstrator",
      role: "Lead UI & Full-Stack Developer",
      duration: "Oct 2024 – Sept 2025",
      description: "Developed a real-time computer vision web application as part of a year-long, 8-person Master's project at the University of Paderborn. Spearheaded the UI/UX design and frontend development while architecting backend Python APIs for Face Image Quality Assessment (FIQA). Successfully integrated YuNet for live camera face detection and leveraged QMagFace to enforce strict quality thresholds during user enrollment and automated face recognition.",
      grade: "1.0",
      link: "https://github.com/iamAdarshh/Face-Recognition-Demonstrator",
      tags: [
        "Python",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "QMagFace",
        "YuNet",
        "API Development",
        "Team Collaboration"
      ],
    },
    {
      title: "Classify Architectural Posts using ML",
      role: "Machine Learning Developer",
      duration: "June 2024 - July 2024",
      description: "Engineered an NLP text classification pipeline to identify whether developer discussions focus on software architectural issues. Addressed data scarcity by training and optimizing deep learning sequential models (LSTM and GRU) on a limited labeled dataset. Leveraged the finalized model to execute large-scale inference, successfully predicting and classifying architectural insights across a massive, unlabeled StackOverflow XML data dump.",
      link: "https://github.com/iamAdarshh/Classify-architectural-posts-using-ML",
      tags: [
        "Python",
        "TensorFlow",
        "LSTM",
        "GRU",
        "NLP",
        "Data Mining"
      ]
    },
    {
      title: "RHub - Movie Review WebApp",
      role: "Full-Stack Developer",
      duration: "Oct 2020 – April 2021",
      grade: "O (Outstanding)",
      description: "Designed and developed a comprehensive movie review platform as my Bachelor's final year project, earning an 'O' (Outstanding) grade. Built a robust Django backend to handle user authentication, interactive ratings, and personalized movie recommendations. Engineered and integrated an AI-driven sentiment analysis model using TensorFlow and LSTM neural networks to automatically categorize user reviews, enhancing content discovery and user decision-making.",
      link: "https://github.com/iamAdarshh/RHub---Movie-Review-WebApp",
      tags: [
        "Python",
        "Django",
        "TensorFlow",
        "LSTM",
        "Bootstrap 4",
        "Machine Learning"
      ],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-rounded text-zinc-400">code</span>
          <h2 className="text-2xl font-semibold text-zinc-900">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              target="_blank"
              href={project.link}
              className="block group p-6 bg-white rounded-xl border border-zinc-100 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              {(project.role || project.duration || project.grade) && (
                <div className="text-sm text-zinc-500 mb-3 leading-relaxed">
                  {project.role && <span className={`font-medium text-zinc-700 inline ${project.duration || project.grade ? "after:content-['•'] after:mx-2 after:text-zinc-300 after:font-light" : ""}`}>{project.role}</span>}
                  {project.duration && <span className={`inline ${project.grade ? "after:content-['•'] after:mx-2 after:text-zinc-300 after:font-light" : ""}`}>{project.duration}</span>}
                  {project.grade && (
                    <span className="inline align-middle">
                      <span className="text-xs font-medium text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200">
                        Grade: {project.grade}
                      </span>
                    </span>
                  )}
                </div>
              )}
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            href="https://github.com/iamAdarshh"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            View More on GitHub
            <span className="material-symbols-rounded text-xl">arrow_outward</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
