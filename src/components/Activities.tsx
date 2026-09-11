export type ActivityType = {
  title: string;
  role: string;
  date: string;
  location: string;
  locationType: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function Activities() {
  const activities: ActivityType[] = [
    {
      title: "WeAreDevelopers World Congress 2025",
      role: "Volunteer",
      date: "14-16 July 2025",
      location: "Berlin",
      locationType: "Onsite",
      description: "As a volunteer at the WeAreDevelopers World Congress in Berlin, I actively supported the smooth operation of one of Europe's largest tech conferences. My responsibilities included assisting attendees with inquiries, guiding them through the venue, managing registration desks, and ensuring timely communication between participants and event staff. This role provided me with firsthand exposure to a world-class tech ecosystem, allowing me to network with industry leaders, learn about the latest trends in AI, software engineering, and product development, and contribute to a vibrant international community of developers and innovators."
    },
    {
      "title": "MLH HackOn 2.0",
      "role": "Participant",
      "date": "28-30 May 2021",
      "location": "Virtual",
      "locationType": "Online",
      "description": "Collaborated in a team of three during an intensive 48-hour hackathon to develop 'Eunoia', a Django-based mental health web application. Engineered a platform featuring a custom user assessment test that algorithmically curates and recommends targeted blog posts authored by verified experts based on individual results."
    },
  ];

  return (
    <section id="activities" className="py-20 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="material-symbols-rounded text-zinc-400">local_activity</span>
          <h2 className="text-2xl font-semibold text-zinc-900">Activities</h2>
        </div>
        <div className="grid gap-6">
          {activities.map((activity, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-zinc-100 flex flex-col md:flex-row gap-6">
              {activity.imageUrl && (
                <div className="w-full md:w-64 h-40 shrink-0 rounded-lg overflow-hidden bg-zinc-100">
                  <img src={activity.imageUrl} alt={activity.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <h3 className="text-lg font-medium text-zinc-900">{activity.title}</h3>
                  <span className="text-xs font-medium text-zinc-600 bg-zinc-200/60 px-2 py-0.5 rounded-md">
                    {activity.role}
                  </span>
                </div>
                <div className="text-sm text-zinc-500 mb-3 flex flex-wrap gap-x-2">
                  <span>{activity.date}</span>
                  {activity.location && (
                    <>
                      <span>•</span>
                      <span>
                        {activity.location} {activity.locationType && `(${activity.locationType})`}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-zinc-600 leading-relaxed">{activity.description}</p>
                {activity.link && (
                  <a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                  >
                    View more <span className="material-symbols-rounded text-sm">arrow_outward</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
