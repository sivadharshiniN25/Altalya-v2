import { notFound } from "next/navigation";
import coursesData from "@/content/courses.json";

type Course = {
  slug: string;
  title: string;
  image: string;
  content: string;
};

export default function CourseDetail({ params }: { params: { slug: string } }) {
  
  const course = coursesData.find(
  (c) => c.slug === params.slug
  );

  if (!course) return notFound();

  const lines = course.content.split("\n").map((line: string) => line.trim());

  let currentSection = "overview";

  const sections: any = {
    overview: [],
    skills: [],
    syllabus: [],
    prerequisites: [],
    details: [],
  };

  lines.forEach((line: string) => {
    const l = line.toLowerCase();

    if (l.startsWith("course overview")) {
      currentSection = "overview";
      return;
    }

    if (l.startsWith("skills covered")) {
      currentSection = "skills";
      return;
    }

    if (l.startsWith("course syllabus")) {
      currentSection = "syllabus";
      return;
    }

    if (l.startsWith("prerequisites")) {
      currentSection = "prerequisites";
      return;
    }

    if (
      l.startsWith("durations") ||
      l.startsWith("students") ||
      l.startsWith("mode") ||
      l.startsWith("language")
    ) {
      sections.details.push(line);
      return;
    }

    if (!line) return;

    if (!sections[currentSection]) {
      sections.overview.push(line);
    } else {
      sections[currentSection].push(line);
    }
  });

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {course.title}
      </h1>

      <img
        src={course.image}
        alt={course.title}
        className="w-20 mb-10"
      />

      {/* Overview */}
      {sections.overview.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Course Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {sections.overview.join(" ")}
          </p>
        </div>
      )}

      {/* Prerequisites */}
      {sections.prerequisites.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Prerequisites
          </h2>
          <p className="text-gray-300">
            {sections.prerequisites.join(", ")}
          </p>
        </div>
      )}

      {/* Skills */}
      {sections.skills.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Skills Covered
          </h2>

          <div className="flex flex-wrap gap-4">
            {sections.skills
              .filter((skill: string) => skill.startsWith("http"))
              .map((skill: string, i: number) => (
                <div
                  key={i}
                  className="bg-black/50 p-3 rounded-lg flex items-center justify-center hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                >
                  <img
                    src={skill}
                    alt="skill"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Syllabus */}
      {sections.syllabus.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Course Syllabus
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {sections.syllabus.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 text-gray-300 mt-10">
        {["Durations", "Students", "Mode", "Language"].map((label, i) => {
          const value = sections.details.find((d: string) =>
            d.toLowerCase().includes(label.toLowerCase())
          );

          return (
            <div key={i} className="bg-black/50 p-6 rounded-xl">
              <strong>{label}:</strong>{" "}
              {value ? value.split(":")[1] : "N/A"}
            </div>
          );
        })}
      </div>

    </section>
  );
}