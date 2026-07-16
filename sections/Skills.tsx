import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" maxWidth="6xl" className="bg-white py-24">
      <SectionTitle
        title="Technical Skills"
        subtitle="Core technologies and research expertise."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {group.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <Tag key={skill} tone="slate">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
