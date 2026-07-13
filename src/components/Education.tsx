export type EducationType = {
  degree: string;
  fieldOfStudy: string;
  school: string;
  date: string;
  location?: string;
  description: string;
  activities: string[];
  skills: string[];
}

export default function Education() {
  const education: EducationType[] = [
    {
      degree: "Master's degree",
      fieldOfStudy: "Computer Science",
      school: "Paderborn University",
      location: "Paderborn, Germany",
      date: "April 2024 - Present",
      description: "",
      activities: [],
      skills: [],
    },
    {
      degree: "Bachelor's degree",
      fieldOfStudy: "Computer Science",
      school: "Ramnarian Ruia College",
      location: "Mumbai, Maharashtra, India",
      date: "July 2018 - March 2021",
      description: "",
      activities: [],
      skills: [],
    }
  ];

  return (
    <section id="education" className="py-20 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-rounded text-zinc-400">school</span>
          <h2 className="text-2xl font-semibold text-zinc-900">Study</h2>
        </div>
        <div>
          {education.map((edu, i) => (
            <div key={i} className="relative pl-6 border-l border-zinc-200 pb-8 last:pb-0">
              <div className="absolute w-3 h-3 bg-zinc-200 rounded-full -left-[6.5px] top-2"></div>
              <h3 className="text-lg font-medium text-zinc-900">
                {edu.degree} in {edu.fieldOfStudy}
              </h3>
              <div className="text-sm text-zinc-500 mb-3 flex flex-wrap gap-x-2">
                <span className="font-medium text-zinc-700">{edu.school}</span>
                <span>•</span>
                <span>{edu.date}</span>
                {edu.location && (
                  <>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </>
                )}
              </div>
              {edu.description && (
                <p className="text-zinc-600 leading-relaxed mb-3">{edu.description}</p>
              )}
              {edu.activities && edu.activities.length > 0 && (
                <div className="mb-2">
                  <span className="text-sm font-medium text-zinc-700">Activities & Societies: </span>
                  <span className="text-sm text-zinc-600">{edu.activities.join(", ")}</span>
                </div>
              )}
              {edu.skills && edu.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, j) => (
                    <span key={j} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
