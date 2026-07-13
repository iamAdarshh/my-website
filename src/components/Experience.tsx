export type ExperienceType = {
  role: string;
  company: string;
  date: string;
  location: string;
  locationType: "Onsite" | "Remote" | "Hybrid";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string[];
}

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      role: "Software Developer",
      company: "Travel Cue Management GmbH",
      date: "Aug 2024 - Present",
      location: "Hamburg, Germany",
      locationType: "Remote",
      employmentType: "Part-time",
      description: [
        "Actively contributed to modernizing the core travel management suite by migrating legacy applications to API-driven architectures.",
        "Architected a Centralized FareEngine, resolving complex computational bugs and enhancing accuracy through rigorous unit testing.",
        "Streamlined B2B integrations by redesigning the Compas integration pipeline, significantly improving system performance and maintainability.",
        "Developed full-stack features for the RezCue application, empowering the operations team with dynamic UI and robust backend APIs."
      ]
    },
    {
      role: "Software Developer",
      company: "Travel Cue Management",
      date: "Oct 2023 - Mar 2024",
      location: "Mumbai, Maharashtra, India",
      locationType: "Onsite",
      employmentType: "Full-time",
      description: [
        "Engineered an Automated Passport Scanning API to streamline data extraction for travel requests.",
        "Researched and evaluated OCR services, optimizing for accuracy and cost-effectiveness.",
        "Implemented identity idempotency logic to prevent duplicate profiles, significantly reducing manual processing time.",
        "Developed a responsive UI using React, TypeScript, and Bootstrap 5 for enhanced user experience."
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Travel Cue Management",
      date: "Feb 2022 - Sept 2023",
      location: "Mumbai, Maharashtra, India",
      locationType: "Onsite",
      employmentType: "Full-time",
      description: [
        "Full-Stack Development: Contributed to front-end and back-end development, including API projects, .NET Core, SQL optimization, and complex feature enhancements.",
        "Project Leadership: Led the integration with Cytric and provided backup support to the front-end team. Innovation & POCs: Developed POCs for auto-generated ICS files, PowerBI integration, HR management systems (merge.dev), and other external systems like Thomalex and Cytric.",
        "Collaboration & Mentorship: Worked with senior developers to refine implementations, participated in technical discussions, and mentored new developers."
      ]
    },
    {
      role: "Trainee Software Developer",
      company: "Travel Cue Management",
      date: "Aug 2021 - Aug 2022",
      location: "Mumbai, Maharashtra, India",
      locationType: "Onsite",
      employmentType: "Full-time",
      description: [
        "Bug Fixes & Feature Development: Contributed to resolving bugs and developing new features, gaining proficiency in JavaScript, C#, .NET Framework, and SOLID principles.",
        "Team Collaboration: Worked with senior developers to understand and resolve application issues, quickly learning new technologies.",
        "Independent Work: Handled server-side tasks, SQL work, and feature development independently. Created a POC for the 'AdminTool' application using Blazor."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-rounded text-zinc-400">work</span>
          <h2 className="text-2xl font-semibold text-zinc-900">Work Experience</h2>
        </div>
        <div>
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-zinc-200 pb-8 last:pb-0">
              <div className="absolute w-3 h-3 bg-zinc-200 rounded-full -left-[6.5px] top-2"></div>
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-medium text-zinc-900">{exp.role}</h3>
                <span className="text-xs font-medium text-zinc-600 bg-zinc-200/60 px-2 py-0.5 rounded-md">{exp.employmentType}</span>
              </div>
              <div className="text-sm text-zinc-500 mb-3 flex flex-wrap gap-x-2">
                <span className="font-medium text-zinc-700">{exp.company}</span>
                <span>•</span>
                <span>{exp.date}</span>
                <span>•</span>
                <span>{exp.location} ({exp.locationType})</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 leading-relaxed marker:text-zinc-400">
                {exp.description.map((desc, j) => (
                  <li key={j} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
