export default function Skills() {
  const skills = [
    {
      category: "Programming",
      items: ["C#", "Python", "TypeScript", "SQL"]
    },
    {
      category: "Cloud / DevOps / Platform",
      items: ["Azure", "Amadeus (MasterPricer, Cyctric)", "Thomalex", "Docker", "CI/CD pipelines"]
    },
    {
      category: "Software / Systems",
      items: [".Net Core", ".Net Framework", "Blazor", "React", "DBMS"]
    },
    {
      category: "Tools",
      items: ["WSL", "Git", "Visual Studio", "VS Code", "SQL Server", "Figma", "LaTeX", "PowerBI"]
    },
    {
      category: "Soft Skills",
      items: ["Leadership", "Mentorship", "Time Management", "Problem Solving", "Critical Thinking"]
    },
    {
      category: "Languages",
      items: ["English (C1)", "German (A2)"]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-rounded text-zinc-400">code</span>
          <h2 className="text-2xl font-semibold text-zinc-900">Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {skills.map((skillGroup, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <h3 className="text-zinc-900 font-medium md:w-48 shrink-0">{skillGroup.category}</h3>
              <div className="flex flex-wrap text-zinc-600 leading-relaxed">
                {skillGroup.items.map((item, j) => (
                  <span key={j}>
                    {item}
                    {j < skillGroup.items.length - 1 && (
                      <span className="text-zinc-300 mx-2 font-light">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
