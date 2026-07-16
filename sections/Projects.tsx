import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" maxWidth="6xl" className="bg-slate-50 py-24">
      <SectionTitle
        title="Selected Research Projects"
        subtitle="Research and engineering projects in medical AI and image analysis."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-blue-600">
                {project.category}
              </span>

              {project.status && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-slate-600">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech} tone="slate">
                  {tech}
                </Tag>
              ))}
            </div>

            {(project.paper || project.github) && (
              <div className="mt-6 flex gap-4 text-sm font-semibold">
                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Paper →
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:underline"
                  >
                    Code →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
